import { CartItemVariation } from 'src/services/api-cart.type';

export function cartItemsToMap(items: CartItemVariation[]) {
  return new Map(items.map((i) => [i.variationId, i]));
}
