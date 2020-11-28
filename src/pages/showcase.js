import React from "react"
import { graphql } from "gatsby"

import SEO from "../components/seo"
import Layout from "../components/layout"
import Header from "../components/header"
import Container from "../components/container"
import PageTitle from "../components/pageTitle"

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

  const parseImgUrl = url => {
    console.log(url.split("/"))
  }

  return (
    <Layout>
      <SEO title="Showcase" />
      <Header />
      <Container>
        <PageTitle>Showcase</PageTitle>
        <div className="grid grid-cols-3 gap-4">
          {images.map(url => (
            // <img src={url} key={url} />
            <p key={url}>test</p>
          ))}
        </div>
        {parseImgUrl(images[0])}
        <Youtube url="url" />
        <Matterport url="url" />
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
