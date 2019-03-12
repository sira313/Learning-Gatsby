import React, { useState } from 'react'
import { Link } from 'gatsby'
import Icon from '../UI/Icon'

const CategoryBar = ({ categories = [], onSearch }) => {
  const [menuShown, setMenuShown] = useState(false)
  let input = React.createRef()
  let timer

  function burgerHandler () {
    setMenuShown(!menuShown)
  }

  function searchHandler () {
    clearTimeout(timer)
    if (input.current.value) {
      timer = setTimeout(() => {
        onSearch(input.current.value)
      }, 800)
    }
  }

  return (
    <nav className='navbar'>
      <div className='navbar-brand'>
        <div
          role='button'
          onClick={burgerHandler}
          className={`navbar-burger burger${menuShown ? ' is-active' : ''}`}
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
          <Link className='navbar-item' to='/'>
            All
          </Link>
          {categories.map((e, i) => (
            <Link key={i} className='navbar-item' to='/'>
              {e}
            </Link>
          ))}
        </div>
        <div className='navbar-end'>
          <div className='navbar-item field'>
            <div className='control has-icons-right'>
              <input
                ref={input}
                onKeyUp={searchHandler}
                className='input'
                type='search'
                placeholder='Search...'
              />
              <span className='icon is-small is-right'>
                <Icon size='18' name='search' />
              </span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default CategoryBar
