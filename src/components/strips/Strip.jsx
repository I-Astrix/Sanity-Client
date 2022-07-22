import React from 'react'

const Strip = ({text}) => {
  return (
    <div className='strip mt-4 border py-2 px-4'>{text ? text : 'Strip'}</div>
  )
}

export default Strip;