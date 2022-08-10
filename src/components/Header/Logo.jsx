import React from 'react'

const Logo = () => {
  return (
    <div className="flex items-center justify-between gap-4 py-2 bg-white px-4">
      <div className="flex items-center gap-2">
      <img className='w-10 h-10' src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Blogger.svg/1200px-Blogger.svg.png" alt="" />
      <h1 className='text-lg font-normal'>Blogger</h1>
      </div>
      <div className="">
        <small>The everything blog</small>
      </div>
    </div>
  )
}

export default Logo