import React from 'react'
import { useSelector } from 'react-redux';
import Horizontal from '../cards/Horizontal'
import Spinner from '../Spinner/Spinner';
import Strip from '../strips/Strip';

const Section = ({posts, title}) => {

  const {  isFetching } = useSelector(state => state.posts)

  return (
    <div className=' p-3 lg:p-5  h-max'>
      {/* Map Posts Here */}

      {title && <Strip text={title}/>}

      <div className="my-4"></div>

      
      {
        posts?.map(post=>{
          return <Horizontal key={post?._id} postData={post}/>
        })
      }

      {/* {isFetching && <Spinner/>} */}


    </div>
  )
}

export default Section;