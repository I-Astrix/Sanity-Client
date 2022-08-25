import React from 'react';
import banner from '../../assets/images/19362653.jpg'
import { urlFor } from '../../Sanity/Sanity';

const Vertical = ({data}) => {
  return (
    <div className='flex flex-col my-5 bg-white rounded-md shadow-slate-200 drop-shadow h-64 w-full overflow-hidden'>
            
    <div className="image relative h-40 ">
        <img src={urlFor(data?.mainImage).width(300).url()} alt="" className='h-full w-full object-cover object-top'/>
        {/* <small className='absolute cursor-pointer left-5 bottom-5 px-4 py-1 backdrop-blur-sm text-white bg-white bg-opacity-30 rounded-full'>Tags</small> */}
    </div>

    <div className="flex flex-col gap-2 p-2 px-4">
            <div className="title">
                <h3 className='text-md font-semibold'>{data?.title}</h3>
            </div>
    </div>

</div>
  )
}

export default Vertical