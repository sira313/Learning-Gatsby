import React from 'react'
import GalleryBox from './GalleryBox'

const photos = []
for (let i = 0; i < 48; i++) photos.push(i)

const GalleryBoxes = props => (
  <div className='columns is-centered is-multiline'>
    {photos.map((e, i) => (
      <GalleryBox key={i} />
    ))}
  </div>
)

export default GalleryBoxes
