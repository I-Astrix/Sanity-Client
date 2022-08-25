import React, { useState } from 'react';
import banner from '../../assets/images/19362653.jpg'
import Vertical from '../cards/Vertical';

const Header = () => {

    const [featured, setFeatured] = useState([
        {
          mainImage: {
            _type: "image",
            asset: {
              _ref: "image-f3fb1176c2ba884ac33e8ad066f2cafcd8ab9fe0-1280x720-jpg",
              _type: "reference",
            },
          },
          title: "Build A Custom Video Player in HTML CSS & JavaScript",
        },
        {
          mainImage: {
            _type: "image",
            asset: {
              _ref: "image-7bb1df0547f424af4c6cdff043b337dfa2384896-1280x720-jpg",
              _type: "reference",
            },
          },
          title: "How to Get User Location in HTML CSS & JavaScript",
        },
        {
          mainImage: {
            _type: "image",
            asset: {
              _ref: "image-59b914da6c20b513b47447078d4fa7d4f9d9590a-2400x1600-jpg",
              _type: "reference",
            },
          },
          title: "The best new CSS features for 2022",
        },
        {
          mainImage: {
            _type: "image",
            asset: {
              _ref: "image-c990f71588215f382f548dfb88ce64ee63e49991-600x449-jpg",
              _type: "reference",
            },
          },
          title: "Awesome Things Related To React Hooks 😍",
        },
        {
          mainImage: {
            _type: "image",
            asset: {
              _ref: "image-5cef1ee6e9813991f9f4f3da456a7b31b34f1edd-640x360-png",
              _type: "reference",
            },
          },
          title: "Custom Modal Box using HTML CSS & JavaScript",
        },
      ]);

  return (
    <div className='relative mb-40'>
        <div className="image_box h-72 lg:h-96 ">
            <img src={banner} alt="" className='w-full h-full object-cover object-top'/>
        </div>    
        <div className="featured absolute top-40 lg:top-60 w-full gap-2 lg:gap-6  px-5 lg:px-12 grid grid-cols-1 lg:grid-cols-3">

            {featured?.map(item=>{
                return (
                        <Vertical data={item} key={item._id}/>
                )
            })}       

        </div>
    </div>
  )
}

export default Header