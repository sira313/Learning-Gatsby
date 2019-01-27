import React, { Component } from 'react'
import { graphql } from 'gatsby'

// TODO: Show as modal
class GalleryPost extends Component {
  render () {
    const { data } = this.props
    const post = data.markdownRemark
    return (
      <div className='section'>
        <div className='container'>
          <div
            className='content is-size-5-desktop is-size-5-tablet has-text-justified'
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
        </div>
      </div>
    )
  }
}

export const pageQuery = graphql`
  query galleryPost($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`

export default GalleryPost
