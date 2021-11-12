import "tailwindcss/tailwind.css";
import "../styles/global.scss";
import Layout from "components/Layout";
import { AppProps } from "next/app";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default MyApp;
