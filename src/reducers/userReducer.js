import {
    LOGIN,
    LOGIN_ERROR,
    LOGOUT,
    SIGNUP,
    SIGNUP_ERROR, 
    USER_HIDE_LOADER, 
    USER_SHOW_LOADER
} from "../utils/constTypes"

const initialState = {
    isAuth: true,
    isLoading: false,
    loginError: '',
    signupError: ''
}

export const userReducer = (state = initialState, action) => {
    switch(action.type) {
        
        case USER_SHOW_LOADER: {
            return {
                ...state,
                isLoading: true
            }
        }

        case USER_HIDE_LOADER: {
            return {
                ...state,
                isLoading: false
            }
        }

        case LOGIN: {
            console.log(action.payload)
            return {
                ...state,
                loginError: '',
                isAuth: true
            }
        }

        case LOGIN_ERROR: {
            console.log(action.payload)
            return {
                ...state,
                loginError: action.payload.data.message
            }
        }

        case SIGNUP: {
            console.log(action.payload)
            return {
                ...state,
                signupError: '',
                isAuth: true
            }
        }

        case SIGNUP_ERROR: {
            console.log(action.payload)
            return {
                ...state,
                signupError: action.payload.data.message
            }
        }

        case LOGOUT: {
            return {
                ...state,
                isAuth: false
            }
        }

        default: {
            return state
        }
    }

}