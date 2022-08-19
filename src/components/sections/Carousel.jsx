import React, { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getBrowse } from '../../Api/requests/OtherPosts'
import { query_browse } from '../../Sanity/Queries'
import Small from '../cards/Small'
import Vertical from '../cards/Vertical'
import Strip from '../strips/Strip'

import { motion, AnimatePresence } from 'framer-motion';

const Carousel = () => {
  const { browse } = useSelector(state => state.otherPosts);
  const [page, setPage] = useState({start: 0, end: 2});

  const handlePrev = ()=>{

    setPage(prev=> {
      return {
        ...prev,
        start: prev.start <= 2 ? 2 :prev.start - 2,
        end: prev.end <= 0 ? 0 : prev.end - 2
      }
    });

  }
  const handleNext = ()=>{
    setPage(prev=> {
      return {
        ...prev,
        start: prev.start >= 5 ? 5 :prev.start + 2,
        end: prev.end >= 7 ? 7 : prev.end + 2
      }
    });
  }
    
  const dispatch = useDispatch();
  
  useEffect(()=>{
    getBrowse(dispatch, query_browse, {"start": page.start, "end": page.end})
    console.log("Fetching Browse")
  }, [page])

  return (
    <div className='bg-white p-2 lg:p-3 border-b-4 border-yellow-500'>

<Strip text={"Browse"}/>


<div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-2">  

     { browse?.map(post=>{
      return (
        
          <Small key={post._id} postData={post}/> 
        
      )
    })}

</div>

      <div className="flex gap-2">

        <button onClick={handlePrev} className="p-1 bg-yellow-500 text-white  active:shadow-xl ">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
</svg>
</button>
<button onClick={handleNext}  className="p-1 bg-yellow-500 text-white  active:shadow-xl ">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
</svg>
</button>

      </div>
      
    </div>
  )
}

export default Carousel