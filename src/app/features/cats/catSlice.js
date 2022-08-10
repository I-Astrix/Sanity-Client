import { createSlice } from "@reduxjs/toolkit";

const catSlice = createSlice({
    name: 'cats',
    initialState: {
        cats:[]
    },
    reducers: {
        setCats: (state, action)=>{
            state.cats = action.payload
        }
    }  
})

export default catSlice.reducer;
export const { setCats } = catSlice.actions

