import React from 'react'

const Strip = ({text}) => {
  return (
    <div className='strip py-2 px-4 blue-radial text-white relative'>
      
      <p className='capitalize'>{text ? text : 'Strip'}</p>
    
    <div className="span h-full w-2 absolute left-0 bg-yellow-500 top-0"></div>
    
    </div>
  )
}

export default Strip;