import React from "react";
import { Link } from "react-router-dom";
import { PortableText } from "@portabletext/react";
import { urlFor } from "../../Sanity/Sanity";
import { dateOption } from "../../config/dateOpt";

const Horizontal = ({ postData }) => {
  return (
    <Link
      to={`/post/${postData?.slug?.current}`}
      className="grid grid-cols-5 gap-4 lg:gap-8 grid-flow-col mb-5 group cursor-pointer relative align-super"
    >
      <div className="image lg:h-[160px] h-[100px] col-start-1 col-end-3 overflow-hidden">
        {postData?.mainImage && (
          <img
            loading="lazy"
            src={urlFor(postData?.mainImage).width(400).url()}
            alt=""
            className="h-full group-hover:scale-110 transition-all duration-1000 ease  w-full object-cover"
          />
        )}
      </div>

      <div className="col-start-3 col-end-6">
        <div className="title">
          <h3 className="text-sm lg:text-xl font-bold">{postData?.title}</h3>
        </div>
        <div className="flex items-center gap-2 mt-5">
          <div className="tags flex gap-2">
            <div className="capitalize tag py-0.5 px-2 inline-block bg-gray-200 text-xs text-gray-600">
              {postData?.category?.title}
            </div>
          </div>
          -
          <small className="flex items-center gap-1 text-gray-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            {new Date(postData?._createdAt).toLocaleDateString(
              "en-us",
              dateOption
            )}
          </small>
        </div>
      </div>
    </Link>
  );
};

export default Horizontal;
