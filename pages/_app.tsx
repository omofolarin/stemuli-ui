import "../styles/globals.css";
import "antd/dist/antd.css";
import * as React from "react";
import Layout from "../components/layout";
import { JssProvider, SheetsRegistry } from "react-jss";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  const sheets = new SheetsRegistry();
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />

        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
      </Head>

      <JssProvider registry={sheets}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </JssProvider>
    </>
  );
}

export default MyApp;
