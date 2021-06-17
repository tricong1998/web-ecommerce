import React from 'react';
import '../styles/global.css';
import { AppProps } from 'next/app';
import {
  PROTECTED_ROUTES,
  routeCartConfig,
  routeHomeConfig,
  routeOrderThankyouConfig,
  routeProductDetailsConfig,
  routeProductListCatalogueConfig,
  routeProductListCategoryConfig,
} from 'src/constants/routes';
import Head from 'next/head';
import { NextSeo } from 'next-seo';
import { AuthProvider, useAuth } from 'src/modules/auth/auth.provider';

const IGNORE_LAYOUT_PATHS = ['/health'];
const ECOM_APP_PATHS = new Set([
  ...PROTECTED_ROUTES,
  routeHomeConfig.basePath,
  routeHomeConfig.merchantPath,
  routeProductListCatalogueConfig.basePath,
  routeProductListCatalogueConfig.merchantPath,
  routeProductListCategoryConfig.basePath,
  routeProductListCategoryConfig.merchantPath,
  routeProductDetailsConfig.basePath,
  routeProductDetailsConfig.merchantPath,
  routeCartConfig.basePath,
  routeCartConfig.merchantPath,
  routeOrderThankyouConfig.basePath,
  routeOrderThankyouConfig.merchantPath,
]);

export default function App({ Component, pageProps, router }: AppProps) {
  const isEcomApp = ECOM_APP_PATHS.has(router.pathname);
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
        <NextSeo>
          <NextSeo title="Learning Next: Web-ecommerce" description="Buying everything..." />
        </NextSeo>
      </Head>
      <AuthProvider>
        <AppContextProvider></AppContextProvider>
      </AuthProvider>
    </>
  );
}
