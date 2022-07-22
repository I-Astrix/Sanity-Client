import React from 'react'
import Strip from '../strips/Strip'

const Top = () => {
  return (
    <div className="">
    <div class="grid grid-rows-4 grid-flow-col gap-4 h-96 mt-2">
    <div class="row-span-4 col-span-4  border">
    <img src="https://source.unsplash.com/ugnrXk1129g" alt="" className='w-full h-full object-cover'/>
    </div>
    <div class="col-span-3 row-start-1 border row-end-3 ">
    <img src="https://source.unsplash.com/ugnrXk1129g" alt="" className='w-full h-full object-cover'/>
    </div>
    <div class="col-span-3 row-start-3 border  row-end-5">
    <img src="https://source.unsplash.com/ugnrXk1129g" alt="" className='w-full h-full object-cover'/>
    </div>
    </div>

    <Strip/>

    </div>
  )
}

export default Top