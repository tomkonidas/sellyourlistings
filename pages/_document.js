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
          {/* Twitter Summary card images must be at least 120x120px
          <meta name="twitter:image" content="http://www.example.com/image.jpg"> */}

          {/* Open Graph data */}
          <meta property="og:title" content="Sell Your Listings" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://sellyourlistings.ca" />
          {/* <meta property="og:image" content="http://example.com/image.jpg" /> */}
          <meta
            property="og:description"
            content="3D dollhouse, drone and interior videos, property photos and social media management. 
            We offer the most affordable prices to help real estate agents. 
            The areas we operate in are the Greater Montreal, Laval, Quebec, Ottawa and Gatineau."
          />
          <meta property="og:site_name" content="Sell Your Listings" />
          {/* <meta property="fb:admins" content="Facebook numeric ID" /> */}
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
