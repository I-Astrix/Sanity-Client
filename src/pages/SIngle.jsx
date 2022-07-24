import React from 'react'
import Top from '../components/sections/Top';
import Posts from '../components/sections/Posts';
import Sidebar from '../components/sections/Sidebar';
import Ad from '../components/cards/Ad';
import { Link, useLocation } from 'react-router-dom';
import SinglePost from '../components/cards/SinglePost';

const Single = () => {

    const location = useLocation();
    console.log(location);


  return (

    <>
    
<nav className="flex py-4" aria-label="Breadcrumb">
  <ol className="inline-flex items-center space-x-1 md:space-x-3">
    <li className="inline-flex items-center">
      <Link to="/" className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 ">
        <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path></svg>
        Home
      </Link>
    </li>
    <li>
      <div className="flex items-center">
        <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
        <a href="#" className="ml-1 text-sm font-medium text-gray-700 hover:text-gray-900 md:ml-2 ">Projects</a>
      </div>
    </li>
  </ol>
</nav>


    <div className="grid grid-cols-6  lg:border gap-5 grid-flow-col relative">

        <div className=" col-start-1 col-end-7  lg:col-start-1 lg:col-end-5">
          
              <SinglePost/>
              <Ad/>
              <Posts/>
        </div>

        <div className="col-start-5 col-end-7 h-max hidden lg:block  sticky top-0">
            <Sidebar/>
        </div>


      </div>
      </>
  )
}

export default Single