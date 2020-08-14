import Head from "next/head";
import Header from "../components/Header";
import Layout from "../components/Layout";
import { server } from "../config";

const Home = ({ services, packages }) => {
  return (
    <div>
      <Head>
        <title>
          Sell Your Listings :: We help you sell your listings faster
        </title>
        <meta
          property="og:title"
          value="Sell Your Listings :: We help you sell your listings faster"
        />
      </Head>
      <Layout>
        <Header />
      </Layout>
    </div>
  );
};

export async function getStaticProps() {
  const servicesRes = await fetch(`${server}/api/services`);
  const packagesRes = await fetch(`${server}/api/packages`);
  const services = await servicesRes.json();
  const packages = await packagesRes.json();

  return {
    props: {
      services,
      packages,
    },
  };
}

export default Home;
