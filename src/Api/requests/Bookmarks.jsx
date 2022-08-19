import {  setPosts,  removePost  } from '../../App/features/bookmarks/saveSlice';



export const addPost = async(dispatch, post)=>{
    dispatch(setPosts(post));
}


export const addToStorage = async(posts)=>{
    localStorage.setItem('saved', JSON.stringify(posts));
}

export const remove = async(dispatch, postId)=>{
    dispatch(removePost(postId));
}


