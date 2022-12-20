import { Auth0Provider } from "@auth0/auth0-react";
import { ThemeProvider } from "next-themes";
import { Toaster } from "react-hot-toast";
import { Layout } from "../components";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Auth0Provider
      clientId={process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID}
      domain={process.env.NEXT_PUBLIC_AUTH0_DOMAIN}
    >
      <ThemeProvider enableSystem={false} attribute="class">
        <Layout>
          <Toaster />
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </Auth0Provider>
  );
}

export default MyApp;
