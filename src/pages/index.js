import React from "react"

import { getFeaturedPackages } from "../utils/packages"

import SEO from "../components/seo"
import Layout from "../components/layout"
import LandingHeader from "../components/landingHeader"
import Packages from "../components/packages"
import Disclaimers from "../components/disclaimers"
import Contact from "../components/contact"

const IndexPage = () => {
  const {
    mostPopularPackage,
    leftPackage,
    rightPackage,
  } = getFeaturedPackages()

  return (
    <Layout>
      <SEO title="We help you sell your listings faster" />
      <LandingHeader />
      <Packages
        mostPopularPackage={mostPopularPackage}
        leftPackage={leftPackage}
        rightPackage={rightPackage}
      />
      <Disclaimers />
      <Contact />
    </Layout>
  )
}

export default IndexPage
