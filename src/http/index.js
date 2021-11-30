require('dotenv').config()
import axios from "axios";

console.log(API_URL)

const $api = axios.create({
    withCredentials: true,
    baseURL: API_URL
})

$api.interceptors.request.use(config => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('accessToken')}`
    return config
})


export default $api