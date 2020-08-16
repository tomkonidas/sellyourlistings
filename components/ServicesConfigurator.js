import { useState } from "react";
import Service from "./Service";

const ServicesConfigurator = ({ servicesData, categoriesData }) => {
  const [services, setServices] = useState(
    servicesData.map((service) => ({
      ...service,
      isAdded: false,
      display: service.condo,
    }))
  );
  const [categories, setCategories] = useState(
    categoriesData.map((category) => {
      const servicesToDisplay = services
        .filter((service) => service.display)
        .map((s) => s.id);
      return {
        ...category,
        services: category.services.filter((s) =>
          servicesToDisplay.includes(s)
        ),
      };
    })
  );
  const [toDisplay, setToDisplay] = useState("condo");
  const [total, setTotal] = useState(0);
  const [updatingTotalClass, setUpdatingTotalClass] = useState("");

  const toggleBuildType = () => {
    if (toDisplay === "house") {
      setToDisplay("condo");
    } else {
      setToDisplay("house");
    }
    updateServiceBuildType();
    updateCategoryServices();
  };

  const updateCategoryServices = () => {
    const servicesToDisplay = services
      .filter((service) => service.display)
      .map((s) => s.id);

    setCategories(
      categoriesData.map((category) => {
        return {
          ...category,
          services: category.services.filter((s) =>
            servicesToDisplay.includes(s)
          ),
        };
      })
    );
  };

  const updateServiceBuildType = () => {
    setServices(
      services.map((service) => {
        let isAdded = service.isAdded;
        if (isAdded && service[toDisplay] !== service.display) {
          isAdded = false;
          handleServiceToggle(service.id);
        }
        return { ...service, isAdded: isAdded, display: service[toDisplay] };
      })
    );
  };

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
      <span className="mt-2 relative z-0 inline-flex shadow-sm rounded-md">
        <button
          onClick={toggleBuildType}
          type="button"
          className={`relative inline-flex items-center px-4 py-2 rounded-l-md border border-gray-300 bg-white text-sm leading-5 font-medium focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150 ${
            toDisplay === "condo"
              ? "bg-brand text-gray-100 hover:text-white"
              : "text-gray-700 hover:text-gray-500"
          }`}
        >
          Condo
        </button>
        <button
          onClick={toggleBuildType}
          type="button"
          className={`-ml-px relative inline-flex items-center px-4 py-2 rounded-r-md border border-gray-300 bg-white text-sm leading-5 font-medium focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150 ${
            toDisplay === "house"
              ? "bg-brand text-gray-100 hover:text-white"
              : "text-gray-700 hover:text-gray-500"
          }`}
        >
          House
        </button>
      </span>

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
