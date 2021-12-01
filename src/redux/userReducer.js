import { LOGIN, SIGNUP, SIGNUP_ERROR } from "./types"

const initialState = {
    isAuth: false
}

export const userReducer = (state = initialState, action) => {
    switch(action.type) {
        
        case LOGIN: {
            console.log(action.payload)
            return state
        }

        case SIGNUP: {
            console.log(action.payload)
            return state
        }

        case SIGNUP_ERROR: {
            console.log(action.payload)
            return state
        }

        default: {
            return state
        }
    }

}