import fetchClient from "../../Hooks/fetchClient";
import { setSearched } from '../../app/features/posts/postSlice';

export const search = async(dispatch, query, params)=>{
    const data = await fetchClient(query, params);
    console.log( data && data);    
    dispatch(setSearched(data));
    // try {
    // } catch (error) {
    //     console.log(error);
    // }
}