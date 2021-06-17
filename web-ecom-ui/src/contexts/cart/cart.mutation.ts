import { Dispatch } from 'react';
import { customerStore } from 'src/lib/client-store/customer-store';
import { cartCookies } from 'src/lib/cookies/client-cookies';
import { Cart, CartItemRequest } from 'src/services/api-cart.type';
import { createCart, updateCart } from 'src/services/client';

import { CartActionType, initCartState } from './cart.actions';
import { cartItemsToMap } from './cart.mapper';

type CartMutationProps = {
  cartId?: string;
  dispatch?: Dispatch<CartActionType>;
  voucherCode?: string[];
  items: CartItemRequest[];
  merchantId: string;
  merchantCode: string;
  onSuccess?: () => void;
  onError?: (err?: any) => void;
};

export async function dispatchAddItemCreateCart({
  dispatch,
  items,
  voucherCode,
  merchantId,
  merchantCode,
  onError,
}: CartMutationProps) {
  const cart = await createCart({
    merchantId,
    cart: {
      cartItems: items,
      merchantCode,
      tenantSite: window.location.origin,
      ...customerStore.getInfo(),
    },
    voucherCode,
    onError,
  });

  dispatchUpdateCart({
    cart,
    dispatch,
  });
}

export async function requestUpdateCart({
  cartId,
  dispatch,
  items,
  voucherCode,
  merchantId,
  merchantCode,
  onSuccess,
  onError,
}: CartMutationProps) {
  const cart = await updateCart({
    cartId: cartId as string,
    merchantId,
    cart: {
      cartItems: items,
      merchantCode,
      tenantSite: window.location.origin,
      ...customerStore.getInfo(),
    },
    voucherCode,
    onSuccess,
    onError,
  });

  if (cart && cart._id) cartCookies.setId(cart._id);

  dispatchUpdateCart({
    cart,
    dispatch,
  });
}

// ***************************************
// private

type DispatchUpdateCartProps = {
  cart?: Cart;
  dispatch?: Dispatch<CartActionType>;
};

function dispatchUpdateCart({ cart, dispatch }: DispatchUpdateCartProps) {
  if (cart?._id) {
    dispatch &&
      dispatch(
        initCartState({
          ...cart,
          _id: cart._id,
          cartItems: cartItemsToMap(cart.cartItems),
        }),
      );
  }
}
