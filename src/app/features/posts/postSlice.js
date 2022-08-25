import { createSlice } from '@reduxjs/toolkit';

const postSlice = createSlice({
        name: 'post',
        initialState: {
            data: [],
            single: [],
            lastId: "",
            isFetching: false,
            isError: false
        },
        reducers: {
            fetchStart: (state)=>{
                state.isFetching = true;
                state.isError = false;
            },
            fetchSuccess: (state)=>{
                state.fetchStart = false;
                state.isFetching = false;
            },
            setData: (state, action)=>{
                state.data = state.data.concat(action.payload);
            },
            fetchError: (state)=>{
                state.isError = true;
                state.fetchStart = false;
            },
            setLastId: (state, action)=>{
                state.lastId = action.payload;
            },
            setSingle: (state, action)=>{
                state.isFetching = false;
                state.single = action.payload;
            },
            clearSingle: (state)=>{
                state.single = [];
            }
        }
});

export default postSlice.reducer;
export const {fetchStart, fetchSuccess, fetchError, setSingle, clearSingle, setLastId, setData} = postSlice.actions;