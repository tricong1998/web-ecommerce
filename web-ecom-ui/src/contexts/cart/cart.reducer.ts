import { cartCookies } from 'src/lib/cookies/client-cookies';
import { produce } from 'src/lib/client/immer';
import { Cart, CartItemVariation } from 'src/services/api-cart.type';

import { CartActionType } from './cart.actions';
import { cartItemsToMap } from './cart.mapper';
import { CartAction } from './cart.types';

export type CartStore = Omit<Cart, 'cartItems'> & {
  // key is variationId
  cartItems: Map<string, CartItemVariation>;
  email?: string;
  customerId?: string;
  isFetching?: boolean;
};

export const initialCart: CartStore = {
  _id: cartCookies.getId() || '',
  tenantId: '',
  sub: '', // `sub` in decoded accessToken

  // key is variationId
  cartItems: cartItemsToMap([]),
  totalQuantity: 0,
  subtotal: 0,
  shippingFee: 0,
  discountedAmount: 0,
  total: 0,
  totalCartPreview: 0,
  couponCode: '',
  isFetching: false,
};

export function createEmptyCart(id = '') {
  return Object.assign({}, initialCart, { _id: id });
}

export function initCart(cart?: CartStore) {
  return cart || createEmptyCart();
}

export function cartReducer(state: CartStore, action: CartActionType) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  return produce(state, (draft) => {
    switch (action.type) {
      case CartAction.INIT:
        return initCart(action.cart as CartStore);

      case CartAction.FETCH_CART:
        draft.isFetching = action.isFetching;
        break;
    }
  });
}
