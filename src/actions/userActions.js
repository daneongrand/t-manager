import axios from "axios"
import AuthService from "../services/AuthService"
import {
    LOGIN,
    LOGIN_ERROR,
    LOGOUT,
    SIGNUP,
    SIGNUP_ERROR 
} from "../utils/constTypes"

export function login(login, password) {
    return async dispatch => {
        try {
            const { data } = await AuthService.login(login, password)
            localStorage.setItem('accessToken', data.accessToken)
            dispatch({
                type: LOGIN,
                payload: data
            })
            
        } catch (e) {
            dispatch({
                type: LOGIN_ERROR,
                payload: e.response
            })
        }
    }
}

export function signup(firstName, lastName, nickName, email, password) {
    return async dispatch => {
        try {
            const { data } = await AuthService.signup(firstName, lastName, nickName, email, password)
            localStorage.setItem('accessToken', data.accessToken)
            dispatch({
                type: SIGNUP,
                payload: data
            })
        } catch (e) {
            dispatch({
                type: SIGNUP_ERROR,
                payload: e.response
            })
        }
    }
}

export function logout() {
    return async dispatch => {
        const response = await AuthService.logout()
        localStorage.removeItem('accessToken')
        dispatch({
            type: LOGOUT
        })
    }
}

export function checkAuth() {
    return async dispatch => {
        const { data } = await axios.get(`${process.env.REACT_APP_API_URL}/user/refresh`, {withCredentials: true})
        localStorage.setItem('accessToken', data.accessToken)
        dispatch({
            type: LOGIN,
            payload: data
        })
    }
}