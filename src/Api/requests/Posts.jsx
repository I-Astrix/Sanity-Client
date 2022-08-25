import fetchClient from "../../Hooks/fetchClient";
import {fetchStart, fetchSuccess, fetchError, setSingle, setLastId, setData} from "../../App/features/posts/postSlice";

export const fetchNextPage = async(dispatch, query, lastId)=>{    
  
  dispatch(fetchStart());
  if (lastId === null) {
    return [] 
  }
  try{
    const { isSuccess, results } = await fetchClient(query, {lastId})
    if(isSuccess){
      if(results.length > 0) {
          let calcLastId = results[results.length - 1]._id;
          dispatch(setLastId(calcLastId))
        } else {
          dispatch(setLastId(null))
        }
        dispatch(setData(results));
    }
    isSuccess && dispatch(fetchSuccess());
  }
  catch{
  dispatch(fetchError());
  }
}

export const getInitialData = async(dispatch, query)=>{
  dispatch(fetchStart());
  try{
      const { isSuccess, results } = await fetchClient(query);
      isSuccess && dispatch(fetchSuccess());
      isSuccess && dispatch(setData(results));
      const genLastId = await results[results.length - 1]._id;
      dispatch(setLastId(genLastId));
  }
  catch{
  dispatch(fetchError());
  }
}

  

export const getSingle = async(query, dispatch, id)=>{
    dispatch(fetchStart());
    try{
        const { isSuccess, results } = await fetchClient(query, {key: id});
        isSuccess && dispatch(setSingle(results));
    }
    catch{
    dispatch(fetchError());
    }
}
