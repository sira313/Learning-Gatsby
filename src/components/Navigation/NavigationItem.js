import React from 'react'
import { Link } from 'gatsby'
import IconButton from '../UI/IconButton'

export const StartItem = ({ items }) => (
  <>
    {items
      ? items.map((item, index) => (
        <Link key={index} className='navbar-item' to={item.href}>
          {item.name}
        </Link>
      ))
      : null}
  </>
)

export const EndItem = ({ items }) => {
  return (
    <div className='navbar-end'>
      <div className='buttons'>
        {items
          ? items.map(item => (
            <IconButton
              key={item.name}
              to={item.href}
              buttonClass='has-transparent-bg has-text-light'
              iconName={item.icon}
              isExternal={item.href.includes('http')}
            />
          ))
          : null}
      </div>
    </div>
  )
}
