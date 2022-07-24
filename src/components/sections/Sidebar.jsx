import React from 'react'
import Minimal from '../cards/Minimal'
import Vertical from '../cards/Vertical'
import Strip from '../strips/Strip'

const Sidebar = () => {
  return (
    <div className='p-5 bg-white'>
        <Strip/>
      <Vertical/>
      <Minimal/>
      <Minimal/>
      <Minimal/>
      
             
    </div>
  )
}

export default Sidebar