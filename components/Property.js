const Property = ({ property }) => {
  const baseImgUrl = "https://drive.google.com/uc?export=view&id=";
  return (
    <div className="my-4">
      <div>{property.name}</div>
      <div>{property.youtube}</div>
      <div>{property.matterport}</div>
      <img src={baseImgUrl + property.showcase[0]} />
    </div>
  );
};

export default Property;
