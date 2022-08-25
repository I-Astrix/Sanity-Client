import { setPopular, setMustRead, setSuggested, fetchStart, fetchSuccess, isError, setBrowse } from '../../app/features/posts/otherPostsSlice';
import { fetchError } from '../../app/features/posts/postSlice';
import fetchClient from '../../Hooks/fetchClient';

export const getMustRead = async(dispatch, query, params)=>{
    dispatch(fetchStart())
    try{
        const { isSuccess, results} = await fetchClient(query);
        isSuccess && dispatch(setMustRead(results));
        dispatch(fetchSuccess());
    }
    catch{
        dispatch(fetchError())
    }
}

export const getPopular = async(dispatch, query, params)=>{
    dispatch(fetchStart())
    try{
        const { isSuccess, results} = await fetchClient(query);
        isSuccess && dispatch(setPopular(results));
        dispatch(fetchSuccess());
    }
    catch{
        dispatch(fetchError())
    }
}

export const getSuggested = async(dispatch, query, params)=>{
    dispatch(fetchStart())
    try{
        const { isSuccess, results} = await fetchClient(query);
        isSuccess && dispatch(setSuggested(results));
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
        const { isSuccess, results} = await fetchClient(query, params);
        isSuccess && dispatch(setBrowse(results))
        dispatch(fetchSuccess()); 
    } catch{
        dispatch(fetchError()); 
    }
}

