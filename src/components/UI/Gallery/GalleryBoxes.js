import React from 'react'
import GalleryBox from './GalleryBox'

const photos = []
for (let i = 0; i < 48; i++) photos.push(i)

const GalleryBoxes = ({ data }) => {
  const edges = data.allMarkdownRemark.edges
  return (
    <div className='columns is-centered is-multiline'>
      {edges.map(e => (
        <GalleryBox key={e.node.fields.slug} node={e.node} />
      ))}
    </div>
  )
}
export default GalleryBoxes
