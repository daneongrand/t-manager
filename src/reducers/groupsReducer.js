import { HIDE_LOADER, SHOW_LOADER } from "../utils/constTypes"

const initialState = {
    isLoading: true
}

export const groupsReducer = (state = initialState, action) => {
    switch (action.type) {

        case SHOW_LOADER: {
            return {
                ...state, 
                isLoading: true
            }
        }

        case HIDE_LOADER: {
            return {
                ...state, 
                isLoading: false
            }
        }

        default: {
            return state
        }
    }
}