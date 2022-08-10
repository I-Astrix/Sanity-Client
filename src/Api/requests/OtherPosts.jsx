import { setPopular, setMustRead, setSuggested, fetchStart, fetchSuccess, isError, setBrowse } from '../../app/features/posts/otherPostsSlice';
import { fetchError } from '../../app/features/posts/postSlice';
import fetchClient from '../../Hooks/fetchClient';

export const getMustRead = async(dispatch, query, params)=>{
    dispatch(fetchStart())
    try{
        const data = await fetchClient(query);
        dispatch(setMustRead(data));
        dispatch(fetchSuccess());
    }
    catch{
        dispatch(fetchError())
    }
}

export const getPopular = async(dispatch, query, params)=>{
    dispatch(fetchStart())
    try{
        const data = await fetchClient(query);
        dispatch(setPopular(data));
        dispatch(fetchSuccess());
    }
    catch{
        dispatch(fetchError())
    }
}

export const getSuggested = async(dispatch, query, params)=>{
    dispatch(fetchStart())
    try{
        const data = await fetchClient(query);
        dispatch(setSuggested(data));
        dispatch(fetchSuccess());
    }
    catch{
        dispatch(fetchError())
    }
}

export const getBrowse = async(dispatch, query, params)=>{
    dispatch(fetchStart());
    console.log(params, query)
    try {
        const data = await fetchClient(query, params);
        !data.isNetworkError && dispatch(setBrowse(data))
        dispatch(fetchSuccess()); 
    } catch{
        dispatch(fetchError()); 
    }
}



