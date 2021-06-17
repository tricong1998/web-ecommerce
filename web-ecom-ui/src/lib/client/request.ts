import axios, { AxiosError, AxiosInstance, AxiosRequestConfig } from 'axios';
import { ACCESS_TOKEN_HEADER_KEY, X_ACCESS_TOKEN_HEADER_KEY } from 'src/constants/req';
import { refreshToken } from 'src/services/client/api-auth/api-auth.services';
import { RefreshTokenResponse } from 'src/services/client/api-auth/api-auth.type';
import { tokenCookies } from '../cookies/client/token-cookies';

/**
 * Axios instance for browser,
 * with `x-access-token` header injected
 */
export const apiClientBrowser = axios.create();

/**
 * Axios instance for browser,
 * with `access-token` header injected
 */
export const apiClientBrowserAuth = axios.create();

const MAX_REFRESH_RETRIES = 3;

export const setupAuthInterceptorForApiClient = (onExpired: () => void) => {
  setupAuthInterceptor(apiClientBrowser, onExpired);
  setupAuthInterceptor(apiClientBrowserAuth, onExpired);
};

function setupAuthInterceptor(apiClient: AxiosInstance, onExpired: () => void) {
  let isCallingRefreshToken = false;
  let refreshRetries = 0;

  const token = tokenCookies.get();

  if (token) {
    injectTokenToApiClient(token.accessToken);
  }

  apiClient.interceptors.response.use(
    (res) => res,
    async (error: AxiosError) => {
      if (error.response) {
        if (error.response.status === 401) {
          if (!isCallingRefreshToken) {
            isCallingRefreshToken = true;
            refreshRetries++;
            if (refreshRetries < MAX_REFRESH_RETRIES) {
              const res = await refreshToken(token?.refreshToken || '');
              if (res) {
                refreshRetries = 0;
                tokenCookies.set(res);
                injectTokenToApiClient(res.accessToken);
                applyAccessToken(error.config, res);
                isCallingRefreshToken = false;
                return apiClient.request(error.config);
              }
            }

            onExpired && onExpired();
          }
        }
      }
    },
  );
}

export function injectTokenToApiClient(token: string) {
  apiClientBrowser.defaults.headers[X_ACCESS_TOKEN_HEADER_KEY] = token;
  apiClientBrowserAuth.defaults.headers[ACCESS_TOKEN_HEADER_KEY] = token;
}

export function removeTokenFromApiClient() {
  delete apiClientBrowser.defaults.headers[X_ACCESS_TOKEN_HEADER_KEY];
  delete apiClientBrowserAuth.defaults.headers[ACCESS_TOKEN_HEADER_KEY];
}

// ***************************************
// private

function applyAccessToken(requestConfig: AxiosRequestConfig, response: RefreshTokenResponse) {
  if (requestConfig.headers[X_ACCESS_TOKEN_HEADER_KEY]) {
    requestConfig.headers[X_ACCESS_TOKEN_HEADER_KEY] = response.accessToken;
  } else if (requestConfig.headers[ACCESS_TOKEN_HEADER_KEY]) {
    requestConfig.headers[ACCESS_TOKEN_HEADER_KEY] = response.accessToken;
  }
}
