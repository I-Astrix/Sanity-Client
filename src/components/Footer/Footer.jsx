import React from 'react'

const Footer = () => {
  return (
    <div className="mt-12 lg:py-20 px-8  py-8 lg:px-48 blue-radial poppins">

    <div className=" text-white text-2xl font-extrabold mb-8">
        <h1 className='tracking-wide '>Blogger</h1>
    </div>


<div className=" grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 ">
            <div className="text-white ">
                <h1 className='text-xl font-bold'>Categories</h1>
                <ul className='mt-5'>
                    <li className='text-lg font-thin text-slate-400 my-2'>Design</li>
                    <li className='text-lg font-thin text-slate-400 my-2'>Science</li>
                    <li className='text-lg font-thin text-slate-400 my-2'>Space</li>
                    <li className='text-lg font-thin text-slate-400 my-2'>Nature</li>
                </ul>
            </div>
            <div className="text-white ">
            <h1 className='text-xl font-bold'>Tags</h1>
            <ul className='mt-5'>
                <li className='text-lg font-thin text-slate-400 my-2'>Popular</li>
                <li className='text-lg font-thin text-slate-400 my-2'>Popular</li>
                <li className='text-lg font-thin text-slate-400 my-2'>Popular</li>
                <li className='text-lg font-thin text-slate-400 my-2'>Popular</li>
            </ul>

            </div>
            <div className="text-white ">
            <h1 className='text-xl font-bold'>Quick Links</h1>
            <ul className='mt-5'>
                <li className='my-2 text-lg font-thin text-slate-400'>Home</li>
                <li className='my-2 text-lg font-thin text-slate-400'>Shop</li>
                <li className='my-2 text-lg font-thin text-slate-400'>About</li>
                <li className='my-2 text-lg font-thin text-slate-400'>Contact</li>
            </ul>

            </div>
            <div className="text-white ">
            <h1 className='text-xl font-bold'>Social</h1>
            <ul className='mt-5 flex flex-col gap-5'>
            </ul>
            </div>
    </div>

<div className="mt-10">
            <h1 className='text-slate-400 text-xs'>Copyright ©2022 All rights reserved | Design By  <a href="https://www.google.com" className='text-white'>Colorlib</a></h1>
            
            </div>
            

    </div>
  )
}

export default Footer