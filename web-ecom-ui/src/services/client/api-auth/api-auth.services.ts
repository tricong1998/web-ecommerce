import { config } from 'src/constants/config';
import { apiClientBrowserAuth } from 'src/lib/client/request';
import { RefreshTokenResponse } from './api-auth.type';

const apiIamUrl = `${config.apiBaseUrl}/api/iam`;

export async function refreshToken(refreshToken: string) {
  try {
    if (refreshToken) {
      const res = await apiClientBrowserAuth.post<RefreshTokenResponse>(
        `${apiIamUrl}/auth/refresh-token`,
        {
          refreshToken,
        },
        {
          headers: null,
        },
      );
      return res.data;
    }
  } catch (err) {
    console.error(err);
  }
}
