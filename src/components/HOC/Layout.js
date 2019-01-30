import React, { Component } from 'react'
import Transition from 'react-transition-group/Transition'
import TopBar from '../Navigation/TopBar'
import { addOneScroll, removeOneScroll, status } from '../../shared/one-scroll'
import logo from '../../images/aflasiowhite.png'

const anim = (state, top) => {
  let mode = 'animated faster '
  switch (state) {
    case 'entering':
      // add animation when component will mounted
      mode += 'fadeInDown'
      break
    case 'exiting':
      // add animation before component umounted
      mode += top ? 'fadeOut' : 'fadeOutUp'
      break
    default:
      mode = ''
      break
  }
  return mode
}

class Layout extends Component {
  state = {
    isNavShown: false,
    top: false
  }

  componentDidMount () {
    addOneScroll(s => {
      this.setState({ isNavShown: s === status.UP, top: s === status.TOP })
    }, 50)
  }

  componentWillUnmount () {
    removeOneScroll()
  }

  render () {
    const { children } = this.props
    const { top, isNavShown } = this.state
    return (
      <>
        <Transition in={isNavShown} timeout={300} mountOnEnter unmountOnExit>
          {state => (
            <header>
              <TopBar
                className={`is-fixed-top is-dark ${anim(state, top)}`}
                logoSrc={logo}
              />
            </header>
          )}
        </Transition>
        <main>{children}</main>
        <footer className='footer'>
          <div className='content has-text-centered'>
            <p>
              &copy; 2019 <a href='https://www.aflasio.com'>Aflasio</a> and{' '}
              <a href='https://www.habib-mustofa.com'>friend</a>.<br />
              Powered by <a href='https://www.gatsbyjs.org/'>Gatsby</a>,{' '}
              <a href='https://bulma.io/'>Bulma</a>, and <a href='https://www.netlify.com/'>Netlify</a>.<br />
              Source on <a href='https://github.com/sira313/Learning-Gatsby'>Github</a>.
            </p>
          </div>
        </footer>
      </>
    )
  }
}

export default Layout
