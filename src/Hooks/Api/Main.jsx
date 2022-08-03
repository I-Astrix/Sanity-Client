import axios from "axios";

const BASE_URL = 'http://localhost:3001'

const fetchData = axios.create({
    baseURL: BASE_URL
})

export default fetchData;