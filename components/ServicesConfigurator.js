import { useState } from "react";
import Service from "./Service";

const ServicesConfigurator = ({ servicesData, categoriesData }) => {
  const [services, setServices] = useState(
    servicesData.map((service) => ({ ...service, isAdded: false }))
  );
  const [categories, setCategories] = useState(categoriesData);
  const [filterOut, setFilterOut] = useState("house");
  const [total, setTotal] = useState(0);
  const [updatingTotalClass, setUpdatingTotalClass] = useState("");

  const handleServiceToggle = (id) => {
    const service = services.find((service) => service.id === id);

    if (service.isAdded) {
      setTotal(total - service.price);
      setUpdatingTotalClass("text-brand");
    } else {
      setTotal(total + service.price);
      setUpdatingTotalClass("text-green-500");
    }

    setTimeout(() => {
      setUpdatingTotalClass("");
    }, 200);

    const changedService = { ...service, isAdded: !service.isAdded };
    setServices(
      services.map((service) => (service.id !== id ? service : changedService))
    );
  };

  return (
    <div className="my-2">
      <div>
        {categories.map((category) => (
          <div key={category.id} className="mb-4 py-2">
            <h2 className="cursive text-xl py-2">{category.name}</h2>
            <div>
              {category.services.map((s) => (
                <Service
                  key={s}
                  service={services.find((service) => service.id === s)}
                  handleServiceToggle={handleServiceToggle}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
      <div
        id="total"
        className="border-t-4 border-dotted border-brand py-4 pr-4 flex justify-end items-center"
      >
        <div className="text-xl cursive mr-4">Total</div>
        <div
          className={`font-semibold ${
            updatingTotalClass.length > 0 ? updatingTotalClass : ""
          }`}
        >
          {total.toFixed(2)}
        </div>
      </div>
      <p className="text-gray-500 mb-8">
        <span className="text-brand">*</span>The 3 first months of storage is
        included in the price of virtual tours.
      </p>
    </div>
  );
};

export default ServicesConfigurator;
