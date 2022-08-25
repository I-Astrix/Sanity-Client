// Packages
import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import { query_search } from '../Sanity/Queries';
import { useDispatch, useSelector } from "react-redux";
import { motion } from 'framer-motion';

// Components
import Posts from "../components/sections/Posts";
import Sidebar from "../components/sections/Sidebar";
import Ad from "../components/cards/Ad";
import { containerVariant } from "../components/framer-motion/variants";



import Cats from "../components/sections/List";
import { query_postsByCat } from "../Sanity/Queries";
import Spinner from "../components/Spinner/Spinner";
import { getCatPosts } from "../Api/requests/Search";
import { setLastId, clearPosts } from '../app/features/search/searchSlice';

import fetchClient from '../Hooks/fetchClient';
import Pagination from 'react-sanity-pagination';
// Use for Categories and Searched Posts

const Multiple = () => {

  const params = useParams();
  const dispatch = useDispatch();

  const {posts, isFetching, lastId} = useSelector(state=> state.search);
 
  useEffect(()=>{
    if(lastId === null){
      dispatch(setLastId(""))
    }
    dispatch(clearPosts());
    getCatPosts(dispatch, query_postsByCat, params.cat, lastId);    

  }, [params.cat])

  return (
    <motion.div
    variants={containerVariant}
      initial="initial"
      animate="animate"
      exit="exit"
    >

      

      <div className="grid grid-cols-2 lg:grid-cols-6 gap-5 grid-flow-col my-5 relative ">


        <div className=" col-start-1 col-end-7  lg:col-start-1 lg:col-end-5 ">
         
         {/* <h1 className='text-4xl font-bold p-2' style={{textShadow: "1px 1px 2px rgba(0,0,0,0.4)"}}>Javascript</h1> */}
         {/* <h1 className='text-4xl font-bold p-2' style={{textShadow: "1px 1px 2px rgba(0,0,0,0.4)"}}>Uh! Oh! Nothing Here</h1> */}


         <h1 className='capitalize text-4xl font-bold p-2 mb-2' style={{textShadow: "1px 1px 2px rgba(0,0,0,0.4)"}}>{params.cat}</h1>
          <div className="wrapper bg-white border-b-4 border-yellow-500 py-2">
            
          <div className="py-2 px-3 flex gap-2 text-gray-400 text-xs items-center">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 " fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M11 17l-5-5m0 0l5-5m-5 5h12" />
      </svg>
      <button onClick={()=> navigate(-1)}>Go Back</button>
      </div>
      
          {posts ? <Posts posts={posts && posts}/> : "Not Found"}
          {isFetching && <Spinner/> }

          {lastId === null ? <p className="text-center py-2 text-xs text-gray-400">End of results</p>  : <button onClick={()=> getCatPosts(dispatch, query_postsByCat,params.cat,  lastId)} className='mx-auto my-2 justify-center py-2 px-3 flex blue-radial text-white text-xs items-center'> <p>Load More</p> <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg></button>}
          </div>
          
        </div>

        <div className="col-start-1 col-end-7 lg:col-start-5 lg:col-end-7 h-max sticky top-20">
          <Sidebar />
          <Cats />
          <Ad />
        </div>
      </div>
    </motion.div>
  )
}

export default Multiple