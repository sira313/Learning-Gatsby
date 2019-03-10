import React, { useState } from 'react'
import { graphql, StaticQuery, Link } from 'gatsby'
import { StartItem, EndItem } from './NavigationItem'

/**
 * shown: is state of menu item on mobile
 * onToggled: is a handler for burger to toggling menu item on mobile
 */
const TopBar = ({ className, logoSrc }) => {
  const [menuShown, setMenuShown] = useState(false)
  
  function burgerHandler () {
    setMenuShown(!menuShown)
  }

  const el = data => (
    <nav
      className={`navbar${className ? ' ' + className : ''}`}
      role='navigation'
      aria-label='main navigation'>
      <div className='container'>
        <div className='navbar-brand'>
          <Link className='navbar-item' to='/'>
            <img
              className='animated slower infinite clock'
              alt='Portfolio of a FLOSS user artist'
              src={logoSrc}
            />
          </Link>
          <div
            role='button'
            onClick={burgerHandler}
            className='navbar-burger burger'
            aria-label='menu'
            aria-expanded='false'
            data-target='navItem'>
            <span aria-hidden='true' />
            <span aria-hidden='true' />
            <span aria-hidden='true' />
          </div>
        </div>
        <div
          id='navItem'
          className={`navbar-menu${menuShown ? ' is-active' : ''}`}>
          <div className='navbar-start'>
            <StartItem items={data.site.siteMetadata.menuItemsStart} />
          </div>
          <EndItem items={data.site.siteMetadata.menuItemsEnd} />
        </div>
      </div>
    </nav>
  )

  return <StaticQuery query={query} render={el} />
}

const query = graphql`
  query {
    site {
      siteMetadata {
        menuItemsStart {
          name
          href
        }
        menuItemsEnd {
          name
          href
          icon
        }
      }
    }
  }
`

export default TopBar
