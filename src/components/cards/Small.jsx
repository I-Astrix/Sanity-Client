import React from 'react';
import { dateOption } from '../../App/dateOpt';
import placeholder from '../../assets/images/placeholder.png';
import { urlFor } from '../../Sanity/Sanity';

const Small = ({postData}) => {
  return (
    <div className='flex flex-col h-max mt-3 md:my-5'>
            
            <div className="image relative h-1/4">
                <img src={urlFor(postData?.mainImage).width(300).url()} alt="postImage" className='h-32 w-full object-cover'/>
                <small className='absolute cursor-pointer left-2 bottom-2 px-3 py-1 text-xs backdrop-blur-sm text-white bg-black bg-opacity-30 rounded-full'>{postData?.category?.title}</small>
            </div>

            <div className="content col-start-3 col-end-6 flex flex-col gap-2 py-2">
                    <div className="title">
                        <h3 className='text-sm font-bold'>{postData?.title}</h3>
                    </div>
            </div>

    </div>
  )
}

export default Small