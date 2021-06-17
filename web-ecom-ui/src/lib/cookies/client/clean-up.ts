import Cookies from 'js-cookie';

import { CUSTOMER_ACCESS_TOKEN_KEY, CUSTOMER_ID_KEY, LOGIN_RES_COOKIES_NAME } from '../constants';

export function cleanUpCookies() {
  Cookies.remove(LOGIN_RES_COOKIES_NAME);
  Cookies.remove(CUSTOMER_ACCESS_TOKEN_KEY);
  Cookies.remove(CUSTOMER_ID_KEY);
}
