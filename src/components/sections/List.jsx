import React, { useEffect, useState } from 'react';
import { getCats } from '../../Api/requests/Cats';
import { fetchCats } from '../../Sanity/Queries';
import Strip from '../strips/Strip'

const List = () => {
  const [cats, setCats] = useState([]);

  useEffect(()=>{
    const catsList = JSON.parse(localStorage.getItem('cats'));  
    if(!catsList){
      getCats(fetchCats);
    } 
    setCats(catsList)
  }, [])

  return (
    <div className="p-5 bg-white my-4 border-b-4 border-yellow-500">
        <Strip text={"categories"}/>
        <div className="grid grid-cols-2 gap-2 my-4">
        {cats?.map(cat=>{
          return <div key={cat?._id} className="tag py-2 capitalize  px-2 inline-block bg-gray-200 text-xs text-gray-600 border-l-4 border-yellow-500 cursor-pointer hover:bg-yellow-500 hover:text-white transition-all duration-300 ease">{cat?.title}</div>
        })}
        </div>
    </div>
  )
}

export default List;