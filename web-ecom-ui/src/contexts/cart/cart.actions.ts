import { CartStore } from './cart.reducer';
import { CartAction } from './cart.types';

// #region action creators

/**
 * Do not pass anything to init an empty cart
 */
export function initCartState(cart?: CartStore) {
  return {
    type: CartAction.INIT,
    cart,
  };
}

export function changeFetchingState(isFetching: boolean) {
  return {
    type: CartAction.FETCH_CART,
    isFetching,
  };
}

// #endregion

export type CartActionType = Partial<
  ReturnType<typeof initCartState> & ReturnType<typeof changeFetchingState>
>;
