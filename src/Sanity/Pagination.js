const paginate = (page, pageSize)=>{
    const skip = (pageSize / page - 1);
    const postsCount = 10;

    const find = `*[_type == "post"][0..1]`;

    return { skip }
}

export default paginate;