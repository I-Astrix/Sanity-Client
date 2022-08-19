import React from 'react';
import { dateOption } from '../../config/dateOpt';
import placeholder from '../../assets/images/placeholder.png';
import { urlFor } from '../../Sanity/Sanity';


const Small = ({postData}) => {
  return (

    <div className='flex flex-col h-max mt-3 md:my-5'>
            
            <div className="image relative h-1/4">
                <img src={urlFor(postData?.mainImage).width(300).url()} alt="postImage" className='h-32 w-full object-cover'/>
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