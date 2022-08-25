import sanityCli from "../Sanity/Sanity";

const fetchClient = async(query, params)=>{
    console.log({query: query, params: params})
    try{
        const response = await sanityCli.fetch(query, params);
        return {isSuccess: true, results:response};
    }
    catch(err){
        console.log(err)
        return {isError: true, err: err};
    }
}
export default fetchClient;