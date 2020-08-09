import {attach} from '../../utils'
import React, { } from 'react'
import Word from './Word'

function Dictionary() {
  const words = new Array(40).fill('a')
  return (
    <main
      className={`
        min-h-screen h-auto pt-16 bg-indigo-200
        ${attach('no-md', 'px-6')}
        ${attach('md', 'grid grid-cols-5 gap-10 px-8')}
      `}
    >
    {
      words.map((item, index) => {
        return (
          <Word key={index}>
            {item}
          </Word>
        )
      })
    }  
    </main>
  )
}

export default Dictionary