import '@/styles/globals.css';
import { NextSeo } from 'next-seo';
import type { AppProps } from 'next/app';
import '../../i18next.config';
import Head from 'next/head';
import Header from '@/components/layout/header';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <NextSeo></NextSeo>
      </Head>
      <MyApp Component={Component} {...pageProps}></MyApp>
    </>
  );
}

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Header></Header>
      <Component {...pageProps} />
    </>
  );
};
