import React from 'react'
import Strip from '../strips/Strip'

const Top = () => {
  return (
    <div className="">
      
    <div class="grid grid-rows-4 grid-flow-col gap-4 h-64 lg:h-96 lg:mt-2 ">

    <div class="row-span-4 lg:col-span-4  border relative">
    <img src="https://source.unsplash.com/ugnrXk1129g" alt="" className='w-full h-full object-cover'/>

    <div className="data absolute left-0 bottom-0 w-full px-4 py-8 text-white bg-title to-gray-500">
    <div className="content flex flex-col gap-4">
                    <div className="title">
                        <h3 className='text-md lg:text-lg font-bold'>Lorem ipsum dolor, sit amet consectetur adipisicing.</h3>
                    </div>
                    <div className="info text-gray-400 flex items-center gap-4">
                        <small className='flex items-center gap-1'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            Today</small>
                        <small className='flex items-center gap-1'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                            125 Comments</small>
                    </div>
                    <div className="content hidden lg:block">
                        <p className='text-sm'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa possimus natus voluptatum?</p>
                    </div>
            </div>
    </div>

    </div>

    <div class="col-span-3 row-start-1 border row-end-3  hidden lg:block relative">
    <img src="https://source.unsplash.com/ugnrXk1129g" alt="" className='w-full h-full object-cover'/>

    <div className="data  absolute left-0 bottom-0 w-full px-4 py-2 text-white bg-title">

    <div className="content flex flex-col gap-1 py-2">
                    <div className="title">
                        <h3 className='text-sm font-bold'>Lorem ipsum dolor, sit amet consectetur adipisicing.</h3>
                    </div>
            </div>
    </div>

    </div>

    <div class="col-span-3 row-start-3 border row-end-5 hidden lg:block relative">
    <img src="https://source.unsplash.com/ugnrXk1129g" alt="" className='w-full h-full object-cover'/>
    <div className="data absolute left-0 bottom-0 w-full px-4 py-2 text-white bg-title">
       <div className="content flex flex-col gap-1 py-2">
                    <div className="title">
                        <h3 className='text-sm font-bold'>Lorem ipsum dolor, sit amet consectetur adipisicing.</h3>
                    </div>
            </div>
    </div>
    </div>

    </div>

    <Strip/>

    </div>
  )
}

export default Top