const Property = ({ property }) => {
  return (
    <div className="my-4">
      <div>{property.name}</div>
      <div>{property.youtube}</div>
      <div>{property.matterport}</div>
    </div>
  );
};

export default Property;
