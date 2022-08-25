import { createSlice } from "@reduxjs/toolkit";

const search = createSlice({
    name: "search",
    initialState: {
        posts: [],
        lastId: "",
        fetchStart: false,
        fetchSuccess: false,
        fetcherror: false,
        isFetching: false,
        isError: false
    },
    reducers: {
        setPosts: (state, action)=>{
            state.posts = state.posts.concat(action.payload)
        },
        setLastId: (state, action)=>{
            state.lastId = action.payload
        },
        clearPosts: (state)=>{
            state.setLastId = ""
            state.posts = []
        },
        fetchStart: (state)=>{
            state.isFetching = true
            state.isError = false
        },
        fetchSuccess: (state)=>{
            state.isFetching = false;
        },
        fetchError: (state)=>{
            state.isFetching = false;
            state.isError = true
        },

    }
})

export const { setPosts, setLastId, fetchStart, fetchError, fetchSuccess, clearPosts} = search.actions;
export default search.reducer;