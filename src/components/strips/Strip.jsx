import React from 'react'

const Strip = ({text}) => {
  return (
    <div className='strip mt-4 py-2 px-4 bg-white'>{text ? text : 'Strip'}</div>
  )
}

export default Strip;