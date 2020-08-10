import React from 'react'
import {useTransition, animated} from 'react-spring'

export default function NavMobile({children, activity}) {
  const transitions = useTransition(activity, null, {
    from: {paddingLeft: '70%', opacity: 0},
    enter: {paddingLeft: '20%', opacity: 1},
    leave: {paddingLeft: '70%', opacity: 0}
  })

  return (
    transitions.map(({item, props, key}) => (
      item &&
      <animated.nav 
        key={key
        }
        style={props}
        className={`fixed top-0 right-0 h-full w-full bg-black bg-opacity-25 z-40 font-bold`}
      >
        {children}
      </animated.nav>
    ))
  )
}