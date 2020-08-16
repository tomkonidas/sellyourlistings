import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="description"
            content="3D dollhouse, drone and interior videos, property photos and social media management. 
            We offer the most affordable prices to help real estate agents. 
            The areas we operate in are the Greater Montreal, Laval, Quebec, Ottawa and Gatineau."
          />
          <meta
            name="og:description"
            content="3D dollhouse, drone and interior videos, property photos and social media management. 
            We offer the most affordable prices to help real estate agents. 
            The areas we operate in are the Greater Montreal, Laval, Quebec, Ottawa and Gatineau."
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
