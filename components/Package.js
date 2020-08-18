const Package = ({ packageData, services }) => (
  <li className="col-span-1 flex flex-col text-center rounded-lg shadow-lg">
    <div className="bg-gray-50 border-b border-gray-100 p-8">
      <h3 className="text-center text-2xl leading-8 font-medium text-gray-900 cursive">
        {packageData.name}
      </h3>
    </div>
    <ul className="flex-1 flex flex-col py-6 px-10 sm:px-10 lg:px-6 xl:px-10">
      {services
        .filter((s) => packageData.services.condo.includes(s.id))
        .map((service) => (
          <li key={service.id} className="mb-4 flex items-start">
            <div className="flex-shrink-0">
              <svg
                className="h-6 w-6 text-indigo-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <p
              className={`ml-3 text-base leading-6 font-medium text-gray-500 ${
                service.star && "star"
              }`}
            >
              {service.name}
            </p>
          </li>
        ))}
      {services
        .filter((s) => packageData.services.special.condo.includes(s.id))
        .map((service, index) => (
          <li key={service.id} className="flex flex-col">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <svg
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="h-6 w-6 text-indigo-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
              </div>
              <p
                className={`ml-3 text-base leading-6 font-medium text-gray-500 ${
                  service.star && "star"
                }`}
              >
                {service.name}
              </p>
            </div>
            <div>
              {packageData.services.special.condo.length !== index + 1 && (
                <span className="font-bold text-indigo-500"> or</span>
              )}
            </div>
          </li>
        ))}
    </ul>
    <div className="border-t border-gray-200 bg-gray-50">
      <div className="-mt-px flex">
        <div className="w-0 flex-1 flex border-r border-gray-200">
          <a
            href="#"
            className="relative -mr-px w-0 flex-1 flex flex-col items-center justify-center py-4 text-sm leading-5 bg-brand text-gray-100 font-medium border border-transparent rounded-bl-lg hover:bg-brand-light hover:text-white focus:outline-none focus:shadow-outline-blue focus:border-indigo-300 focus:z-10 transition ease-in-out duration-150"
          >
            <span className="px-3 flex items-start text-2xl leading-none tracking-tight">
              <span className="mr-1 text-sm font-medium">$</span>
              <span className="font-extrabold">{packageData.price.condo}</span>
            </span>
            <span className="">Condo</span>
          </a>
        </div>
        <div className="-ml-px w-0 flex-1 flex">
          <a
            href="#"
            className="relative w-0 flex-1 flex flex-col items-center justify-center py-4 text-sm leading-5  bg-brand text-gray-100 font-medium border border-transparent rounded-br-lg hover:bg-brand-light hover:text-white focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 transition ease-in-out duration-150"
          >
            <span className="px-3 flex items-start text-2xl leading-none tracking-tight">
              <span className="mr-1 text-sm font-medium">$</span>
              <span className="font-extrabold">{packageData.price.house}</span>
            </span>
            <span className="">House</span>
          </a>
        </div>
      </div>
    </div>
  </li>
);

export default Package;
