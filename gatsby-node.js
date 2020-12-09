const path = require(`path`)

const propertyTemplate = path.resolve("./src/templates/property.js")

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return new Promise((resolve, _reject) => {
    resolve(
      graphql(
        `
          {
            properties: allMarkdownRemark(
              filter: { frontmatter: { active: { eq: true } } }
              sort: { fields: frontmatter___name }
            ) {
              nodes {
                id
                frontmatter {
                  media {
                    type
                    url
                  }
                  name
                  thumbnail
                  images
                  description
                }
                fields {
                  slug
                }
              }
            }
          }
        `
      ).then(result => {
        const properties = result.data.properties.nodes
        properties.forEach(property => {
          createPage({
            path: property.fields.slug,
            component: propertyTemplate,
            context: {
              slug: property.fields.slug,
              property: property.frontmatter,
            },
          })
        })
      })
    )
  })
}
