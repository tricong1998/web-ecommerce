import Cookies from 'js-cookie';
import { RefreshTokenResponse } from 'src/services/client/api-auth/api-auth.type';
import { CUSTOMER_ACCESS_TOKEN_KEY } from '../constants';

export const tokenCookies = {
  get() {
    const token = Cookies.get(CUSTOMER_ACCESS_TOKEN_KEY);
    if (!token?.startsWith('{')) {
      return null;
    }

    return JSON.parse(token) as RefreshTokenResponse;
  },

  set({
    accessToken,
    expiresIn,
    refreshToken,
  }: {
    accessToken: string;
    expiresIn: number;
    refreshToken: string;
  }) {
    Cookies.set(
      CUSTOMER_ACCESS_TOKEN_KEY,
      JSON.stringify({
        accessToken,
        expiresIn: expiresIn * 1000 + Date.now(),
        refreshToken,
      }),
      {
        secure: process.env.NODE_ENV !== 'development',
      },
    );
  },
};
