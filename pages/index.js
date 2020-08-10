import Head from "next/head";
import Services from "../components/Services";

const Home = () => {
  return (
    <div className="container">
      <Head>
        <title>Sell Your Listings</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>Sell Your Listings</h1>

        <div>
          <Services />
        </div>
      </main>
    </div>
  );
};

export default Home;
