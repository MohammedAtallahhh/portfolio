import { ThemeProvider } from "next-themes";
import { Toaster } from "react-hot-toast";
import { Layout } from "../components";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider enableSystem={false} attribute="class">
      <Layout>
        <Toaster />
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
