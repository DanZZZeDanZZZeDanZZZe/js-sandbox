import React from 'react'
import {attach} from '../../utils'
import WorkingSurface from './WorkingSurface'
import WordInput from './WordInput'

function Board() {
  return (
    <div
      role="main"
      className={`
        c-main flex flex-col px-4 pb-4
        ${attach('no-md', '')}
        ${attach('md', '')}
      `}
    >
      <div>
        <WordInput
          className={`
            
            ${attach('no-md', '')}
            ${attach('md', '')}
          `}
        />
      </div>
      <WorkingSurface/>
    </div>
  )
}

export default Board