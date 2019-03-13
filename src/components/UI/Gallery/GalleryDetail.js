import React from 'react'
import ImageCarousel from '../ImageCarousel'

const carouselStyle = {
  maxHeight: '36rem',
  maxWidth: '36rem',
  margin: '0 auto'
}

const GalleryDetail = ({ post }) => (
  <div className='container'>
    <div className='columns'>
      <div className='column is-8'>
        {/* Post images */}
        <ImageCarousel style={carouselStyle} photos={post.frontmatter.photos} />
      </div>
      <div className='column'>
        {/* Post texts from markdown */}
        <span
          className='content is-size-5-desktop is-size-5-tablet has-text-justified'
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </div>
    </div>
  </div>
)

export default GalleryDetail
