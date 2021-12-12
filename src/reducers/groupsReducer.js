import { GROUPS_HIDE_LOADER, GROUPS_MODAL_HIDE_LOADER, GROUPS_MODAL_SHOW_LOADER, GROUPS_SHOW_LOADER, } from "../utils/constTypes"

const initialState = {
    isLoading: false,
    modalIsLoading: false,
    isRenaming: [],
    isDeleting: []
}

export const groupsReducer = (state = initialState, action) => {
    switch (action.type) {



        case GROUPS_SHOW_LOADER: {
            return {
                ...state, 
                isLoading: true
            }
        }

        case GROUPS_HIDE_LOADER: {
            return {
                ...state, 
                isLoading: false
            }
        }

        case GROUPS_MODAL_SHOW_LOADER: {
            return {
                ...state,
                modalIsLoading: true
            }
        }

        case GROUPS_MODAL_HIDE_LOADER: {
            return {
                ...state,
                modalIsLoading: false
            }
        }

        default: {
            return state
        }
    }
}