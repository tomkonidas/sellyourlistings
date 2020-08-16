const Service = ({ service, handleServiceToggle }) => {
  return (
    <>
      <div
        className={`bg-gray-50 py-2 pr-4 pl-2 border-l-8 border-gray-200 hover:border-gray-300 flex items-center justify-between cursor-default hover:bg-gray-100 ${
          service.isAdded
            ? "border-brand hover:border-brand"
            : "border-gray-200"
        }`}
      >
        <div className={service.star ? "star" : ""}>{service.name}</div>
        {service.description.length > 0 && (
          <div
            onClick={() => console.log("click")}
            className="text-gray-400 ml-1"
            title={service.description}
          >
            <svg
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="information-circle w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
        )}
        <div className="ml-auto mr-4">{service.price.toFixed(2)}</div>

        <span
          onClick={() => handleServiceToggle(service.id)}
          role="checkbox"
          tabIndex="0"
          aria-checked="false"
          className="group relative inline-flex items-center justify-center flex-shrink-0 h-5 w-10 cursor-pointer focus:outline-none"
        >
          <span
            aria-hidden="true"
            className={`bg-gray-200 absolute h-4 w-9 mx-auto rounded-full transition-colors ease-in-out duration-200 ${
              service.isAdded ? "bg-brand" : "bg-gray-200"
            }`}
          ></span>
          <span
            aria-hidden="true"
            className={`translate-x-0 absolute left-0 inline-block h-5 w-5 border border-gray-200 rounded-full bg-white shadow transform group-focus:shadow-outline group-focus:border-blue-300 transition-transform ease-in-out duration-200 ${
              service.isAdded ? "translate-x-5" : "translate-x-0"
            }`}
          ></span>
        </span>
      </div>
    </>
  );
};

export default Service;
