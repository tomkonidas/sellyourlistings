import { useState, useEffect } from "react";
import Service from "./Service";

const ServicesConfigurator = ({ servicesData, categoriesData }) => {
  const [services, setServices] = useState(servicesData);
  const [categories, setCategories] = useState(categoriesData);
  const [filterOut, setFilterOut] = useState("house");
  const [total, setTotal] = useState(0);

  return (
    <div className="my-4">
      <div>
        {categories.map((category) => (
          <div className="mb-2 py-2">
            <h2 className="cursive text-xl py-2" key={category.id}>
              {category.name}
            </h2>
            <div>
              {category.services.map((s) => (
                <Service
                  key={s}
                  service={services.find((service) => service.id === s)}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="border-t-4 border-dotted border-brand py-4 pr-4 flex justify-end items-center">
        <div className="text-xl cursive">Total</div>
        <div className="ml-4">{total.toFixed(2)}</div>
      </div>
    </div>
  );
};

export default ServicesConfigurator;
