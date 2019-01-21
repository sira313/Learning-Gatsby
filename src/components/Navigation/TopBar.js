import React from 'react'
import { Link } from 'gatsby'

/**
 * shown: is state of menu item on mobile
 * onToggled: is a handler for burger to toggling menu item on mobile
 */
const TopBar = ({ menuItems, shown, onToggled }) => (
  <nav className='navbar' role='navigation' aria-label='main navigation'>
    <div className='navbar-brand'>
      <Link className='navbar-item' to='/'>
        {/* TODO: Add site logo/brand here */}
      </Link>

      <div
        role='button'
        onClick={onToggled}
        className='navbar-burger burger'
        aria-label='menu'
        aria-expanded='false'
        data-target='navItem'>
        <span aria-hidden='true' />
        <span aria-hidden='true' />
        <span aria-hidden='true' />
      </div>
    </div>

    <div id='navItem' className={`navbar-menu${shown ? ' is-active' : ''}`}>
      <div className='navbar-end'>
        {/* TODO: Add navbar items from NavigationItem component */}
      </div>
    </div>
  </nav>
)

export default TopBar
