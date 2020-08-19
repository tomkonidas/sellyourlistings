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
          <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <link rel="manifest" href="/site.webmanifest" />
          <meta
            name="description"
            content="3D dollhouse, drone and interior videos, property photos and social media management. 
            We offer the most affordable prices to help real estate agents. 
            The areas we operate in are the Greater Montreal, Laval, Quebec, Ottawa and Gatineau."
          />
          {/* Twitter Card data */}
          <meta name="twitter:card" content="summary" />
          {/* <meta name="twitter:site" content="@publisher_handle" /> */}
          <meta name="twitter:title" content="Sell Your Listings" />
          <meta
            name="twitter:description"
            content="3D dollhouse, drone and interior videos, property photos and social media management. 
            We offer the most affordable prices to help real estate agents. "
          />
          {/* <meta name="twitter:creator" content="@author_handle" /> */}
          <meta
            name="twitter:image"
            content="https://sellyourlistings.ca/og.jpg"
          />

          {/* Open Graph data */}
          <meta property="og:title" content="Sell Your Listings" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://sellyourlistings.ca" />
          <meta
            property="og:image"
            content="https://sellyourlistings.ca/og.jpg"
          />
          <meta
            property="og:description"
            content="3D dollhouse, drone and interior videos, property photos and social media management. 
            We offer the most affordable prices to help real estate agents. 
            The areas we operate in are the Greater Montreal, Laval, Quebec, Ottawa and Gatineau."
          />
          <meta property="og:site_name" content="Sell Your Listings" />
          {/* <meta property="fb:app_id" content="Facebook numeric ID" /> */}
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
