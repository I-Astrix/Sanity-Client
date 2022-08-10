import { createSlice } from '@reduxjs/toolkit';

const postSlice = createSlice({
        name: 'post',
        initialState: {
            data: [],
            single: [],
            isFetching: false,
            error: false
        },
        reducers: {
            fetchStart: (state)=>{
                state.isFetching = true;
            },
            setSingle: (state, action)=>{
                state.isFetching = false;
                state.single = action.payload;
            },
            fetchSuccess: (state, action)=>{
                state.data = state.data.concat(action.payload);
                state.fetchStart = false;
                state.isFetching = false;
            },
            fetchError: (state)=>{
                state.error = true;
                state.fetchStart = false;
            },
            clearSingle: (state)=>{
                state.single = [];
            }
        }
});

export default postSlice.reducer;
export const {fetchStart, fetchSuccess, fetchError, setSingle, clearSingle} = postSlice.actions;