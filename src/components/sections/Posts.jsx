import React from 'react'
import Horizontal from '../cards/Horizontal'
import Strip from '../strips/Strip';

const Section = ({posts, title}) => {
  return (
    <div className='bg-white p-3 lg:p-5 border-b-4 border-yellow-500'>
      {/* Map Posts Here */}

      <Strip text={title}/>

      <div className="my-4"></div>

      <Horizontal/>
      <Horizontal/>
      <Horizontal/>

    </div>
  )
}

export default Section;