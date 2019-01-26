import React, { Component } from 'react'
import Transition from 'react-transition-group/Transition'
import TopBar from '../Navigation/TopBar'
import { addOneScroll, removeOneScroll, status } from '../../shared/one-scroll'
import logo from '../../images/aflasiowhite.png'
import { Camera, Gitlab } from 'react-feather'
import IconButton from '../UI/IconButton'

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
            {/* ↓ Example using Feathericons */}
            <p>
              {/* IconButton is custom component to show button with icon */}
              <IconButton
                to='/'
                text='Camera'
                iconClass='is-medium'
                buttonClass='is-info'>
                {/* ↓ Feathericons */}
                <Camera size={18} />
              </IconButton>
            </p>

            <p>
              {/* Example with no text */}
              <IconButton to='/'>
                {/* ↓ Feathericons */}
                <Gitlab size={18} />
              </IconButton>
            </p>

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
