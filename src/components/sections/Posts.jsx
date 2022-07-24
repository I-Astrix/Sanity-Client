import React from 'react'
import Horizontal from '../cards/Horizontal'
import Strip from '../strips/Strip';

const Section = ({posts, title}) => {
  return (
    <div className='bg-white p-3 lg:p-5'>
      {/* Map Posts Here */}

      <Strip text={"Latest"}/>

      <div className="my-4"></div>

      <Horizontal/>
      <Horizontal/>
      <Horizontal/>

    </div>
  )
}

export default Section;