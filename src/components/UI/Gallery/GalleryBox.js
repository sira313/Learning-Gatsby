import React from 'react'

const GalleryBox = props => (
  <div className='column is-one-quarter-fullhd is-one-third-desktop is-half-tablet'>
    <div className='box has-shadow-hover' style={{ padding: '0.5rem' }}>
      <figure className='image'>
        <img
          src='https://bulma.io/images/placeholders/480x320.png'
          alt='Example'
        />
      </figure>
    </div>
  </div>
)

export default GalleryBox
