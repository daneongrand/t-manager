import { MOVE_COLOR, MOVE_INTO_GROUP, REORDER } from "./types";

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