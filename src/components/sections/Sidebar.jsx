import React from 'react'
import Minimal from '../cards/Minimal'
import Vertical from '../cards/Vertical'

const Sidebar = () => {
  return (
    <div className=' p-5'>
      <Vertical/>
      <Minimal/>
    </div>
  )
}

export default Sidebar