import React, {useState, useRef} from 'react'
import {attach, clamp} from '../../utils'
import {useDrag} from 'react-use-gesture'


function TranslationBlock({width, height}) {
  const [offset, setOffset] = useState({x: 0, y: 0})
  const ref = useRef()

  const bind = useDrag(({offset: [ox, oy]}) => {
    ox = clamp(ox, 0, width - ref.current.offsetWidth)
    oy = clamp(oy, 0, height - ref.current.offsetHeight)
    setOffset({left: ox, top: oy})
  })

  return (
    <div
      {...bind()}
      ref={ref}
      style={{
        ...offset,
        width: '150px',
        height: '50px'
      }}
      className={`
        c-box absolute h-20 w-48 bg-orange-300
        ${attach('no-md', '')} 
        ${attach('md', '')}
      `}
    >
    </div>
  )
}

export default TranslationBlock