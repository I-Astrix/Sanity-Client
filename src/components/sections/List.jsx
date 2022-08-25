import React, { useEffect, useState } from 'react';
import Strip from '../strips/Strip'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const List = () => {

  const { cats } = useSelector(state=> state.cats);

  return (
    <div className="p-5 bg-white my-4 border-b-4 border-yellow-500">
        <Strip text={"categories"}/>
        <div className="grid grid-cols-2 gap-2 my-4">
        {cats?.map(cat=>{
          return <Link to={`/posts/category/${cat?.title}`} key={cat?._id} className="tag py-2 uppercase  px-2 inline-block bg-gray-200 text-xs text-gray-600 border-l-4 border-yellow-500 cursor-pointer hover:bg-yellow-500 hover:text-white transition-all duration-300 ease">{cat?.title}</Link>
        })}
        </div>
    </div>
  )
}

export default List;