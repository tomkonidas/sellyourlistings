const { packages } = require("../../content/data/packages.json")
const { getAllServices } = require("./services")

const allServices = getAllServices()

const getAllPackages = () => {
  const allPackages = packages.map(p => {
    const package_services = allServices.filter(({ service_code }) => {
      return p.service_codes.includes(service_code)
    })

    const getDiscountedPrice = (total, discountAmount) =>
      (total - Math.round(total * discountAmount) / 100).toFixed(2)

    const fullPrice = {
      condo: package_services.reduce(
        (accumulator, { price }) => accumulator + price.condo,
        0
      ),
      house: package_services.reduce(
        (accumulator, { price }) => accumulator + price.house,
        0
      ),
    }

    const totalPrice = {
      condo: getDiscountedPrice(fullPrice.condo, p.discount),
      house: getDiscountedPrice(fullPrice.house, p.discount),
    }
    return { ...p, package_services, fullPrice, totalPrice }
  })
  return allPackages
}

const getFeaturedPackages = () => {
  const allPackages = getAllPackages()

  const [
    mostPopularPackage,
    leftPackage,
    rightPackage,
  ] = allPackages.sort(({ most_popular }) => (most_popular === true ? -1 : 1))
  return { mostPopularPackage, leftPackage, rightPackage }
}

export { getAllPackages, getFeaturedPackages }
