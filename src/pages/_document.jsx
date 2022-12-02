import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en-US">
        <Head>
          <link href="/images/favicon.png" rel="shortcut icon" />
        </Head>
        <body className="antialiased text-accent bg-background">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
