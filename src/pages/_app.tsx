import '@/styles/globals.css';
import { NextSeo } from 'next-seo';
import type { AppProps } from 'next/app';
import '../../i18next.config';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}