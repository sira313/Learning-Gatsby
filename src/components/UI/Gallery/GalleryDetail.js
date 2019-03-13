import React from 'react'
import ImageCarousel from '../ImageCarousel'

const GalleryDetail = ({ post }) => (
  <div className='columns'>
    <div className='column is-8'>
      <ImageCarousel photos={post.frontmatter.photos} />
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
