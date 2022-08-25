
import { initializeConnect } from 'react-redux/es/components/connect';
import { setPosts, setLastId, fetchStart, fetchError, fetchSuccess } from '../../app/features/search/searchSlice';


import fetchClient from "../../Hooks/fetchClient";


// Initially - lastId = "" that means we get the first document
// Upon clicking the category the fetch function takes "" as lastId giving us the first result;
// after fetching the initial data our action sets the last id to the last object's id within the array

// switching to another category clears the array and sets the last id to null





export const getCatPosts = async(dispatch, query, params, lastKnownId)=>{
    console.log(query)
    dispatch(fetchStart())
    try {
        const { isSuccess, results } = await fetchClient(query, {lastId: `${lastKnownId}`, filter: params});
        console.log(results)
        
        const genLastId = results.length > 0 ? results[results.length - 1]._id : ""
        console.log(results?.length?.title)
        isSuccess && dispatch(setLastId(genLastId));
        
        isSuccess && dispatch(setPosts(results));

        dispatch(fetchSuccess());  
    }catch(err){
        dispatch(fetchError());  
    }
}




