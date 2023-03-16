// pages/_app.tsx

import type { AppProps } from "next/app";
import Signup from "./signup";
import Signin from "./signin";
import Layout from "../components/Layout";
import "../styles/globals.css";
function MyApp({ Component, pageProps }: AppProps) {
  switch (Component) {
    case Signup:
      return (
        <>
          <Component {...pageProps} />
        </>
      );
    case Signin:
      return (
        <>
          <Component {...pageProps} />
        </>
      );
    default:
      return (
        <>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </>
      );
  }
}

export default MyApp;
