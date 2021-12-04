import {
    ADD_INTO_MINUSPHRASES, 
    ADD_WORD, 
    DELETE_KEYWORD, 
    DELETE_WORD, 
    MOVE_INTO_GROUP, 
    REORDER, 
    SELECT_GROUP, 
    SELECT_KEYWORD, 
    SELECT_KEYWORD_FOR_MOVE, 
    TOGGLE_MODAL_GROUPS, 
    TOGGLE_MODAL_MINUSPHRASES 
} from "../utils/constTypes"

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

export function toggleModalMinusPhrases() {
    return {
        type: TOGGLE_MODAL_MINUSPHRASES
    }
}

export function toggleModalGroups() {
    return {
        type: TOGGLE_MODAL_GROUPS
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

export function deleteKeyword(keywordId) {
    return {
        type: DELETE_KEYWORD,
        payload: {
            keywordId
        }
    }
}

export function selectGroup(group) {
    return {
        type: SELECT_GROUP,
        payload: {
            group
        }
    }
}

export function selectKeywordForMove (source) {
    return {
        type: SELECT_KEYWORD_FOR_MOVE,
        payload: {
            source
        } 
    }
}
