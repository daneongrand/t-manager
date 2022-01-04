import axios from "axios"
import { useHistory } from "react-router"
import AuthService from "../services/AuthService"
import FilesService from "../services/FilesService"
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
        } catch (error) {
            // console.log(error.response)

            dispatch({
                type: LOGIN_ERROR,
                payload: error.response.data.message
            })
            dispatch({
                type: USER_HIDE_LOADER
            })
        }

    }
}

export function signup(formData) {
    return async dispatch => {
        try {
            const authResponse = await AuthService.signup(formData)
            localStorage.setItem('accessToken', authResponse.data.accessToken)
            dispatch({
                type: SIGNUP,
                payload: {
                    ...authResponse.data,
                }
            })
            return Promise.resolve()
        } catch (err) {
            const data = err.response.data
            return Promise.reject(data)
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
        const { data } = await AuthService.refresh()
        localStorage.setItem('accessToken', data.accessToken)
        dispatch({
            type: LOGIN,
            payload: data
        })
    }
}