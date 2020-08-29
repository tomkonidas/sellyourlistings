import React from "react"
import PropTypes from "prop-types"

const Container = ({ children }) => (
  <div className="container max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
    {children}
  </div>
)

Container.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Container
