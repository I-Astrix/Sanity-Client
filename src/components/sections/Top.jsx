import React from 'react'
import Strip from '../strips/Strip';
import placeholder from '../../assets/images/placeholder.png';

const Top = () => {
  return (
    <div className="">
      
    <div className="grid grid-rows-4 grid-cols-7 gap-4 h-64 lg:h-96 lg:mt-2 mb-4 ">

    <div className="row-span-4 col-start-1 col-end-8 lg:col-start-1 lg:col-end-5 border relative overflow-hidden group">
    <img src={placeholder} alt="" className='w-full h-full object-cover group-hover:scale-110 transition-all duration-300 ease '/>
    <div className="data absolute left-0 bottom-0 w-full px-4 py-4 text-white bg-title to-gray-500">
    <div className="flex flex-col gap-2">
                    <div className="title">
                        <h3 className='text-md lg:text-xl font-bold'>1Lorem ipsum dolor, sit amet consectetur adipisicing.</h3>
                    </div>
                    <div className="hidden lg:block ">
                        <p className='text-md'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa possimus natus voluptatum?</p>
                    </div>
            </div>
    </div>
    </div>

    <div className="row-span-2 hidden lg:block lg:col-start-5 lg:col-end-8 border relative overflow-hidden group">
    <img src={placeholder} alt="" className='w-full h-full object-cover group-hover:scale-110 transition-all duration-300 ease '/>
    <div className="data absolute left-0 bottom-0 w-full px-4 py-4 text-white bg-title to-gray-500">
    <div className="flex flex-col gap-2">
                    <div className="title">
                        <h3 className='text-md lg:text-sm font-bold'>1Lorem ipsum dolor, sit amet consectetur adipisicing.</h3>
                    </div>
            </div>
    </div>
    </div>
    
    <div className="row-span-2 hidden lg:block lg:col-start-5 lg:col-end-8 border relative overflow-hidden group">
    <img src={placeholder} alt="" className='w-full h-full object-cover group-hover:scale-110 transition-all duration-300 ease '/>
    <div className="data absolute left-0 bottom-0 w-full px-4 py-4 text-white bg-title to-gray-500">
    <div className="flex flex-col gap-2">
                    <div className="title">
                        <h3 className='text-md lg:text-sm font-bold'>1Lorem ipsum dolor, sit amet consectetur adipisicing.</h3>
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