import catSlice from "../../app/features/cats/catSlice";
import fetchClient from "../../Hooks/fetchClient";


export const getCats = async(query)=>{
    const data = await fetchClient(query);
    !data.isNetworkError && localStorage.setItem('cats', JSON.stringify(data)); 
}