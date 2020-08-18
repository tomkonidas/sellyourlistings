import Package from "./Package";
import SectionTitle from "./SectionTitle";

const Packages = ({ packages, services }) => {
  return (
    <>
      <ul className="pt-8 pb-12 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {packages.map((p) => (
          <Package key={p.id} packageData={p} services={services} />
        ))}
      </ul>
    </>
  );
};

export default Packages;
