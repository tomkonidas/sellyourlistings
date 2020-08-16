import { useState, useEffect } from "react";

const ServicesConfigurator = ({ servicesData, categoriesData }) => {
  const [services, setServices] = useState(servicesData);
  const [categories, setCategories] = useState(categoriesData);
  return (
    <div className="mt-2">
      <ul>
        {services.map((service) => (
          <li key={service.id}>{service.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ServicesConfigurator;
