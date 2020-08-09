import {attach} from '../../utils'
import React from 'react'

function Word({children}) {
  return (
    <div 
      className={`
        h-32 pt-4 bg-white shadow-lg rounded-lg text-3xl text-center
        ${attach('no-md', 'mt-10')}
        ${attach('md', 'w-full')}
      `}
    >
      {children}
    </div>
  )
}

export default Word