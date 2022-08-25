import { createSlice } from "@reduxjs/toolkit";


const save = createSlice({
    name: "save",
    initialState: {
        savedPosts: [],
    },
    reducers: {
        setPosts: (state, action)=>{
            state.savedPosts = state.savedPosts.concat(action.payload)
        },
        setState: (state, action)=>{
            state.savedPosts = action.payload;
        },
        removePost: (state, action)=>{
            state.savedPosts = state.savedPosts.filter(post=> post._id !== action.payload._id)
        }
    }
})

export const { setPosts, removePost, setState } = save.actions;
export default save.reducer;