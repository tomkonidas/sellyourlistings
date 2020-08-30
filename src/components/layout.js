import React from "react"
import PropTypes from "prop-types"

import Footer from "./footer"
import "../styles/global.css"

const Layout = ({ children }) => {
  return (
    <div className="h-100 min-h-screen flex flex-col justify-between">
      <main>{children}</main>
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
