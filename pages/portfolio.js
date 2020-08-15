import Head from "next/head";
import Layout from "../components/Layout";
import Navbar from "../components/NavBar";

const Portfolio = () => {
  return (
    <>
      <Head>
        <title>Portfolio :: Sell Your Listings</title>
        <meta property="og:title" value="Portfolio :: Sell Your Listings" />
      </Head>
      <Layout>
        <Navbar />
        <h1>Portfolio</h1>
      </Layout>
    </>
  );
};

export default Portfolio;
