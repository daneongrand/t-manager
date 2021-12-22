import axios from "axios";
import AuthService from "../services/AuthService";



const $api = axios.create({
    withCredentials: true,
    baseURL: process.env.REACT_APP_API_URL
})

$api.interceptors.request.use(config => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('accessToken')}`
    return config
})

$api.interceptors.response.use(config => {
    console.log(config)
    return config
}, async (error) => {
    if (error.response.status === 401) {
        try {
            const originalRequest = error.request
            const response = await AuthService.refresh()
            console.log(response)
            localStorage.setItem('accessToken', response.data.accessToken)
            return $api.request(originalRequest)
        } catch(e) {
            console.log('401')
        }
    } else {
        return Promise.reject(error);
    }
})

export default $api