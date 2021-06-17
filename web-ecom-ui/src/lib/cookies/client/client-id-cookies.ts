import Cookies from 'js-cookie';
import { v4 } from 'uuid';
import { CLIENT_ID_KEY } from '../constants';

export const clientIdCookies = {
  get() {
    return Cookies.get(CLIENT_ID_KEY);
  },
  set() {
    const uuid = v4();
    Cookies.set(CLIENT_ID_KEY, uuid);
    return uuid;
  },
};
