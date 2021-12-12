import axios from "axios"
import { useHistory } from "react-router"
import AuthService from "../services/AuthService"
import { CAMPAIGN_ROUTE } from "../utils/constRoutes"
import {
    LOGIN,
    LOGIN_ERROR,
    LOGOUT,
    SIGNUP,
    SIGNUP_ERROR, 
    USER_HIDE_LOADER, 
    USER_SHOW_LOADER
} from "../utils/constTypes"

export function authorization(login, password) {
    return async dispatch => {
        try {
            dispatch({
                type: USER_SHOW_LOADER
            })
            const { data } = await AuthService.login(login, password)
            localStorage.setItem('accessToken', data.accessToken)
            dispatch({
                type: LOGIN,
                payload: data
            })
            dispatch({
                type: USER_HIDE_LOADER
            })
            return Promise.resolve()            
        } catch (e) {
            dispatch({
                type: LOGIN_ERROR,
                payload: e.response
            })
            dispatch({
                type: USER_HIDE_LOADER
            })
            return Promise.reject()
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
            return Promise.resolve()
        } catch (e) {
            dispatch({
                type: SIGNUP_ERROR,
                payload: e.response
            })
            return Promise.reject()
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