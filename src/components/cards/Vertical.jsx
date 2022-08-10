import React from 'react'
import placeholder from '../../assets/images/placeholder.png';

const Vertical = () => {
  return (
    <div className='flex flex-col h-max my-5'>
            
            <div className="image relative h-1/2">
                <img src={placeholder} alt="" className='h-full w-full object-cover'/>
                <small className='absolute cursor-pointer left-5 bottom-5 px-4 py-1 backdrop-blur-sm text-white bg-white bg-opacity-30 rounded-full'>Tags</small>
            </div>

            <div className=" col-start-3 col-end-6 flex flex-col gap-2 p-2 px-4">
                    <div className="title">
                        <h3 className='text-lg font-bold'>Lorem ipsum dolor, sit amet consectetur adipisicing.</h3>
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
                    <div className="">
                        <p className='text-sm'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa possimus natus voluptatum?</p>
                    </div>
            </div>

    </div>
  )
}

export default Vertical