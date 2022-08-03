

// Returns All Blog Posts 
export const getAllPosts = `*[_type == "blog"]`;

// Returns a single Post By its ID
export const getSinglePost = (id) => `*[_id == ${id}]`;

// Returns a set amount of Post
export const getByLimit = (limit) => `*[_type == "blog"][0...${limit}]`;

// Sorts by Date
export const sortBy = (type) => `*[_type == "blog"] | order(_createdAt ${type})`;
