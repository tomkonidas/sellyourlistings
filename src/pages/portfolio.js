import React from "react"
import { Link, graphql } from "gatsby"

import SEO from "../components/seo"
import Layout from "../components/layout"
import Header from "../components/header"
import Container from "../components/container"

const PortfolioPage = ({ data: { allMarkdownRemark } }) => {
  const parseImgUrl = url => {
    const new_url = url.split("/")
    new_url.splice(4, 0, "f_auto,q_auto,w_auto,dpr_auto")
    return new_url.join("/")
  }
  return (
    <Layout>
      <SEO title="Portfolio" />
      <Header />
      <Container>
        {allMarkdownRemark.edges.map(({ node: { frontmatter } }) => (
          <div
            key={frontmatter.name}
            className="mb-6 lg:mb-16 flex flex-col items-center"
          >
            <h3 className="py-6 text-4xl font-semibold">{frontmatter.name}</h3>
            <img
              className="rounded shadow-lg"
              src={parseImgUrl(frontmatter.thumbnail)}
              alt={frontmatter.name}
            />
            <div className="p-4 flex items-center justify-center ">
              <span className="relative z-0 inline-flex shadow-sm rounded-md">
                <Link
                  type="button"
                  className="relative inline-flex items-center px-4 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-brand focus:border-brand"
                  to={`/${frontmatter.slug}#video`}
                >
                  Video
                </Link>
                <Link
                  type="button"
                  className="-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-brand focus:border-brand"
                  to={`/${frontmatter.slug}#photo`}
                >
                  Photo Gallery
                </Link>
                <Link
                  type="button"
                  className="-ml-px relative inline-flex items-center px-4 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-brand focus:border-brand"
                  to={`/${frontmatter.slug}#3d-tour`}
                >
                  3D Tour
                </Link>
              </span>
            </div>
          </div>
        ))}
      </Container>
    </Layout>
  )
}

export const propertiesQuery = graphql`
  query {
    allMarkdownRemark(filter: { frontmatter: { active: { eq: true } } }) {
      edges {
        node {
          id
          frontmatter {
            media {
              type
              url
            }
            name
            thumbnail
            slug
          }
        }
      }
    }
  }
`

export default PortfolioPage
