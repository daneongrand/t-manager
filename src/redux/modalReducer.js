import { TOGGLE_MODAL } from "./types"

const initialState = {
    isOpen: false
}

export const modalReducer = (state = initialState, action) => {
    switch(action.type) {
        case TOGGLE_MODAL: {
            console.log(state)
            return {
                isOpen: !state.isOpen
            }
        }
        default: {
            return state
        }
    }
}