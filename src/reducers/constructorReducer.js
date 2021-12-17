import {v4} from 'uuid'
import {
    DELETE_KEYWORD,
    REORDER,
    SELECT_KEYWORD,
    SELECT_GROUP,
    TOGGLE_MODAL_ADD_KEYWORDS,
    GROUPS_LOADED,
    TOGGLE_MODAL_ADD_GROUPS,
    KEYWORDS_LOADED,
    MINUS_PHRASES_LOADED,
    CLEAR_KEYWORDS,
    CLEAR_GROUPS,
    CLEAR_MINUS_PHRASES,
    MOVE_ITEM,
    TOGGLE_MODAL_INTO_MINUSPHRASES,
    TOGGLE_MODAL_INTO_GROUPS,
    TOGGLE_MODAL_DELETE_GROUP,
    DELETING_GROUP
} from '../utils/constTypes'

const initialState = {
    keywords: [],
    groups: [],
    minusPhrases: [],
    selectedKeyword: [],
    selectedGroup: [],
    modalMoveIntoGroupIsOpen: false,
    modalMoveIntoMinusPhraseIsOpen: false,
    modalDeleteGroupIsOpen: false,
    modalDeleteKeywordIsOpen: false,
    modalAddKeywordsIsOpen: false,
    modalAddGroupsIsOpen: false,
    modalPayload: {},
}

export const constructorReducer = (state = initialState, action) => {
    switch (action.type) {

        case KEYWORDS_LOADED: {
            const keywords = action.payload
            console.log(keywords)
            return {
                ...state,
                keywords: [
                    ...keywords,
                    ...state.keywords
                ]
            }
        }

        case GROUPS_LOADED: {
            const groups = action.payload
            console.log("GROUPS", groups)
            return {
                ...state,
                groups: [
                    ...groups,
                    ...state.groups
                ]
            }
        }

        case MINUS_PHRASES_LOADED: {
            const minusPhrases = action.payload
            return {
                ...state,
                minusPhrases: [
                    ...minusPhrases,
                    ...state.minusPhrases
                ]
            }
        }

        case CLEAR_KEYWORDS: {
            return {
                ...state,
                keywords: []
            }
        }

        case CLEAR_GROUPS: {
            return {
                ...state,
                groups: []
            }
        }

        case CLEAR_MINUS_PHRASES: {
            return {
                ...state,
                minusPhrases: []
            }
        }

        case REORDER: {
            const { source, destination } = action.payload
            
            if (source.droppableId.includes('group-')) {
                const groupId = source.droppableId.split('-')[1]
                console.log(typeof groupId)
                const [ group ] = state.groups.filter(item => String(item.groupId) === String(groupId))
                const { groupKeywords } = group
                const [ removed ] = groupKeywords.splice(source.index, 1)
                groupKeywords.splice(destination.index, 0, removed)
            } else {
                const list = state[source.droppableId]
                const [ removed ] = list.splice(source.index, 1)
                list.splice(destination.index, 0, removed)
            }
            return state
        }

        case MOVE_ITEM: {
            const { source, destination } = action.payload
            let sourceList = []
            let destinationList = []
            console.log(source, destination)

            if (source.droppableId.includes('group-') && destination.droppableId.includes('group-')) {
                const groupList = [ ...state.groups ]
                const sourceGroupId = source.droppableId.split('-')[1]
                const [ sourceGroup ] = groupList.filter(item => String(item.groupId) === String(sourceGroupId))
                sourceList = sourceGroup.groupKeywords
                const destinationGroupId = destination.droppableId.split('-')[1]
                const [ destinationGroup ] = groupList.filter(item => String(item.groupId) === String(destinationGroupId))
                destinationList = destinationGroup.groupKeywords
                const [ removed ] = sourceList.splice(source.index, 1)
                destinationList.splice(destination.index, 0, removed)
                return {
                    ...state,
                    groups: [...groupList]
                }
            } else if (source.droppableId.includes('group-') && !destination.droppableId.includes('group-')) {
                const groupList = [ ...state.groups ]
                const itemList = [ ...state[destination.droppableId] ]
                const sourceGroupId = source.droppableId.split('-')[1]
                const [ sourceGroup ] = groupList.filter(item => String(item.groupId) === String(sourceGroupId))
                sourceList = sourceGroup.groupKeywords
                const [ removed ] = sourceList.splice(source.index, 1)
                itemList.splice(destination.index, 0, removed)
                return {
                    ...state,
                    [destination.droppableId] : [...itemList],
                    groups: [ ...groupList ]
                }
            } else if (!source.droppableId.includes('group-') && destination.droppableId.includes('group-')) {
                const itemList = [ ...state[source.droppableId] ]
                const groupList = [ ...state.groups ]
                const destinationGroupId = destination.droppableId.split('-')[1]
                const [ destinationGroup ] = groupList.filter(item => String(item.groupId) === String(destinationGroupId))
                destinationList = destinationGroup.groupKeywords
                const [ removed ] = itemList.splice(source.index, 1)
                destinationList.splice(destination.index, 0, removed)
                return {
                    ...state,
                    groups: [ ...groupList ],
                    [source.droppableId] : [...itemList]
                }
            } else {
                const sourceList = [ ...state[source.droppableId] ]
                const destinationList = [ ...state[destination.droppableId] ]
                const [ removed ] = sourceList.splice(source.index, 1)
                destinationList.splice(destination.index, 0, removed)
                return {
                    ...state,
                    [source.droppableId] : [ ...sourceList ],
                    [destination.droppableId] : [ ...destinationList ]
                }
            }

        }

        case TOGGLE_MODAL_INTO_MINUSPHRASES: {
            
            return {
                ...state,
                modalPayload: action.payload,
                modalMoveIntoMinusPhraseIsOpen: !state.modalMoveIntoMinusPhraseIsOpen
            }
        }

        case TOGGLE_MODAL_INTO_GROUPS: {
            if (state.modalMoveIntoGroupIsOpen) {
                return {
                    ...state,
                    selectedKeyword: {},
                    modalMoveIntoGroupIsOpen: false
                }
            } else {
                const keyword = action.payload
                return {
                    ...state,
                    selectedKeyword: keyword,
                    modalMoveIntoGroupIsOpen: true
                }
            }
        }

        case TOGGLE_MODAL_ADD_GROUPS: {
            return {
                ...state,
                modalAddGroupsIsOpen: !state.modalAddGroupsIsOpen
            }
        }

        case TOGGLE_MODAL_DELETE_GROUP: {
            return {
                ...state,
                modalDeleteGroupIsOpen: !state.modalDeleteGroupIsOpen
            }
        }

        case SELECT_KEYWORD: {
            console.log(action.payload)
            const { source } = action.payload
            if (source.droppableId.includes('group-')) {
                const sourceGroupId = source.droppableId.split('-')[1]
                const groups = JSON.parse(JSON.stringify(state.groups))
                const [ sourceGroup ] = groups.filter(item => String(item.groupId) === String(sourceGroupId))
                const sourceList = sourceGroup.groupKeywords
                const keyword = sourceList[source.index]
                return {
                    ...state,
                    selectedKeyword: keyword
                }
            } else {
                const keywordList = JSON.parse(JSON.stringify(state[source.droppableId]))
                const keyword = keywordList[source.index]
                return {
                    ...state,
                    selectedKeyword: keyword
                }
            }
        }

        case SELECT_GROUP: {
            const { destination } = action.payload
            const destinationGroupId = destination.droppableId.split('-')[1]
            const groups = JSON.parse(JSON.stringify(state.groups))
            const [ sourceGroup ] = groups.filter(item => String(item.groupId) === String(destinationGroupId))
            return {
                ...state,
                selectedGroup: sourceGroup
            }
        }

        case TOGGLE_MODAL_ADD_KEYWORDS: {
            return {
                ...state,
                modalAddKeywordsIsOpen: !state.modalAddKeywordsIsOpen
            }
        }

        case DELETE_KEYWORD: {
            const { droppableId, index } = action.payload
            console.log(action.payload)
            if (droppableId.includes('group-')) {
                const list = [ ...state.groups ]
                const groupId = droppableId.split('-')[1]
                const [ group ] = list.filter(item => String(item.groupId) === String(groupId))
                const { groupKeywords } = group
                groupKeywords.splice(index, 1)
                return {
                    ...state,
                    groups: [ ...list ]
                }
            } else {
                const list = [ ...state[droppableId] ]
                list.splice(index, 1)
                return {
                    ...state,
                    [droppableId]: [ ...list ]
                }
            }
        }


        case DELETING_GROUP: {
            console.log(action.payload)
            const { groupId } = action.payload
            const groupList = [ ...state.groups ]
            const newGroupList = groupList.filter(item => item.groupId !== groupId)
            return {
                ...state,
                groups: [ ...newGroupList ]
            }
        }


        default:
            return state
    }
}