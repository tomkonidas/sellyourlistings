const Property = ({ property }) => {
  return (
    <>
      <div>{property.name}</div>
      <div>{property.youtube}</div>
      <div>{property.matterport}</div>
    </>
  );
};

export default Property;
