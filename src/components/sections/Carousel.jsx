import React from 'react'
import Small from '../cards/Small'
import Vertical from '../cards/Vertical'
import Strip from '../strips/Strip'

const Carousel = () => {
  return (
    <div className='bg-white p-3 lg:p-5 border-b-4 border-yellow-500'>

<Strip text={"Browse"}/>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
      <Small/>
      <Small/>
      <Small/>
</div>

      <div className="flex gap-2">

        <div className="p-1 bg-yellow-500 text-white">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
</svg>
</div>
<div className="p-1 bg-yellow-500 text-white">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
</svg>
</div>

      </div>
      
    </div>
  )
}

export default Carousel