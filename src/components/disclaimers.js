import React from "react"

import { getAllServices } from "../utils/services"

import Container from "./container"

const Disclaimers = () => (
  <div className="my-8">
    <Container>
      {getAllServices()
        .filter(({ disclaimer }) => disclaimer.length > 0)
        .map(({ disclaimer, service_code }) => (
          <p
            className="disclaimer text-sm text-gray-500 text-center md:text-right"
            key={service_code}
          >
            {disclaimer}
          </p>
        ))}
    </Container>
  </div>
)

export default Disclaimers
