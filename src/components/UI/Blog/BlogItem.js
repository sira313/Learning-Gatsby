import React from 'react'
import { Link } from 'gatsby'
import PostInfo from '../PostInfo'

/** node result **
node
  excerpt
  fields
    slug
  frontmatter
    category
    date
    title
 */

const BlogItem = ({ node }) => {
  const { excerpt, fields, frontmatter } = node

  return (
    <Link
      to={fields.slug}
      className='column is-one-quarter-fullhd is-one-third-desktop is-half-tablet'>
      <div className='box has-box-shadow has-shadow-hover'>
        <article className='media'>
          <div className='meida-content'>
            <h1 className='is-size-4'>{frontmatter.title}</h1>
            <PostInfo date={frontmatter.date} category={frontmatter.category} />
            <p>{excerpt}</p>
          </div>
        </article>
      </div>
    </Link>
  )
}

export default BlogItem
