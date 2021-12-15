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
    TOGGLE_MODAL_ADD_KEYWORDS, 
    TOGGLE_MODAL_INTO_GROUPS, 
    TOGGLE_MODAL_INTO_MINUSPHRASES,
    TOGGLE_MODAL_ADD_GROUPS,
    MOVE_ITEM
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

export function moveItem(source, destination) {
    return {
        type: MOVE_ITEM,
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

export function toggleModalAddGroups() {
    return {
        type: TOGGLE_MODAL_ADD_GROUPS
    }
}

export function toggleModalMinusPhrases(source, destination) {
    return {
        type: TOGGLE_MODAL_INTO_MINUSPHRASES,
        payload: {
            source,
            destination
        }
    }
}

export function toggleModalGroups(keyword) {
    return {
        type: TOGGLE_MODAL_INTO_GROUPS,
        payload: {
            keyword
        }
    }
}

export function toggleModalAddKeywords() {
    return {
        type: TOGGLE_MODAL_ADD_KEYWORDS,
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
