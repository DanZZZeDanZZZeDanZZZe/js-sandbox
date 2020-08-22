import React from 'react'
import { attach } from '../../utils'

function WordInput() {
  return (
    <div
      className={`
        c-box flex p-4
        ${attach('no-md', 'flex-col justify-center w-full h-24 mt-4 text-lg')}
        ${attach('md', 'items-center justify-around w-1/2 h-16 text-base')}
        ${attach('lg', 'w-1/3')}
      `}
    >
      <label
        htmlFor="new-word"
        className="h-6 md:mr-3"
      >
        Enter a word:
      </label>
      <input 
        id="new-word"
        type="text"
        autoFocus 
        maxLength="30"
        placeholder="your word"
        className="c-input bg-gray-200 md:w-8/12"
      />
    </div>
  )
}

export default WordInput