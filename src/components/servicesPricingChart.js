import React, { useContext } from "react"
import Context from "../store/context"

import { getDisplayedServices } from "../utils/services"

import Container from "./container"
import BuildTypeToggle from "./buildTypeToggle"
import SectionTitle from "./sectionTitle"
import ServicePricingChartRow from "./servicePricingChartRow"

const ServicesPricingChart = () => {
  const { state } = useContext(Context)
  const displayedServices = getDisplayedServices()

  return (
    <Container>
      <BuildTypeToggle />
      {displayedServices.map(({ category, services }) => (
        <div className="my-6" key={category}>
          <SectionTitle>{category}</SectionTitle>
          <div>
            {services.map(service => (
              <ServicePricingChartRow
                key={service.service_code}
                service={service}
              />
            ))}
          </div>
        </div>
      ))}
      <div
        id="total"
        className="border-t-4 border-dotted border-brand py-4 pr-4 flex justify-end items-center"
      >
        <div className="text-xl cursive mr-4">Total</div>
        <div className={`font-semibold ${true ? "" : ""}`}>
          {state.total.toFixed(2)}
        </div>
      </div>
    </Container>
  )
}

export default ServicesPricingChart
