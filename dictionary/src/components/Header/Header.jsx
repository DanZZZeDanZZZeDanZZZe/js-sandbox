import React, {useState} from 'react'
import {useScreenSizeDetection} from '../../hooks'
import {attach} from '../../utils'

import HeaderLink from './HeaderLink'
import MenuIcon from './MenuIcon'
import HeaderNav from './HeaderNav'

function Header() {
  const [activity, setActivity] = useState(false)
  const isMedium = useScreenSizeDetection('medium')

  return (
    <header 
      className={`
        grid items-center h-16 w-auto px-4 bg-purple-300
        ${attach('no-md', 'fixed top-0 grid-cols-6')}
        md:grid-cols-10
      `}
    >
      <input 
        type="search" 
        placeholder="Search by section"
        className={`
          h-12 min-w-0 px-4 py-2 rounded-md
          ${attach('no-md', 'col-start-1 col-span-4')}
          ${attach('md', 'col-start-2 col-span-3')}
        `}
      />
      {
        !isMedium && 
        <button
          type="button" 
          onClick= {() => setActivity(!activity)}
          className={`col-start-6 min-w-12 w-12 z-50`}
        >
          <MenuIcon activity={activity}/>
        </button>
      }
      <HeaderNav {...{activity, isMedium}}>
        <HeaderLink {...{path: '/', isExact: true}}>Home</HeaderLink>
        <HeaderLink {...{path: '/profile'}}>Profile</HeaderLink>
        <HeaderLink {...{path: '/about'}}>About</HeaderLink>
      </HeaderNav>    
    </header>
  )
}

export default Header