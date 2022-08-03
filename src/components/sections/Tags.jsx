import React from 'react'
import Strip from '../strips/Strip'

const Tags = () => {
  return (
    <div className="p-5 bg-white my-4 border-b-4 border-yellow-500">
        <Strip text={'Tags'}/>
        <div className="flex flex-wrap gap-2 my-4">

        <div className="tag py-1 px-2 inline-block bg-gray-200 text-xs text-gray-600 border-2 border-transparent hover:border-yellow-500">Javascript</div>
        <div className="tag py-1 px-2 inline-block bg-gray-200 text-xs text-gray-600 border-2 border-transparent hover:border-yellow-500">Javascript</div>
        <div className="tag py-1 px-2 inline-block bg-gray-200 text-xs text-gray-600 border-2 border-transparent hover:border-yellow-500">Javascript</div>
        <div className="tag py-1 px-2 inline-block bg-gray-200 text-xs text-gray-600 border-2 border-transparent hover:border-yellow-500">Javascript</div>
        </div>
    </div>
  )
}

export default Tags