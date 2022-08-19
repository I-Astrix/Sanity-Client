import { createSlice } from "@reduxjs/toolkit";


const save = createSlice({
    name: "save",
    initialState: {
        posts: [],
    },
    reducers: {
        setPosts: (state, action)=>{
            state.posts = state.posts.concat(action.payload)
        },
        removePost: (state, action)=>{
            state.posts = state.posts.filter(post=> post._id !== action.payload._id)
        }
    }
})

export const { setPosts, removePost } = save.actions;
export default save.reducer;