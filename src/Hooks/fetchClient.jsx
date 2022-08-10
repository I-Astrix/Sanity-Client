import sanityCli from "../Sanity/Sanity";

const fetchClient = async(query, params)=>{
    try{
        const response = await sanityCli.fetch(query, params);
        // console.log(response)
        return response
    }
    catch(err){
        return err
    }
}
export default fetchClient;