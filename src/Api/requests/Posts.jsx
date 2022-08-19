import postSlice from "../../app/features/posts/postSlice";
import fetchClient from "../../Hooks/fetchClient";
import {fetchStart, fetchSuccess, fetchError, setSingle} from "../../App/features/posts/postSlice";


export const fetchNextPage = async(dispatch, query, lastId)=>{    
  if (lastId === null) {
    return []
  }
  const result = await fetchClient(query, {lastId})
  if(!isError){
    if(result.length > 0) {
        lastId = result[result.length - 1]._id
      } else {
        lastId = null // Reached the end
      }
      return result
  }
}


export const getData = async(query, dispatch, params)=>{
    dispatch(fetchStart());
    try{
        const data = await fetchClient(query(), params);
        !data.isNetworkError && dispatch(fetchSuccess(data));
    }
    catch{
    dispatch(fetchError());
    }
}


export const getSingle = async(query, dispatch, id)=>{
    dispatch(fetchStart());
    try{
        const data = await fetchClient(query, {key: id});
        !data.isNetworkError && dispatch(setSingle(data));
    }
    catch{
    dispatch(fetchError());
    }
}
