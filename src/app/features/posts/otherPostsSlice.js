import { createSlice } from "@reduxjs/toolkit";


const otherPosts = createSlice({
    name: 'otherPosts',
    initialState: {
        popular: [],
        suggested: [],
        mustRead: [],
        browse: [],
        isFetching: false,
        error: false,

    },
    reducers: {
        setPopular: (state, action)=>{
            state.popular = action.payload
        },
        setSuggested: (state, action)=>{
            state.suggested = action.payload
        },
        setMustRead: (state, action)=>{
            state.mustRead = action.payload
        },
        setBrowse: (state, action)=>{
            state.browse = action.payload
        },
        fetchStart: (state)=>{
            state.isFetching = true;  
        },
        fetchSuccess: (state)=>{
            state.isFetching = false;
        },
        isError: (state)=>{
            state.error = true;
            state.isFetching = false;
        },
    }
});

export default otherPosts.reducer;
export const { setPopular, setMustRead, setSuggested, setBrowse, fetchStart, fetchSuccess, isError } = otherPosts.actions;