// export const getSingleById = ()=> `*[_type == "post" && _id == $key]`;

// export const test = ()=> `*[_type == "post"]`

// *[_type == "post" && _id == $key]

// export const getSingleBySlug = `*[_type == "post" && _id == $key]`;

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

export { fetchCats, fetchPopular, query_mustRead, query_browse };
