import React from "react"
import { graphql } from "gatsby"

import SEO from "../components/seo"
import Layout from "../components/layout"
import Header from "../components/header"
import Container from "../components/container"
import PageTitle from "../components/pageTitle"

import PropertyImage from "../components/propertyImage"
import Youtube from "../components/youtube"
import Matterport from "../components/matterport"

const showcasePage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const {
    node: {
      frontmatter: { images, media },
    },
  } = edges[0]

  return (
    <Layout>
      <SEO title="Showcase" />
      <Header />
      <Container>
        <PageTitle>Showcase</PageTitle>
        <div className="mb-6 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 grid-flow-row auto-rows-fr">
          {images.map(url => (
            <PropertyImage url={url} key={url} />
          ))}
          {media.map(
            item =>
              item.type === "matterport" && (
                <Matterport url={item.url} key={item.url} />
              )
          )}
          {media.map(
            item =>
              item.type === "youtube" && (
                <Youtube url={item.url} key={item.url} />
              )
          )}
        </div>
      </Container>
    </Layout>
  )
}

export const showcaseQuery = graphql`
  query {
    allMarkdownRemark(filter: { frontmatter: { name: { eq: "Showcase" } } }) {
      edges {
        node {
          frontmatter {
            images
            media {
              type
              url
            }
            name
          }
        }
      }
    }
  }
`

export default showcasePage
