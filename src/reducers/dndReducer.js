import { MOVE_COLOR } from "../utils/constTypes"

const initialState = {
    color: null
}

export const dndReducer = (state = initialState, action) => {
    switch(action.type) {
        case MOVE_COLOR: {
            console.log(action.payload.destination)
            if (!action.payload.destination) {
                return {
                    color: null
                }
            } else {
                switch(action.payload.destination.droppableId) {
                    case 'keywords': {
                        console.log('keywords')
                        return {
                            color: "#00EEFD"
                        }
                    }
                    case 'minusPhrases': {
                        console.log('minusPhrases')
                        return {
                            color: "#EB0000"
                        }
                    }
                    default: {
                        console.log('Groups')
                        return {
                            color: "#05EB00"
                        }
                    }
                }
            }
        }
        default:
            return state
    }
}