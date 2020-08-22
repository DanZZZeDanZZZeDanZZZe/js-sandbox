import {attach} from '../../utils'
import {Link} from 'react-router-dom'
import React from 'react'
import AddWordIcon from './AddWordIcon'

function AddWord() {
  return (
    <div 
      className={`
        c-box h-32 
        transition duration-150 cursor-pointer hover:bg-gray-100 transform hover:scale-90
        ${attach('md', 'w-full')}
      `}
    >
      <Link 
        to="/add-word"
        className="w-full h-full flex flex-col justify-center items-center"
      >
        <div className="no-md:w-1/6 md:w-1/4">
          <AddWordIcon size="auto"/>
        </div>
      </Link>
    </div>
  )
}

export default AddWord