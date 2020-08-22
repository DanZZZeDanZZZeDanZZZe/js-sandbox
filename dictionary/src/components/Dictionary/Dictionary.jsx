import {attach} from '../../utils'
import React, { } from 'react'
import Word from './Word'
import AddWord from './AddWord'

function Dictionary() {
  const words = new Array(40).fill('a')
  return (
    <main
      className={`
        c-main
        ${attach('no-md', 'px-6 pt-20')}
        ${attach('md', 'grid grid-cols-5 gap-10 px-8')}
      `}
    >
      <AddWord/>
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