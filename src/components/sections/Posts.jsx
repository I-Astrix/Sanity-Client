import React from 'react'
import Horizontal from '../cards/Horizontal'

const Section = ({posts, title}) => {
  return (
    <div className='bg-white p-5'>
      {/* Map Posts Here */}

      <div className="my-2 py-2 px-2 mb-5 bg-black text-white">
        {title ? title : "Title Placeholder"}
      </div>


      <Horizontal/>
      <Horizontal/>
      <Horizontal/>

    </div>
  )
}

export default Section;