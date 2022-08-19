import React, { useEffect, useId, useState } from "react";


// Components
import Top from "../components/sections/Top";
import Posts from "../components/sections/Posts";
import Sidebar from "../components/sections/Sidebar";
import Ad from "../components/cards/Ad";
import { containerVariant } from "../components/framer-motion/variants";

// Packages
import { motion } from 'framer-motion';
import Cats from "../components/sections/List";
import Carousel from "../components/sections/Carousel";

import { getAllPosts } from "../Sanity/Queries";
import { getData } from "../Api/requests/Posts";

import { useDispatch, useSelector } from "react-redux";

// For Testing remove before deploying
import fetchClient from "../Hooks/fetchClient";

const Home = () => {
  const { data } = useSelector((state) => state.posts);
  const dispatch = useDispatch();   
  useEffect(() => {
    if (data.length === 0) {
      getData(getAllPosts, dispatch, {start: 0,end: 2});
    }
  }, []);

  const getMorePosts= ()=>{
      getData(getAllPosts, dispatch, {start: data?.length, end: data?.length + 2})
  }


  return (
    <motion.div
    variants={containerVariant}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <Top />

      <div className="grid grid-cols-2 lg:grid-cols-6 gap-5 grid-flow-col my-5 relative ">
        <div className=" col-start-1 col-end-7  lg:col-start-1 lg:col-end-5 ">
         
          <Carousel />  

          {/* Sends test requests to sanity's db */}
          {/* <button onClick={()=> fetchClient(fetchCats)} className="w-full bg-yellow-500 text-white py-2 my-5">Fetch Test</button> */}

          <Ad />

          <div className="wrapper bg-white border-b-4 border-yellow-500 py-2 my-5">
          <Posts title={"Popular"} />
          </div>

          <div className="wrapper bg-white border-b-4 border-yellow-500 py-2">
          {Posts ? <Posts posts={data && data} title={"Latest"}/> : "Not Found"}
          <button onClick={getMorePosts} className='mx-auto my-2 justify-center py-2 px-3 flex blue-radial text-white text-xs items-center'> <p>Load More</p> <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg></button>
          </div>

          <Ad />
          
        </div>

        <div className="col-start-1 col-end-7 lg:col-start-5 lg:col-end-7 h-max sticky top-20">
          <Sidebar />
          <Cats />
          <Ad />
        </div>
      </div>
    </motion.div>
  );
};

export default Home;
