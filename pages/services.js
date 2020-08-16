import Head from "next/head";
import { server } from "../config";
import ServicesConfigurator from "../components/ServicesConfigurator";
import Layout from "../components/Layout";
import Navbar from "../components/NavBar";
import Container from "../components/Container";
import Title from "../components/Title";
import SectionTitle from "../components/SectionTitle";

const Services = ({ services, categories }) => {
  return (
    <>
      <Head>
        <title>Services :: Sell Your Listings</title>
        <meta name="og:title" content="Services :: Sell Your Listings" />
      </Head>
      <Layout>
        <Navbar />
        <Container>
          <SectionTitle>Services</SectionTitle>
          <ServicesConfigurator
            servicesData={services}
            categoriesData={categories}
          />
          {/* <SectionTitle>Virtual Staging</SectionTitle> */}
        </Container>
      </Layout>
    </>
  );
};

export async function getStaticProps() {
  const servicesRes = await fetch(`${server}/api/services`);
  const categoriesRes = await fetch(`${server}/api/categories`);
  const services = await servicesRes.json();
  const categories = await categoriesRes.json();

  return {
    props: {
      services,
      categories,
    },
  };
}

export default Services;
