import Cookies from 'js-cookie';
import { NextRouter } from 'next/dist/client/router';
import { SetStateAction } from 'react';
import { PROTECTED_ROUTES, routeGetHomeUrl } from 'src/constants/routes';
import { customerStore } from 'src/lib/client-store/customer-store';
import { injectTokenToApiClient, removeTokenFromApiClient } from 'src/lib/client/request';
import { cleanUpCookies } from 'src/lib/cookies/client/clean-up';
import { tokenCookies } from 'src/lib/cookies/client/token-cookies';
import { LOGIN_RES_COOKIES_NAME } from 'src/lib/cookies/constants';
import { refreshToken } from 'src/services/client/api-auth/api-auth.services';
import { CustomerLoginResponse } from 'src/services/client/api-auth/api-auth.type';

export const logout = ({
  router,
  forcedLogout,
}: {
  router: NextRouter;
  forcedLogout?: boolean;
}) => {
  // clear cookies, customer info
  cleanUpCookies();
  customerStore.clearInfo();

  // clear customer token
  removeTokenFromApiClient();

  // push to home if being in required auth pages
  if (PROTECTED_ROUTES.includes(router.pathname) || forcedLogout) {
    router.push(routeGetHomeUrl(router));
  }
};

export const checkAuthenticated = () => {
  // get user access token
  const token = tokenCookies.get();
  const loginResponse = Cookies.get(LOGIN_RES_COOKIES_NAME);

  if (token && loginResponse) {
    const data: CustomerLoginResponse = JSON.parse(loginResponse);

    if (Date.now() > data.expires_in) {
      return { result: false };
    }

    customerStore.setAccessToken(token.accessToken);
    injectTokenToApiClient(token.accessToken);

    return {
      result: true,
      data,
    };
  }

  return { result: false };
};

export async function requestRefreshToken({
  router,
  setAuthenticated,
}: {
  router: NextRouter;
  setAuthenticated: (value: SetStateAction<boolean>) => void;
}) {
  try {
    const res = await refreshToken(tokenCookies.get()?.refreshToken || '');
    if (res) {
      customerStore.setAccessToken(res.accessToken);
      injectTokenToApiClient(res.accessToken);
      tokenCookies.set(res);
      setAuthenticated(true);
    } else {
      logout({ router });
    }
  } catch (error) {
    console.error(error);
    logout({ router });
  }
}
