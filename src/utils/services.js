const {
  services,
  services_extra,
  services_package_only,
} = require("../../content/data/services.json")

const getAllServices = () =>
  services.concat(services_extra).concat(services_package_only)

export { getAllServices }
