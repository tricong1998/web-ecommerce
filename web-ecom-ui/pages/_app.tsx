import React from 'react';
import '../styles/global.css';

export default function App({ Component, pageProps }: { Component: React.ReactNode , pageProps: }) {
  return <Component {...pageProps} />;
}
