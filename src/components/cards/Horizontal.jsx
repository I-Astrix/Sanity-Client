import React from 'react'

const Horizontal = () => {
  return (
    <div className='grid grid-cols-5 gap-5 grid-flow-col h-max mb-5'>
            
            <div className="image col-start-1 col-end-3 relative">
                <img src="https://source.unsplash.com/ugnrXk1129g" alt="" className='h-full w-full object-cover'/>
                <small className='absolute cursor-pointer left-5 bottom-5 px-4 py-1 backdrop-blur-sm text-white bg-white bg-opacity-30 rounded-full'>Tags</small>
            </div>

            <div className="content col-start-3 col-end-6 flex flex-col gap-4">
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
  )
}

export default Horizontal