const path = require(`path`)

exports.onCreateNode = ({node, getNode, actions}) => {
  const {createNodeField} = actions
  const fileNode = getNode(node.parent)

  if (
    (node.internal.type === "MarkdownRemark" || node.internal.type === "Mdx") &&
    fileNode.internal.type === "File"
  ) {
    const parsedFilePath = path.parse(fileNode.relativePath)
    let slug

    if (node.frontmatter && node.frontmatter.slug) {
      slug = `/${node.frontmatter.slug}`
    } else {
      if (parsedFilePath.name !== "index" && parsedFilePath.dir !== "") {
        slug = `/${parsedFilePath.dir}/${parsedFilePath.name}`
      } else if (parsedFilePath.dir === "") {
        slug = `/${parsedFilePath.name}`
      } else {
        slug = `/${parsedFilePath.dir}`
      }
    }

    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions
  const result = await graphql(
    `
    {
      allMarkdownRemark(
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
  )
  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }
  // Create pages for each markdown file.
  const propertyTemplate = path.resolve("./src/templates/property.js")
  result.data.allMarkdownRemark.nodes.forEach((node) => {
    const path = node.frontmatter.path
    createPage({
      path: node.fields.slug,
      component: propertyTemplate,
      context: {
        slug: node.fields.slug,
        property: node.frontmatter,
      },
    })
  })
}
