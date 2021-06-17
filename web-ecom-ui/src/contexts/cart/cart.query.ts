import { Dispatch } from 'react';

import { getCartByCustomerId, getCartById } from 'src/services/client';
import { CartActionType, changeFetchingState, initCartState } from './cart.actions';
import { cartItemsToMap } from './cart.mapper';

type CartQueryProps = {
  cartId?: string;
  customerId?: string;
  accessToken?: string;
  clientId?: string;
  dispatch?: Dispatch<CartActionType>;
  merchantId: string;
};

export async function dispatchGetCart({
  dispatch,
  cartId,
  customerId,
  accessToken,
  merchantId,
  clientId,
}: CartQueryProps) {
  dispatch && dispatch(changeFetchingState(true));

  let cart;

  if (customerId && accessToken) {
    cart = await getCartByCustomerId({
      customerId,
      accessToken,
      clientId,
      merchantId,
    });
  } else if (cartId) {
    cart = await getCartById({
      id: cartId,
      clientId,
      merchantId,
    });
  }

  if (cart?._id) {
    dispatch &&
      dispatch(
        initCartState({
          ...cart,
          _id: cart._id,
          cartItems: cartItemsToMap(cart.cartItems),
        }),
      );
  } else {
    dispatch && dispatch(changeFetchingState(false));
  }
}
