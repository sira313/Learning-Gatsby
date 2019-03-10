import React from 'react'
import PostInfo from '../PostInfo'

const BlogDetail = ({ post }) => (
  <div className='section'>
    <div className='container'>
      <div className='has-text-centered'>
        <h1 className='title'>{post.frontmatter.title}</h1>
        <PostInfo
          date={post.frontmatter.date}
          category={post.frontmatter.category}
        />
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
