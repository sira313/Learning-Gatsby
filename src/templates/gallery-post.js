import React, { Component } from 'react'
import { graphql } from 'gatsby'
import GalleryDetail from '../components/UI/Gallery/GalleryDetail'
import SEO from '../components/Utility/SEO';

let seoKeywords = [
  'aflasio',
  'gallery',
  'artist',
  'flat design',
  'graphic motion'
]

// TODO: Show as modal
class GalleryPost extends Component {
  render () {
    const { data } = this.props
    const post = data.markdownRemark

    const { title, categories, tags } = post.frontmatter
    seoKeywords = [...seoKeywords, title, categories, ...tags]

    return (
      <div className='section is-paddingless'>
        <SEO title={title} description={post.excerpt} keywords={seoKeywords} />
        <GalleryDetail post={post} />
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
        categories
        tags
        photos {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

export default GalleryPost
