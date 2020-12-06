import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

import SEO from "../components/seo"
import "../styles/global.css"

const ThanksPage = () => {
  const {
    form: { success },
  } = require("../../content/data/contact.json")

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
      <SEO title="Thanks for your Submission!" />
      <div className="bg-gray-100 min-h-screen h-100 flex flex-col justify-center items-center">
        <div className="mt-1/6 flex items-center">
          <h1 className="px-4 text-5xl font-semibold border-brand border-r-4">
            Thanks
          </h1>
          <p className="px-4 text-xl font-medium">{success}</p>
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

export default ThanksPage
