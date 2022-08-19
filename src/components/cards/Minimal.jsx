import React from 'react'
import placeholder from '../../assets/images/placeholder.png';
import { urlFor } from '../../Sanity/Sanity';
import { Link } from 'react-router-dom';
import { dateOption } from '../../config/dateOpt';

const Minimal = ({postData}) => {
  return (
    <Link to={`/post/${postData?.slug?.current}`} className='grid grid-cols-3 gap-3 h-20 my-5 grid-rows-2'>
            
    <div className="image relative shrink col-start-1 col-end-2 row-start-1 row-end-3">
        <img src={urlFor(postData.mainImage).width(200).url()} alt="image" className='h-full w-full object-cover rounded-xl'/>
    </div>

    <div className="col-start-2 col-end-4 flex flex-col gap-4">
            <div className="title">
                <h3 className='text-sm font-bold'>{postData?.title}</h3>
                {/* <h3 className='text-sm font-bold'>Lorem ipsum, dolor sit amet consectetur adipisicing.</h3> */}
            </div>

            <small className='text-gray-400 flex items-center gap-1'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            {new Date(postData?._createdAt).toLocaleDateString('en-us', dateOption)}
                            </small>
    </div>

</Link>
  )
}

export default Minimal