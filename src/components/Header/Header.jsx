import React from 'react'

const Header = () => {
  return (
    <div className="py-5 bg-gradient-to-r from-gray-700 to-gray-500 px-4 flex justify-between items-center">
      <ul className='gap-5 font-normal text-sm text-white hidden lg:flex'>

        <li>HOME</li>
        <li>ARCHIVE</li>
        <li>CATEGORY</li>
        <li>POST TYPES</li>
        <li>ABOUT</li>
        <li>CONTACT</li>

      </ul>
<div className="flex gap-5 items-center">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="#fff" strokeWidth={2}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
</svg>

<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="#fff" strokeWidth={2}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
</svg>

</div>

    </div>
  )
}

export default Header