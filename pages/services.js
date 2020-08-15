import Head from "next/head";
import { server } from "../config";
import ServicesConfigurator from "../components/ServicesConfigurator";
import Layout from "../components/Layout";
import Navbar from "../components/NavBar";

const Services = ({ services, categories }) => {
  return (
    <>
      <Head>
        <title>Services, Packages & Pricing :: Sell Your Listings</title>
        <meta
          property="og:title"
          value="Services, Packages & Pricing :: Sell Your Listings"
        />
      </Head>
      <Layout>
        <Navbar />
        <ServicesConfigurator
          servicesData={services}
          categoriesData={categories}
        />
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
