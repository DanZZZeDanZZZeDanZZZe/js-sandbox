import {attach} from '../../utils'
import React from 'react'

function Word({children}) {
  return (
    <div 
      className={`
        c-box h-32 pt-4
        transition duration-150 cursor-pointer hover:bg-gray-100 transform hover:scale-90
        ${attach('no-md', 'mt-10')}
        ${attach('md', 'w-full')}
      `}
    >
      {children}
    </div>
  )
}

export default Word