import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

const GalleryItem = ({ node }) => (
  <div className='column is-one-quarter-fullhd is-one-third-desktop is-half-tablet'>
    <div
      className='box has-box-shadow has-shadow-hover'
      style={{ padding: '0.5rem' }}>
      <Link className='image' to={node.fields.slug}>
        <Img fluid={node.frontmatter.coverIndex.childImageSharp.fluid} />
      </Link>
    </div>
  </div>
)

export default GalleryItem
