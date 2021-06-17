import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { customerStore } from 'src/lib/client-store/customer-store';
import { setupAuthInterceptorForApiClient } from 'src/lib/client/request';
import { customerIdCookies } from 'src/lib/cookies/client/customerIdCookies';
import { tokenCookies } from 'src/lib/cookies/client/token-cookies';
import { Customer } from 'src/services/client/api-auth/api-auth.type';

const initialUser = {
  id: customerIdCookies.get(),
  email: '',
  firstName: '',
  lastName: '',
  code: '',
  accessToken: '',
};

function createEmptyUser() {
  return { ...initialUser, id: '' };
}

const AuthContext = React.createContext<{
  isAuthenticated: boolean;
  setAuthenticated:(isAuthenticated: boolean) => void;
  user: Customer;
  setUser: (user?: Customer) => void;
  authLoading: boolean;
    }>({
      isAuthenticated: false,
      setAuthenticated: () => {
      },
      user: initialUser,
      setUser: () => {
      },
      authLoading: true,
    });

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const [user, setUser] = React.useState<Customer>(initialUser);
  const [isAuthenticated, setAuthenticated] = React.useState<boolean>(false);
  const [authLoading, setAuthLoading] = React.useState<boolean>(true);
  const handleSetUser = React.useCallback((user?: Customer) => {
    setUser(user || createEmptyUser());
  }, []);

  useEffect(() => {
    const initState = async () => {
      const utils = await import('src/modules/auth/utils');

      // inject token to api, add interceptor
      setupAuthInterceptorForApiClient(() => utils.logout({ router }));

      // get user
      const { result, data } = utils.checkAuthenticated();

      if (data) {
        customerStore.setCustomer(data);
        setUser({
          id: data?.customer?.id || '',
          accessToken: tokenCookies.get()?.accessToken,
          email: data?.customer?.email || '',
          firstName: data?.customer?.firstName || '',
          lastName: data?.customer?.lastName || '',
          code: data?.customer?.code || '',
          accountAdditionalData: {
            gender: data?.customer?.accountAdditionalData?.gender,
            fuelAccountNumber: data?.customer?.accountAdditionalData?.fuelAccountNumber,
          },
          type: data?.customer?.type,
        });
      }
      setAuthenticated(result);
      if (!result) {
        utils.requestRefreshToken({ router, setAuthenticated });
      }
      setAuthLoading(false);
    };

    initState();
  }, [router]);

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, user, authLoading, setUser: handleSetUser, setAuthenticated }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => React.useContext(AuthContext);
