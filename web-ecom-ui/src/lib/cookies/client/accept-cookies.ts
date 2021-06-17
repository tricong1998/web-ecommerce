import Cookies from 'js-cookie';
import { ACCEPT_COOKIES_KEY } from '../constants';

export const acceptCookies = {
  get() {
    return Boolean(Cookies.get(ACCEPT_COOKIES_KEY));
  },
  set() {
    Cookies.set(ACCEPT_COOKIES_KEY, 'true');
  },
};
