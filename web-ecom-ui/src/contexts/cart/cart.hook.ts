import { useReducer } from 'react';
import { cartReducer, initCart, initialCart } from './cart.reducer';

export function useCart(defaultCart?: typeof initialCart) {
  const [cart, dispatchCart] = useReducer(cartReducer, defaultCart || initialCart, initCart);
  return { cart, dispatchCart };
}
