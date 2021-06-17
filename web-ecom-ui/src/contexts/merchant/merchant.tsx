import * as React from 'react';
import { Merchant } from 'src/services/api-merchants.type';

export const initalMerchantInfo: Merchant = {
  tenantId: '',
  currencyCode: '',
  merchantId: '',
  companyId: '',
  defaultPaymentMerchantId: '',
  enableGuestCheckout: false,
  enableMaintenancePage: false,
};

export const useMerchant = () => {
  const [merchant, setMerchant] = React.useState<Merchant>(initalMerchantInfo);
  return { merchant, setMerchant };
};
