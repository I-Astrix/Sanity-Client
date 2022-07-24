import React from 'react'

const Strip = ({text}) => {
  return (
    <div className='strip py-2 px-4 bg-gradient-to-r from-gray-700 to-gray-500 text-white relative'>
      
      <p>{text ? text : 'Strip'}</p>
    
    <div className="span h-full w-2 absolute left-0 bg-blue-500 top-0"></div>
    
    </div>
  )
}

export default Strip;