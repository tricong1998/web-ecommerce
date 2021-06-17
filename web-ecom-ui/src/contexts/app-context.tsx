import * as React from 'react';

import { useCart } from './cart/cart.hook';
import { initialCart } from './cart/cart.reducer';
import { useAcceptCookies } from './cookies/cookies';
import { useInventory } from './inventory/inventory';
import { useToast } from './toast/toast';
import { initalMerchantInfo, useMerchant } from './merchant/merchant';

export const AppContext = React.createContext<{
  acceptCookies?: ReturnType<typeof useAcceptCookies>['acceptCookies'];
  setAcceptCookies?: ReturnType<typeof useAcceptCookies>['setAcceptCookies'];
  cart: ReturnType<typeof useCart>['cart'];
  dispatchCart?: ReturnType<typeof useCart>['dispatchCart'];
  toast?: ReturnType<typeof useToast>['toast'];
  setToast?: ReturnType<typeof useToast>['setToast'];
  inventory: ReturnType<typeof useInventory>['inventory'];
  setInventory: ReturnType<typeof useInventory>['setInventory'];
  merchant: ReturnType<typeof useMerchant>['merchant'];
  setMerchant: ReturnType<typeof useMerchant>['setMerchant'];
}>({
  cart: initialCart,
  inventory: new Map(),
  setInventory: () => {
    // sonarcloud-no-empty-arrow-function
  },
  merchant: initalMerchantInfo,
  setMerchant: () => {
    // sonarcloud-no-empty-arrow-function
  },
});

type AppContextProviderProps = {
  children: React.ReactNode;
  initCart?: ReturnType<typeof useCart>['cart'];
  initToast?: ReturnType<typeof useToast>['toast'];
};

export function AppContextProvider({ children, initCart, initToast }: AppContextProviderProps) {
  const { acceptCookies, setAcceptCookies } = useAcceptCookies();
  const { cart, dispatchCart } = useCart(initCart);
  const { toast, setToast } = useToast(initToast);
  const { merchant, setMerchant } = useMerchant();
  const { inventory, setInventory } = useInventory();

  return (
    <AppContext.Provider
      value={{
        acceptCookies,
        setAcceptCookies,
        cart,
        dispatchCart,
        toast,
        setToast,
        inventory,
        setInventory,
        merchant,
        setMerchant,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
