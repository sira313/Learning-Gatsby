import React from 'react'
import BlogItem from './BlogItem'

const BlogItems = ({ edges }) => (
  <div className='columns is-centered is-multiline'>
    {edges.map(e => (
      <BlogItem key={e.node.fields.slug} node={e.node} />
    ))}
  </div>
)

export default BlogItems
