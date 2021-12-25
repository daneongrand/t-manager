import { HISTORY_POST_HIDE_LOADER, HISTORY_POST_LOADED, HISTORY_POST_SET_COUNT, HISTORY_POST_SHOW_LOADER } from "../utils/constTypes"
import { dateAdapter } from "../utils/dateAdapter"

const initialState = {
    count: null,
    isLoading: false,
    postList: []
}

export const historyPostReducer = (state = initialState, action) => {
    switch (action.type) {

        case HISTORY_POST_SET_COUNT: {
            const count = action.payload
            return {
                ...state,
                count
            }
        }

        case HISTORY_POST_SHOW_LOADER: {
            return {
                ...state,
                isLoading: true
            }
        }

        case HISTORY_POST_HIDE_LOADER: {
            return {
                ...state,
                isLoading: false
            }
        }

        case HISTORY_POST_LOADED: {
            console.log(action.payload)
            const postList = action.payload
            const newPostList = postList.map(item => ({ ...item, createdAt: dateAdapter(item.createdAt).getFullDate() }))
            return {
                ...state,
                postList: [
                    ...newPostList
                ]
            }
        }

        default: {
            return state
        }
    }
}