import Head from "next/head";
import ServicesConfigurator from "../components/ServicesConfigurator";

const Services = ({ services, categories }) => {
  return (
    <div>
      <Head>
        <title>Services and pricing</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <ServicesConfigurator
          servicesData={services}
          categoriesData={categories}
        />
      </div>
    </div>
  );
};

export async function getStaticProps() {
  const servicesRes = await fetch("http://127.0.0.1:3001/api/services");
  const categoriesRes = await fetch("http://127.0.0.1:3001/api/categories");
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
