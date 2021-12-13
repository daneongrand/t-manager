import { KEYWORDS_HIDE_LOADER, KEYWORDS_SHOW_LOADER } from "../utils/constTypes"

const initialState = {
    isLoading: false
}

export const keywordsReducer = (state = initialState, action) => {
    switch (action.type) {

        case KEYWORDS_SHOW_LOADER: {
            return {
                ...state, 
                isLoading: true
            }
        }

        case KEYWORDS_HIDE_LOADER: {
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