import React from 'react'
import Minimal from '../cards/Minimal'
import Vertical from '../cards/Vertical'

const Sidebar = () => {
  return (
    <div className='p-5 bg-white'>
      <Vertical/>
      <Minimal/>
    </div>
  )
}

export default Sidebar