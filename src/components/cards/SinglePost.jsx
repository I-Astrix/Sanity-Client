// Packages
import React from 'react'
import {PortableText} from '@portabletext/react';
import { urlFor } from '../../Sanity/Sanity';
import { useSelector } from 'react-redux/es/exports';
// Components
import Strip from '../strips/Strip';
import Comment from './Comment';
import Spinner from '../Spinner/Spinner';
import potableTextComponents from '../../config/portableTextComponents';

const SinglePost = ({postData}) => {

    const { isFetching } = useSelector(state => state.posts);   



      console.log(potableTextComponents);

  return (
    <div className='flex flex-col h-max bg-white'>

            {isFetching && <Spinner/>}
            
            <div className="image relative h-80">
                {postData?.mainImage &&  <img src={urlFor(postData?.mainImage).width(800).quality(80).url()} alt="image" className='h-full w-full object-cover'/>}
                <small className='absolute cursor-pointer left-4 bottom-4 px-3 py-1 text-xs backdrop-blur-sm text-white bg-black bg-opacity-30 rounded-full'>Tags</small>
            </div>

            

            <div className="content col-start-3 col-end-6 flex flex-col gap-4 p-2 py-4 px-4">

            <div className="tags flex gap-2">
                        {postData?.tags?.map(tag=>{
                            return <div key={tag} className="tag py-0.5 px-2 inline-block bg-gray-200 text-xs text-gray-600">{tag}</div>
                        })}
                        
                    </div>

                    <div className="title">
                        <h3 className='text-4xl font-extrabold'>{postData?.title}</h3>
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
                    <div className="content">
                        <PortableText value={postData?.body} components={potableTextComponents}/>
                    </div>


      <div className="text-4xl text-center mt-5 font-bold p-4 border-b-2 border-yellow-500 border-dashed">That's It</div>


                    <div className="flex justify-between">

                        <div className="py-1.5 text-white bg-blue-500 px-6">Prev</div>
                        <div className="py-1.5 text-white bg-blue-500 px-6">Next</div>

                    </div>

                    <div className="comments">
                    <Strip text={'Comments'}/>

                    {/* Comments */}

                    <Comment/>
                    <Comment/>
                    <Comment/>


                    </div>

            </div>

    </div>
  )
}

export default SinglePost