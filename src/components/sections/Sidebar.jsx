import React from 'react'
import Ad from '../cards/Ad'
import Minimal from '../cards/Minimal'
import Vertical from '../cards/Vertical'
import Strip from '../strips/Strip'

const Sidebar = () => {
  return (
    <div className='p-5 bg-white border-b-4 border-yellow-500'>
        <Strip text={"Must Read"}/>
      <Vertical/>
      <Strip text={"Suggested"}/>
      <Minimal/>
      <Minimal/>
      <Minimal/>

      
             
    </div>
  )
}

export default Sidebar