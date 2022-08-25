import fetchClient from "../../Hooks/fetchClient";
import { setCats } from "../../app/features/cats/catSlice";

export const getCats = async(dispatch, query)=>{
        const { isSuccess, results } = await fetchClient(query);
        isSuccess && dispatch(setCats(results))    
}