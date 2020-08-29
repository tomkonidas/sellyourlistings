import React from "react"
import Container from "./container"

const Packages = ({ packages }) => {
  return (
    <Container>
      {packages.map(({ package_code, name }) => (
        <div className="p-4 bg-brand text-white w-100 mb-3" key={package_code}>
          {name}
        </div>
      ))}
    </Container>
  )
}

export default Packages
