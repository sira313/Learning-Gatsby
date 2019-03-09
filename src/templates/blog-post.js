import React, { Component } from 'react'
import { graphql } from 'gatsby'
import SEO from '../components/Utility/SEO'
import BlogDetail from '../components/UI/Blog/BlogDetail';

let seoKeywords = ['aflasio', 'blog', 'artist', 'linux addict']

class BlogPost extends Component {
  render () {
    const { data } = this.props
    const { title, category, tags } = data.blog.frontmatter
    seoKeywords = [...seoKeywords, title, category, ...tags]
    return (
      <div>
        <SEO title={title} description={data.blog.excerpt} keywords={seoKeywords} />
        <BlogDetail post={data.blog} />
      </div>
    )
  }
}

export const pageQuery = graphql`
  query blogPost($slug: String!) {
    blog: markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "YYYY-MM-DD")
        category
        subcategory
        tags
      }
    }
  }
`

export default BlogPost
