import React from 'react' //shortcut for body is rfce
import styled from 'styled-components'
import './Headerstyle.css'
function Header() {
  return (
    <div className='Nav'>
      <img className='Logo'  src='/images/logo.svg'></img>
      <div className='NavMenu'>
        <a>
          <img src='/images/search-icon.svg'></img>
          <span>SEARCH</span>
        </a>
        <a>
          <img src='/images/watchlist-icon.svg'></img>
          <span>WATCHLIST</span>
        </a>
        <a>
          <img src='/images/original-icon.svg'></img>
          <span>ORIGINAL</span>
        </a>
        <a>
          <img src='/images/movie-icon.svg'></img>
          <span>MOVIES</span>
        </a>
        <a>
          <img src='/images/series-icon.svg'></img>
          <span>SERIES</span>
        </a>
      </div>
      <img className='UserImg' src='/images/userimg.png'></img>
      </div>
  )
}

export default Header




