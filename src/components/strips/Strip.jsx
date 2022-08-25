import React from 'react'

const Strip = ({text}) => {
  return (
    <div className='strip py-2 px-4 blue-radial text-white relative border-l-8 border-yellow-500'>
      
      <p className='capitalize'>{text ? text : 'Strip'}</p>
    
    </div>
  )
}

export default Strip;