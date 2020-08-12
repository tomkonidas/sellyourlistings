import Head from "next/head";

const Home = ({ services, packages }) => {
  return (
    <div>
      <Head>
        <title>Sell Your Listings</title>
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
  const servicesRes = await fetch("http://127.0.0.1:3001/api/services");
  const packagesRes = await fetch("http://127.0.0.1:3001/api/packages");
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
