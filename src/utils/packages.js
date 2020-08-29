const { packages } = require("../../content/data/packages.json")
const {
  services,
  services_extra,
  services_package_only,
} = require("../../content/data/services.json")

const allServices = services
  .concat(services_extra)
  .concat(services_package_only)
console.log(allServices)
const getAllPackages = () => {
  const allPackages = packages.map(p => {
    const package_services = allServices.filter(({ service_code }) => {
      return p.service_codes.includes(service_code)
    })
    return { ...p, package_services }
  })
  return allPackages
}

const getFeaturedPackages = () => {
  return { main: "main", left: "left", right: "right" }
}

export { getAllPackages, getFeaturedPackages }
