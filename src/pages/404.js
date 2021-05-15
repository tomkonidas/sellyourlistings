import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

import Seo from "../components/seo"
import "../styles/global.css"

const NotFoundPage = () => {
  const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "sellyourlistings-icon.png" }) {
        childImageSharp {
          fixed(width: 128) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <>
      <Seo title="404: Not found" />
      <div className="bg-gray-100 min-h-screen h-100 flex flex-col justify-center items-center">
        <div className="mt-1/6 flex items-center">
          <h1 className="px-4 text-5xl font-semibold border-brand border-r-4">
            404
          </h1>
          <p className="px-4 text-xl font-medium">
            This page could not be found.
          </p>
        </div>
        <Link to="/" aria-label="Home">
          <Img
            className="w-full mt-4"
            fixed={data.logo.childImageSharp.fixed}
            alt="Sell Your Listings"
          />
        </Link>
      </div>
    </>
  )
}

export default NotFoundPage
