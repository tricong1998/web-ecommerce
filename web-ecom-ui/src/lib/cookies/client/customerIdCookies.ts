import Cookies from 'js-cookie';
import { CUSTOMER_ID_KEY } from '../constants';

export const customerIdCookies = {
  get: () => Cookies.get(CUSTOMER_ID_KEY) || '',
  set: (customerId: string) => Cookies.set(CUSTOMER_ID_KEY, customerId || ''),
};
