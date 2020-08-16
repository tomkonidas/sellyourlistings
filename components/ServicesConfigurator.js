import { useState } from "react";
import Service from "./Service";

const ServicesConfigurator = ({ servicesData, categoriesData }) => {
  const [services, setServices] = useState(
    servicesData.map((service) => ({ ...service, isAdded: false }))
  );
  const [categories, setCategories] = useState(categoriesData);
  const [filterOut, setFilterOut] = useState("house");
  const [total, setTotal] = useState(0);
  const [isUpdatingTotal, setIsUpdatingTotal] = useState(false);

  const handleServiceToggle = (id) => {
    setIsUpdatingTotal(true);
    setTimeout(() => {
      setIsUpdatingTotal(false);
    }, 300);

    const service = services.find((service) => service.id === id);

    service.isAdded
      ? setTotal(total - service.price)
      : setTotal(total + service.price);

    const changedService = { ...service, isAdded: !service.isAdded };
    setServices(
      services.map((service) => (service.id !== id ? service : changedService))
    );
  };

  return (
    <div className="my-4">
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
        <div className={isUpdatingTotal ? "text-brand-dark" : ""}>
          {total.toFixed(2)}
        </div>
      </div>
    </div>
  );
};

export default ServicesConfigurator;
