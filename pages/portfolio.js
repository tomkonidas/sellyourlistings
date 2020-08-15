import Head from "next/head";
import Layout from "../components/Layout";
import Navbar from "../components/NavBar";
import Container from "../components/Container";

const Portfolio = () => {
  return (
    <>
      <Head>
        <title>Portfolio :: Sell Your Listings</title>
        <meta property="og:title" value="Portfolio :: Sell Your Listings" />
      </Head>
      <Layout>
        <Navbar />
        <Container>
          <h1>Portfolio</h1>
        </Container>
      </Layout>
    </>
  );
};

export default Portfolio;
