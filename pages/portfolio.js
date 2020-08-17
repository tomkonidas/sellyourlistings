import Head from "next/head";
import { server } from "../config";
import Layout from "../components/Layout";
import Navbar from "../components/NavBar";
import Container from "../components/Container";
import Property from "../components/Property";
import Title from "../components/Title";

const Portfolio = ({ portfolio }) => {
  return (
    <>
      <Head>
        <title>Portfolio :: Sell Your Listings</title>
        <meta name="og:title" content="Portfolio :: Sell Your Listings" />
      </Head>
      <Layout>
        <Navbar />
        <Container>
          <Title>Portfolio</Title>
          {/* {portfolio.map((property) => (
            <Property key={property.id} property={property} />
          ))} */}
          <div className="mt-8"></div>
        </Container>
      </Layout>
    </>
  );
};

export async function getStaticProps() {
  const portfolioRes = await fetch(`${server}/api/portfolio`);
  const portfolio = await portfolioRes.json();

  return {
    props: {
      portfolio,
    },
  };
}

export default Portfolio;
