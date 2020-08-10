import React from 'react'
import {attach} from '../../utils'
import NavMobile from './NavMobile'

export default function HeaderNav({children, activity, isMedium}) {
  const list = (
    <ul 
      className={`
        flex align-center
        ${attach('no-md', 'h-full block pt-16 bg-indigo-300 shadow-inner rounded-l-lg')}
        ${attach('md', 'flex-row justify-between')}
      `}
    > 
      {children}
    </ul>
  )
    
  return (
    isMedium ? 
      <nav className={`
        ${attach('no-lg', 'col-start-7 col-span-3')}
        ${attach('lg', 'col-start-8 col-span-2')}
      `}>
        {list}
      </nav> :
      <NavMobile activity={activity}>
        {list}
      </NavMobile>
  )
}