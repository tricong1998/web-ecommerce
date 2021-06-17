import Cookies from 'js-cookie';
import { CART_ID_KEY } from '../constants';

export const cartCookies = {
  getId() {
    return Cookies.get(CART_ID_KEY);
  },
  setId(val: string) {
    Cookies.set(CART_ID_KEY, val);
  },
  clear() {
    Cookies.remove(CART_ID_KEY);
  },
};
