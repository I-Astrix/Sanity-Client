export const getAllPosts = () => `*[_type == "post"][$start..$end]{
   ...,
   category->{
    title
   }
 }`;

const fetchCats = `*[_type == "category"]{
  title,
  _id
}`;

const fetchPopular = `*[_type == "post"] | order(views desc){
  views,
  title
  }`;
const createAsc = `*[_type == "post"] | order(_createdAt asc){
  ...
}`;

const query_mustRead = `*[mustRead][0..2]{
  _id,
    title,
    _createdAt, 
    category-> { title },
    mainImage,
    slug { current }
  }`;

// Returns a single Post By its ID
export const getSingleById = () => `*[_type == "post" && _id == $key][0]{
  ...,
  category-> {title}
}`;

// Single Post By Slug
export const getSingleBySlug = `*[_type == "post" && slug.current == $key][0]{
  ...,
  category-> {title}
}`;

// Returns a set amount of Post
export const getByLimit = (limit) => `*[_type == "blog"][0...${limit}]`;

// Sorts by Date
export const sortBy = (type) =>
  `*[_type == "blog"] | order(_createdAt ${type})`;


const query_browse = `*[_type == "post"][$start..$end]{
  _id,
    title,
    category-> { title },
    mainImage,
    slug { current }
}`;

const query_search = `*[_type == "post" && title match $query]{
  ...,
  category-> {title}
}`;

const query_posts_by_cat = `*[_type == "post" && category-> title match $query]{
  category-> {title}
  }`;

const query_paginate = `*[_type == "article" && _id > $lastId] | order(_id) [0...100] {
    _id, title, body
}`;

const query_fail = `*[_type == "cat"]`

export {
  query_fail,
  fetchCats,
  fetchPopular,
  query_mustRead,
  query_browse,
  query_search,
  query_posts_by_cat,
  query_paginate
};
