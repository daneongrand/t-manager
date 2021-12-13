import { MINUS_PHRASES_HIDE_LOADER, MINUS_PHRASES_SHOW_LOADER } from "../utils/constTypes"

const initialState = {
    isLoading: false
}

export const minusPhrasesReducer = (state = initialState, action) => {
    switch(action.type) {

        case MINUS_PHRASES_SHOW_LOADER: {
            return {
                ...state, 
                isLoading: true
            }
        }

        case MINUS_PHRASES_HIDE_LOADER: {
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