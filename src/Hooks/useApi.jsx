import React, { useEffect, useState } from 'react';
import sanityCli from '../Sanity/Sanity';

const useApi = (query) => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    // const [error, setError] = ({error: false, msg: ''});

    useEffect(()=>{

        const fetchData = async()=>{

            setLoading(true);
            try{
                const response = await sanityCli.fetch(query);
                setData(response);
            }
            catch(err){
                console.log('Error');
            }
            setLoading(false);         
        }
        
        fetchData();

    }, [query])

  return { data, loading }
}

export default useApi;