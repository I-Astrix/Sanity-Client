import React from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { search } from '../api/requests/search';
import { query_search } from '../Sanity/Queries';
import { useDispatch, useSelector } from "react-redux";

// Use for Categories and Searched Posts
const Multiple = () => {

  const params = useParams();
  const dispatch = useDispatch();

  useEffect(()=>{
    params?.query && search(dispatch, query_search, {"query": params?.query});
  }, [params])

  return (
    <>
    <p>
      Page for displaying Categories and Searched Posts 
    </p>
    <span>Search Query: {params?.query}</span>
    </>
  )
}

export default Multiple