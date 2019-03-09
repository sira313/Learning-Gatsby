import React from 'react'
import GalleryBox from './GalleryBox'

const GalleryBoxes = ({ edges }) => {
  return (
    <div className='columns is-centered is-multiline'>
      {edges.map(e => (
        <GalleryBox key={e.node.fields.slug} node={e.node} />
      ))}
    </div>
  )
}
export default GalleryBoxes
