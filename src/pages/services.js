import React from "react"

import Seo from "../components/seo"
import Layout from "../components/layout"
import Header from "../components/header"
import ServicesPricingChart from "../components/servicesPricingChart"
import Disclaimers from "../components/disclaimers"

const ServicesPage = () => {
  return (
    <Layout>
      <Seo title="Our Services" />
      <Header />
      <ServicesPricingChart />
      <Disclaimers />
    </Layout>
  )
}

export default ServicesPage
