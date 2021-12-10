import { HIDE_LOADER, SHOW_LOADER, UPLOAD_FILES_ERROR } from "../utils/constTypes"

const initialState = {
    isLoading: false,
    errorMessage: ''
}

export const filesReducer = (state = initialState, action) => {
    switch (action.type) {

        case SHOW_LOADER: {
            return {
                ...state,
                errorMessage: '',
                isLoading: true
            }
        }

        case HIDE_LOADER: {
            return {
                ...state,
                isLoading: false
            }
        }

        case UPLOAD_FILES_ERROR: {
            console.log(action.payload)
            return {
                ...state,
                errorMessage: action.payload
            }
        }


        default: {
            return state
        }
    }
}