import React from 'react'

const BlogDetail = ({ post }) => (
  <div className='section'>
    <div className='container'>
      <div className='has-text-centered'>
        <h1 className='title'>{post.frontmatter.title}</h1>
        <p className='is-size-7'>{`Posted on ${post.frontmatter.date} in ${
          post.frontmatter.category
        }`}</p>
      </div>
      <hr />
      <span
        className='content is-size-5-desktop is-size-5-tablet has-text-justified'
        dangerouslySetInnerHTML={{ __html: post.html }}
      />
    </div>
  </div>
)

export default BlogDetail
