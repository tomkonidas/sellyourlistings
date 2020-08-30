const {
  services,
  services_extra,
  services_package_only,
} = require("../../content/data/services.json")

const getAllServices = () =>
  services
    .map(service => ({ ...service, category: "services" }))
    .concat(services_extra.map(service => ({ ...service, category: "extra" })))
    .concat(
      services_package_only.map(service => ({
        ...service,
        category: "package_only",
      }))
    )

const getTotal = (serviceCodes, buildType) =>
  getAllServices().reduce(
    (acc, service) =>
      serviceCodes.includes(service.service_code)
        ? acc + service.price[buildType]
        : acc,
    0
  )

const getDisplayedServices = () => [
  { category: "Services", services },
  { category: "Addons", services: services_extra },
]

export { getAllServices, getDisplayedServices, getTotal }
