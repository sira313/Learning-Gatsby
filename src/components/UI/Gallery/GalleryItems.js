import React from 'react'
import GalleryItem from './GalleryItem'

const GalleryItems = ({ edges }) => {
  return (
    <div className='columns is-centered is-multiline has-container-margin'>
      {edges.map(e => (
        <GalleryItem key={e.node.fields.slug} node={e.node} />
      ))}
    </div>
  )
}
export default GalleryItems
