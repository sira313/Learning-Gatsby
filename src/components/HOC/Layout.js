import React, { Component } from 'react'
import TopBar from '../Navigation/TopBar'
import { addOneScroll, removeOneScroll, status } from '../../shared/one-scroll'
import logo from '../../images/aflasiowhite.png'

class Layout extends Component {
  state = {
    isNavShown: false
  }

  componentDidMount () {
    addOneScroll(s => {
      this.setState({ isNavShown: s === status.UP })
    })
  }

  componentWillUnmount () {
    removeOneScroll()
  }

  render () {
    const { children } = this.props
    const { isNavShown } = this.state
    return (
      <>
        {isNavShown ? (
          <header>
            <TopBar className='is-fixed-top is-dark' logoSrc={logo} />
          </header>
        ) : null}
        <main>{children}</main>
        <footer className='footer'>
          <div className='content has-text-centered'>
            <p>
              &copy; 2019 <a href='https://www.aflasio.com'>Aflasio</a> and{' '}
              <a href='https://www.habib-mustofa.com'>Friend</a>.
            </p>
          </div>
        </footer>
      </>
    )
  }
}

export default Layout
