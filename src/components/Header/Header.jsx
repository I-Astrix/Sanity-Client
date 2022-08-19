import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {

  const [search, setSearch] = useState('');
  const [results, setResults] = useState([]);
  const catsList = JSON.parse(localStorage.getItem('cats'));  

  
  
  return (
    <div className="sticky top-0 blue-radial  px-4 flex justify-between items-center z-10">
<div className="py-5 px-3 lg:hidden ">
<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="#fff" strokeWidth={2}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
</svg>
</div>

      <ul className='gap-4 font-normal text-sm text-white hidden lg:flex relative'>

        <Link to="" className='py-5 px-3 navLink '>
          HOME
        </Link>

        <Link to="" className='py-5 px-3 navLink '>ARCHIVE</Link>

        <Link to="" className=' navLink py-5 flex items-center gap-2 px-4 group'>
          <p>
          CATEGORY
          </p>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
          <ul id="dropdown" className='transition-all ease duration-150 p-6 opacity-0 -translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto  grid left-0 absolute top-full bg-white border-yellow-500 border-2 text-black w-72 grid-cols-2 gap-2'>
            {catsList?.map(cat=>{
              return (
                <li key={cat._id} className='py-2 px-3 uppercase inline-block bg-gray-200 text-xs text-gray-600'>{cat.title}</li>
              )
            })}

                      
          </ul>

        </Link>

        <Link to="" className='py-5 px-3 navLink'>POST TYPES</Link>

      </ul>


<div className="flex gap-5 items-center">

{/* <div className="">
<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 lg:hidden" fill="none" viewBox="0 0 24 24" stroke="#fff" strokeWidth={2}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
</svg>
</div> */}

<div className="hidden lg:flex w-64">
  <input value={search} onChange={(e)=> setSearch(e.target.value)} placeholder='Search' type="search" id='search' className='w-full py-2 px-2 placeholder:text-xs outline-none text-sm'/>
  <Link to={`/search/${search}`} className='text-xs items-center flex bg-yellow-500 hover:bg-yellow-600 px-2 text-white'>Search</Link>
</div>


<div className="">
<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="#fff" strokeWidth={2}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
</svg>
</div>

</div>

    </div>
  )
}

export default Header