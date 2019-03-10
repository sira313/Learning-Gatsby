import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/HOC/Layout'
import SEO from '../components/Utility/SEO'
import TopBar from '../components/Navigation/TopBar'
import logo from '../images/aflasiowhite.png'
import BlogItems from '../components/UI/Blog/BlogItems'

const seoKeywords = ['aflasio', 'blog', 'linux']

const Blog = ({ data }) => {
  return (
    <Layout>
      <SEO title='Blog' keywords={seoKeywords} />
      <TopBar className='is-dark' logoSrc={logo} />
      <section className='section has-background-light'>
        <div className='container'>
          <BlogItems edges={data.blog.edges} />
        </div>
      </section>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    blog: allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { fields: { postType: { eq: "blog" } } }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            category
          }
        }
      }
    }
  }
`

export default Blog
