// Packages
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useParams, useNavigate } from "react-router-dom";
import { motion } from 'framer-motion';
// Components
import Posts from "../components/sections/Posts";
import Sidebar from "../components/sections/Sidebar";
import Ad from "../components/cards/Ad";
import SinglePost from "../components/cards/SinglePost";
import Cats from "../components/sections/List";
import Spinner from "../components/Spinner/Spinner";
// Redux
import { clearSingle } from "../app/features/posts/postSlice";
// Api
import { getSingle } from "../Api/requests/Posts";
import { getSingleBySlug } from "../Sanity/Queries";
import { containerVariant } from "../components/framer-motion/variants";
import Carousel from "../components/sections/Carousel";

// import { arrowLeft } from "../assets/icons/svg";

const Single = () => {
  const location = useLocation();
  const navigate = useNavigate()
  const { slug } = useParams();
  const dispatch = useDispatch();
  const { single, isFetching } = useSelector((state) => state.posts);

  useEffect(() => {
    window.scrollTo(0, 0);
    getSingle(getSingleBySlug, dispatch, slug);
  }, [slug]);

  console.log(single?.body)

  return (
    <motion.div variants={containerVariant}
    initial="initial"
    animate="animate"
    exit="exit">
      
      {/* Back */}
      <div className="py-2 px-2 flex gap-2 text-gray-400 text-xs items-center">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 " fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M11 17l-5-5m0 0l5-5m-5 5h12" />
      </svg>
      <button onClick={()=> navigate(-1)}>Go Back</button>
      </div>

      <div
        className="grid grid-cols-6 gap-5 grid-flow-col relative"
      >
        <div className=" col-start-1 col-end-7  lg:col-start-1 lg:col-end-5">
          {isFetching && <Spinner />}
          {/* <SinglePost postData={single}/> */}
          {!isFetching && <SinglePost postData={single} />}
          <Ad />

          <div className="wrapper bg-white border-b-4 border-yellow-500 py-2 my-5">
              <Posts title={"related"}/>      
          </div>
          
        </div>

        <div className="col-start-5 col-end-7 h-max hidden lg:block sticky top-20">
          <Sidebar />
          <Cats title={"categories"}/>
        </div>
      </div>

      <div className="text-4xl text-center mt-10 font-bold p-4 border-b-2 border-yellow-500 border-dashed">
        That's It 
       
      </div>
    </motion.div>
  );
};

export default Single;
