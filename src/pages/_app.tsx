import '@/styles/globals.css';
import { NextSeo } from 'next-seo';
import type { AppProps } from 'next/app';
import '../../i18next.config';
import Head from 'next/head';
import Header from '@/components/layout/header/header';

const IGNORE_HEADER_PATHS = ['/404'];

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <>
      <Head>
        <NextSeo></NextSeo>
      </Head>
      <MyApp Component={Component} {...pageProps} router={router}></MyApp>
    </>
  );
}

const MyApp = ({ Component, pageProps, router }: AppProps) => {
  return (
    <>
      {!IGNORE_HEADER_PATHS.includes(router.pathname) && <Header></Header>}
      <Component {...pageProps} />
    </>
  );
};
