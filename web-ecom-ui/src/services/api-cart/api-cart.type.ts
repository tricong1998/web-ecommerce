import { S3Object } from './api-common.type';

export type Cart = {
  _id: string;
  tenantId: string;
  sub: string;
  cartItems: CartItemVariation[];
  totalQuantity: number;
  subtotal: number;
  shippingFee?: number;
  discountedAmount?: number;
  total: number;
  totalCartPreview: number;
  couponCode?: string;
  voucherCode?: string;
  voucherDiscountedAmount?: number;
};

export type GetCartDto = {
  id?: string;
  customerId?: string;
  accessToken?: string;
  clientId?: string;
  merchantId: string;
  voucherCode?: string[];
};

export type CreateCartDto = {
  cart: CartRequestBody;
  merchantId: string;
  voucherCode?: string[];
  onSuccess?: () => void;
  onError?: (err?: any) => void;
};

export type UpdateCartDto = CreateCartDto & {
  cartId: string;
};

export type CartRequestBody = {
  customerId?: string;
  email?: string;
  customerCode?: string;
  merchantCode: string;
  tenantSite: string;
  cartItems: CartItemRequest[];
};

export type CartItemVariation = CartItemRequest & {
  itemName: string;
  variationName: string;

  images: S3Object[];

  unitPrice: number;
  discount?: number;
  discountedPrice?: number;
  discountedPercentage?: number;
  voucherDiscountedPercentage?: number;
  totalDiscountedPrice?: number;
  totalPrice: number;
  slug: string;
};

export type CartItemRequest = {
  itemId: string;
  variationId: string;
  quantity: number;
};
