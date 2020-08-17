import SectionTitle from "./SectionTitle";
import Youtube from "./Youtube";

const Property = ({ property }) => {
  return (
    <div className="my-4">
      <SectionTitle>{property.name}</SectionTitle>
      <div className="mt-2 grid grid-cols-1 md:grid-cols-3 gap-4">
        {property.showcase.map((url) => (
          <img className="rounded" key={url} src={url} />
        ))}
      </div>
      {/* <div className="mt-4 grid grid-col-2 gap-4">
        <Youtube src={property.youtube} />
        <div className="rounded">{property.matterport}</div>
      </div> */}
    </div>
  );
};

export default Property;
