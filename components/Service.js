import { useState } from "react";

const Service = ({ service, handleServiceToggle }) => {
  const [isOn, setIsOn] = useState(false);

  const handleToggle = () => {
    setIsOn(!isOn);
    handleServiceToggle(service.id);
  };

  return (
    <div
      onClick={handleToggle}
      className={`bg-gray-50 py-2 pr-4 pl-2 border-l-8 border-gray-200 hover:border-gray-300 flex items-center justify-between cursor-pointer hover:bg-gray-100 ${
        isOn ? "border-brand hover:border-brand" : "border-gray-200"
      }`}
    >
      <div className={service.star ? "star" : ""}>{service.name}</div>
      <div className="ml-auto mr-4">{service.price.toFixed(2)}</div>

      <span
        role="checkbox"
        tabIndex="0"
        aria-checked="false"
        className="group relative inline-flex items-center justify-center flex-shrink-0 h-5 w-10 cursor-pointer focus:outline-none"
      >
        <span
          onClick={handleToggle}
          aria-hidden="true"
          className={`bg-gray-200 absolute h-4 w-9 mx-auto rounded-full transition-colors ease-in-out duration-200 ${
            isOn ? "bg-brand" : "bg-gray-200"
          }`}
        ></span>
        <span
          onClick={handleToggle}
          aria-hidden="true"
          className={`translate-x-0 absolute left-0 inline-block h-5 w-5 border border-gray-200 rounded-full bg-white shadow transform group-focus:shadow-outline group-focus:border-blue-300 transition-transform ease-in-out duration-200 ${
            isOn ? "translate-x-5" : "translate-x-0"
          }`}
        ></span>
      </span>
    </div>
  );
};

export default Service;
