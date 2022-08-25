import React from "react";
import Strip from "../strips/Strip";
import placeholder from "../../assets/images/placeholder.png";
import { useState } from "react";
import { urlFor } from "../../Sanity/Sanity";

const Top = () => {
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
    <>
      <div className="grid grid-rows-4 grid-cols-7 h-64 lg:h-96 mb-4">
        {featured?.map((item) => {
          return (
            <div className="grid_child ">
              <img
                src={urlFor(item?.mainImage).width(400).url()}
                alt=""
                className="top_image"
              />
              <div className="top_container_absolute">
                <div className="flex flex-col gap-2">
                  <div className="title">
                    <h3 className="text-md lg:text-lg font-bold">
                      {item?.title}
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <Strip />
    </>
  );
};

export default Top;
