import Head from "next/head";

const PageHead = ({ title, description, keywords }) => {
  return (
    <Head>
      <title>{title}</title>

      <meta charSet="utf-8" />
      <meta name="description" content={description} />
      <meta name="author" content="Mohammed Atallah" />
      <meta name="og:title" content={title} />
      <meta name="og:description" content={description} />
      <meta name="og:type" content="website" />
      {/* <meta name="og:url" content="https://jacobherper.com/" /> */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:creator" content="Mohammed Atallah" />

      {keywords && <meta name="keywords" content={keywords.join(", ")} />}

      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
  );
};

export default PageHead;
