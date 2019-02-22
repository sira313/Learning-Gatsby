import React from 'react'
import Carousel from '../Carousel'

const GalleryDetail = ({ post }) => (
  <div className='columns'>
    <div className='column is-8'>
      <Carousel photos={post.frontmatter.photos} />
    </div>
    <div className='column'>
      <div style={{paddingLeft: '1rem', paddingRight: '1rem'}}>
        <span
          className='content is-size-5-desktop is-size-5-tablet has-text-justified'
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </div>
    </div>
  </div>
)

export default GalleryDetail
