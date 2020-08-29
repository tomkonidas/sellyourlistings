import React from "react"

import SEO from "../components/seo"
import Layout from "../components/layout"
import LandingHeader from "../components/landingHeader"
import Packages from "../components/packages"
import { getAllPackages, getFeaturedPackages } from "../utils/packages"

const IndexPage = () => {
  const allPackages = getAllPackages()
  console.log(allPackages)
  return (
    <Layout>
      <SEO title="We help you sell your listings faster" />
      <LandingHeader />
      <Packages packages={allPackages} />
    </Layout>
  )
}

export default IndexPage
