import React from 'react'
import { Link } from 'gatsby'

const NavigationItem = ({ items }) => (
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

export default NavigationItem
