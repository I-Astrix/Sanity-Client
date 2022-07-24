import React from 'react'
import Horizontal from '../cards/Horizontal'

const Section = ({posts, title}) => {
  return (
    <div className='bg-white p-3 lg:p-5'>
      {/* Map Posts Here */}

      <div className="my-2 py-2 px-2 mb-5 bg-gradient-to-r from-gray-700 to-gray-500 text-white relative">
        <p className='mx-3'>{title ? title : "Title Placeholder"}</p>
        <div className="span h-full w-2 absolute left-0 bg-blue-500 top-0"></div>
      </div>


      <Horizontal/>
      <Horizontal/>
      <Horizontal/>

    </div>
  )
}

export default Section;