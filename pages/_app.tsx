import React from "react";
import { AppProps } from "next/app";
import Head from "next/head";
import { GlobalStyle } from "../styles/globals";
import DefaultLayout from "../layout/defaut";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <DefaultLayout>
      <GlobalStyle></GlobalStyle>
      <Component {...pageProps} />
    </DefaultLayout>
  );
}
