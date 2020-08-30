import React from "react"
import Container from "./container"

const Disclaimers = ({ services }) => (
  <div className="my-8">
    <Container>
      {services
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
