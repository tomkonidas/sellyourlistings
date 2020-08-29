import React from "react"

import SEO from "../components/seo"
import Layout from "../components/layout"
import LandingHeader from "../components/landingHeader"
import Packages from "../components/packages"

const IndexPage = () => (
  <Layout>
    <SEO title="We help you sell your listings faster" />
    <LandingHeader />
    <Packages />
  </Layout>
)

export default IndexPage
