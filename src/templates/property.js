import React from "react"

import SEO from "../components/seo"
import Layout from "../components/layout"
import Header from "../components/header"
import Container from "../components/container"
import PageTitle from "../components/pageTitle"

import PropertyImage from "../components/propertyImage"
import Youtube from "../components/youtube"
import Matterport from "../components/matterport"

const Property = ({ pageContext: { property } }) => {
  return (
    <Layout>
      <SEO title={property.name} og={property.thumbnail} />
      <Header />
      <Container>
        <PageTitle>{property.name}</PageTitle>
        {property.images.length > 0 && (
          <div
            id="photo"
            className="mb-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            {property.images.map(url => (
              <PropertyImage url={url} key={url} alt={property.name} />
            ))}
          </div>
        )}
        {property.media.filter(item => item.type === "youtube").length > 0 && (
          <div id="video" className="my-4">
            <h3 className="tracking-tight leading-10 font-extrabold text-gray-900 sm:leading-none lg:text-4xl mb-2">
              Video
            </h3>
            {property.media.map(
              item =>
                item.type === "youtube" && (
                  <Youtube url={item.url} key={item.url} />
                )
            )}
          </div>
        )}
        {property.media.filter(item => item.type === "matterport").length >
          0 && (
          <div id="3d-tour" className="my-4">
            <h3 className="tracking-tight leading-10 font-extrabold text-gray-900 sm:leading-none lg:text-4xl mb-2">
              3D Tour
            </h3>

            {property.media.map(
              item =>
                item.type === "matterport" && (
                  <Matterport url={item.url} key={item.url} />
                )
            )}
          </div>
        )}
      </Container>
    </Layout>
  )
}

export default Property
