/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value
    })
  }
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  const galleryPost = path.resolve('./src/templates/gallery-post.js')
  return graphql(
    `
      {
        allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
              }
            }
          }
        }
      }
    `
  ).then(res => {
    if (res.errors) {
      throw res.errors
    }

    const galleryPosts = res.data.allMarkdownRemark.edges
    galleryPosts.forEach((post, index) => {
      const previous =
        index === galleryPosts.length - 1 ? null : galleryPosts[index + 1].node
      const next = index === 0 ? null : galleryPosts[index - 1].node

      createPage({
        path: post.node.fields.slug,
        component: galleryPost,
        context: {
          slug: post.node.fields.slug,
          previous,
          next
        }
      })
    })
  })
}
