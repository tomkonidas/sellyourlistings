import React from "react"

import SEO from "../components/seo"
import Layout from "../components/layout"
import Header from "../components/header"
import Container from "../components/container"
import PageTitle from "../components/pageTitle"

import Youtube from "../components/youtube"
import Matterport from "../components/matterport"

const showcasePage = () => {
  return (
    <Layout>
      <SEO title="Showcase" />
      <Header />
      <Container>
        <PageTitle>Showcase</PageTitle>
        <Youtube url="url" />
        <Matterport url="url" />
      </Container>
    </Layout>
  )
}

export default showcasePage
