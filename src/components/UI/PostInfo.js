import React from 'react'
import Icon from './Icon'

const PostInfo = ({ date, category }) => (
  <div>
    <p className='is-size-7'>
      <Icon name='calendar' size='10' />
      {` Posted on ${date} `}
      <Icon name='folder' size='10' />
      {` In ${category}`}
    </p>
  </div>
)

export default PostInfo
