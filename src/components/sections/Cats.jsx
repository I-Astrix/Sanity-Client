import React from 'react'
import Strip from '../strips/Strip'

const Cats = () => {
  return (
    <div className="p-5 bg-white my-4 ">
        <Strip text={'Categories'}/>
        <div className="flex flex-wrap gap-2 my-4">

        <div className="tag py-1 px-2 inline-block bg-gray-200 text-xs text-gray-600 border-2 border-transparent hover:border-blue-500">Programming</div>
        <div className="tag py-1 px-2 inline-block bg-gray-200 text-xs text-gray-600 border-2 border-transparent hover:border-blue-500">Digital Marketing</div>
        <div className="tag py-1 px-2 inline-block bg-gray-200 text-xs text-gray-600 border-2 border-transparent hover:border-blue-500">Science</div>
        <div className="tag py-1 px-2 inline-block bg-gray-200 text-xs text-gray-600 border-2 border-transparent hover:border-blue-500">Space</div>
        </div>
    </div>
  )
}

export default Cats