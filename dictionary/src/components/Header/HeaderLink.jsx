import React from 'react'
import {NavLink} from 'react-router-dom'

function HeaderLink({children, path, isExact = true}) {
  return (
    <li className="text-center px-2 no-md:text-white no-md:pt-8">
      <NavLink 
        exact = {isExact}
        to={path} 
        key={path}
        className="text-2xl"
        activeClassName="no-md:text-black md:text-white"
      >
        {children}
      </NavLink>
    </li>
  )
}

export default HeaderLink