import React from 'react'
import { attach } from '../../utils'

function WorkingSurfaceHolder() {
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
          bg-purple-200 absolute top-0 bottom-0 left-0 right-0 overflow-auto
          ${attach('no-md', '')}
          ${attach('md','flex justify-center items-center')}
        `}
      >
        <div
          style={{ minHeight: '1500px', minWidth: '2000px' }}
          className={`bg-white`}
        >
        </div>
      </div>
    </div>
  )
}

export default WorkingSurfaceHolder