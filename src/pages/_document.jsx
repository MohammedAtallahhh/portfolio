import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en-US">
        <Head>
          <link href="/images/favicon.png" rel="shortcut icon" />
        </Head>
        <body className="antialiased bg-off-white text-off-black dark:bg-off-black dark:text-off-white">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
