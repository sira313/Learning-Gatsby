import React, { useState, useEffect } from 'react'
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

const Layout = ({ children }) => {
  const [navShown, setNavShown] = useState(false)
  const [top, setTop] = useState(false)

  useEffect(() => {
    addOneScroll(s => {
      setNavShown(s === status.UP)
      setTop(s === status.TOP)
    }, 50)
    return () => removeOneScroll()
  })

  return (
    <>
      <Transition in={navShown} timeout={300} mountOnEnter unmountOnExit>
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
            <a href='https://bulma.io/'>Bulma</a>, and{' '}
            <a href='https://www.netlify.com/'>Netlify</a>.<br />
            Source on{' '}
            <a href='https://github.com/sira313/Learning-Gatsby'>Github</a>.
          </p>
        </div>
      </footer>
    </>
  )
}

export default Layout
