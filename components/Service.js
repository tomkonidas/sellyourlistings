const Service = ({ service }) => {
  return (
    <div className="py-2 pr-4 pl-2 border-l-8 border-gray-200 hover:border-brand flex justify-between cursor-default hover:bg-gray-100">
      <div>{service.name}</div>
      <div>{service.price.toFixed(2)}</div>
    </div>
  );
};

export default Service;
