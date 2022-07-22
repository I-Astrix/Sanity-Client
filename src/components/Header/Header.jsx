import React from 'react'

const Header = () => {
  return (
    <div className="py-5 bg-[#04091E] px-4 flex justify-between items-center">
      <ul className='flex gap-5 font-normal text-xs text-white '>

        <li>HOME</li>
        <li>ARCHIVE</li>
        <li>CATEGORY</li>
        <li>POST TYPES</li>
        <li>ABOUT</li>
        <li>CONTACT</li>

      </ul>

      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="#fff" strokeWidth={2}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
</svg>

    </div>
  )
}

export default Header