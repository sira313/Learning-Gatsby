import React from 'react'
import { Link } from 'gatsby'

// TODO: Change link by post slug
const GalleryBox = props => (
  <div className='column is-one-quarter-fullhd is-one-third-desktop is-half-tablet'>
    <div className='box has-shadow-hover' style={{ padding: '0.5rem' }}>
      <Link
        className='image'
        to='/gallery/stylized-portrait-tribute-to-razan-al-najjar/'>
        <img
          src='https://bulma.io/images/placeholders/480x320.png'
          alt='Example'
        />
      </Link>
    </div>
  </div>
)

export default GalleryBox
