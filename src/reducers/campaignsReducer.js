import {
    GET_ALL_CAMPAIGNS, 
    HIDE_LOADER, 
    SHOW_LOADER 
} from "../utils/constTypes"

const initialState = {
    isLoading: false,
    campaigns: []
}

export const campaignsReducer = (state = initialState, action) => {
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

        case GET_ALL_CAMPAIGNS: {
            console.log(action.payload)
            return {
                ...state,
                campaigns: [
                    ...action.payload
                ]
            }
        }

        default: {
            return state
        }
    }
}