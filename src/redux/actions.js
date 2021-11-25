import {
    ADD_INTO_MINUSPHRASES,
    ADD_WORD,
    DELETE_WORD,
    MOVE_COLOR, 
    MOVE_INTO_GROUP, 
    REORDER, 
    SELECT_KEYWORD, 
    SELECT_WORD, 
    TOGGLE_MODAL 
} from "./types";


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

export function addWord(word) {
    return {
        type: ADD_WORD,
        payload: {
            word
        }
    }
}


export function deleteWord(word) {
    return {
        type: DELETE_WORD,
        payload: {
            word
        }
    }
}

export function addIntoMinusPhrases() {
    return {
        type: ADD_INTO_MINUSPHRASES
    }
}