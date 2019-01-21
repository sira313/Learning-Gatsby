import React, { Component } from 'react'
import { graphql, StaticQuery } from 'gatsby'
import TopBar from '../Navigation/TopBar'

class Layout extends Component {
  state = {
    isMenuShown: false
  }

  burgerHandler = () => {
    this.setState(state => ({ isMenuShown: !state.isMenuShown }))
  }

  render () {
    const { isNavShown = true, children } = this.props
    const { isMenuShown } = this.state
    const el = data => {
      const meta = data.site.siteMetadata
      return (
        <>
          {isNavShown ? (
            <header>
              <TopBar
                menuItems={meta.menuItems}
                onToggled={this.burgerHandler}
                shown={isMenuShown}
              />
            </header>
          ) : null}
          <main>{children}</main>
          <footer>{/* TODO: Add footer */}</footer>
        </>
      )
    }
    return <StaticQuery query={query} render={el} />
  }
}

const query = graphql`
  query {
    site {
      siteMetadata {
        menuItems {
          name
          href
        }
      }
    }
  }
`

export default Layout
