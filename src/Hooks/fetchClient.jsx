import sanityCli from "../Sanity/Sanity";

const fetchClient = async(query, params)=>{
    try{
        const response = await sanityCli.fetch(query, params);
        return response;
    }
    catch(err){
        // console.log({isError: true, err: err})
        return {isError: true, err: err};
    }
}
export default fetchClient;