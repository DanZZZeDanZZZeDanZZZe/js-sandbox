import React from 'react'
import {useTransition, animated} from 'react-spring'
import {attach} from '../../utils'

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

  const transitions = useTransition(activity, null, {
    from: {paddingLeft: '70%', opacity: 0},
    enter: {paddingLeft: '20%', opacity: 1},
    leave: {paddingLeft: '70%', opacity: 0}
  })

  return (
    isMedium ? 
      <nav className={`
        ${attach('no-lg', 'col-start-7 col-span-3')}
        ${attach('lg', 'col-start-8 col-span-2')}
      `}>
        {list}
      </nav> :
      transitions.map(({item, props}) =>
        item &&
        <animated.nav 
          style={props}
          className={`fixed top-0 right-0 h-full w-full bg-black bg-opacity-25 z-40 font-bold`}
        >
          {list}
        </animated.nav>
      )
  )
}