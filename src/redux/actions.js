import { MOVE_COLOR, MOVE_INTO_GROUP, REORDER, SELECT_KEYWORD, TOGGLE_MODAL } from "./types";

export function reorder(source, destination) {
    return {
        type: REORDER,
        payload: {
            source, 
            destination
        }
    }
}


export function moveIntoGroup(source, destination) {
    return {
        type: MOVE_INTO_GROUP,
        payload: {
            source,
            destination
        }
    }
}

export function switchColor(destination) {
    return {
        type: MOVE_COLOR,
        payload: {
            destination
        }
    }
}

export function toggleModal() {
    return {
        type: TOGGLE_MODAL
    }
}

export function selectKeyword(source) {
    return {
        type: SELECT_KEYWORD,
        payload: {
            source
        }
    }
}