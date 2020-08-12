import Head from "next/head";
import { server } from "../config";

const Home = ({ services, packages }) => {
  return (
    <div>
      <Head>
        <title>
          Sell Your Listings :: We help you sell your listings faster
        </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>Sell Your Listings</h1>
        <h2>we help you sell your listings faster</h2>
      </main>
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
