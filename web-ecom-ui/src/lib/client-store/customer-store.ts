import { CustomerLoginResponse } from 'src/services/client/api-auth/api-auth.type';

const customerInfo = {
  customerId: undefined,
  email: undefined,
  customerCode: undefined,
  clientId: '',
  accessToken: '',
};

export const customerStore = {
  getClientId() {
    return customerInfo.clientId;
  },
  getInfo() {
    return {
      customerId: customerInfo.customerId,
      email: customerInfo.email,
      customerCode: customerInfo.customerCode,
      clientId: customerInfo.clientId,
      accessToken: customerInfo.accessToken,
    };
  },

  clearInfo() {
    Object.assign(customerInfo, {
      customerId: undefined,
      email: undefined,
      customerCode: undefined,
      accessToken: '',
    });
  },

  setClientId(clientId: string) {
    customerInfo.clientId = clientId;
  },

  setAccessToken(accessToken: string) {
    customerInfo.accessToken = accessToken;
  },
  getAccessToken() {
    return customerInfo.accessToken;
  },

  setCustomer(data?: CustomerLoginResponse) {
    if (data)
      Object.assign(customerInfo, {
        customerId: data?.customer?.id || '',
        email: data?.customer?.email || '',
        customerCode: data?.customer?.code || '',
        accessToken: data?.access_token,
      });
  },
};
