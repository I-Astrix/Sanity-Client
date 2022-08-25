import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Ad from '../cards/Ad'
import Minimal from '../cards/Minimal'
import Strip from '../strips/Strip'
import Spinner from '../Spinner/Spinner';
import { getMustRead } from '../../Api/requests/OtherPosts'

import { query_mustRead } from '../../Sanity/Queries';

const Sidebar = () => {

  const {isFetching, error, mustRead} = useSelector(state => state.otherPosts);

  const dispatch = useDispatch()
  useEffect(()=>{
    getMustRead(dispatch, query_mustRead);
  }, [])


  return (
    <div className='p-5 bg-white border-b-4 border-yellow-500'>
      <Strip text={"Must Read"}/>
      {/* {
        isFetching && <Spinner/>
      } */}
      {
        mustRead?.map(post=>{
          return <Minimal key={post._id} postData={post}/>
        })
      }
      {/* <Strip text={"Suggested"}/>
      <Minimal/>
      <Minimal/>
      <Minimal/> */}

      
             
    </div>
  )
}

export default Sidebar