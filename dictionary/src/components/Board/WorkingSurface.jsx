import React, { useState, useEffect } from 'react'
import { attach } from '../../utils'
import TranslationBlock from './TranslationBlock'
import { useDrag } from 'react-use-gesture'
import { useRef } from 'react'

const SURFACE_SIZE = {height: 1000, width: 1500}

function WorkingSurface() {
  const {height, width} = SURFACE_SIZE
  const [offset, setOffset] = useState({left: 0, top: 0})
  const surfaceRef = useRef()

  const bind = useDrag(({offset: [ox, oy], event, first, cancel}) => {
    first ?
        event.target !== surfaceRef.current && cancel() :
        setOffset({left: ox, top: oy})
  })

  return (
    <div
      className={`
        c-box flex-grow relative mt-6 p-2 overflow-hidden
        ${attach('no-md', '')}
        ${attach('md','')}
      `}
    >
      <div
        className={`
          bg-purple-200 absolute top-0 bottom-0 left-0 right-0 overflow-hidden
          ${attach('no-md', '')}
          ${attach('md','')}
        `}
      >
        <div
          ref={surfaceRef}
          {...bind()}
          style={{ 
            ...offset,
            width,
            height
          }}
          className={`relative bg-white mx-auto cursor-pointer`}
        >
          <TranslationBlock {...{width, height}}/>
        </div>
      </div>
    </div>
  )
}

export default WorkingSurface