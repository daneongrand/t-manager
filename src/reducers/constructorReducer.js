import {v4} from 'uuid'
import {
    ADD_INTO_MINUSPHRASES,
    ADD_WORD,
    DELETE_KEYWORD,
    DELETE_WORD,
    MOVE_INTO_GROUP,
    REORDER,
    SELECT_KEYWORD,
    TOGGLE_MODAL_GROUPS,
    TOGGLE_MODAL_MINUSPHRASES,
    SELECT_GROUP,
    SELECT_KEYWORD_FOR_MOVE,
    TOGGLE_MODAL_ADD_KEYWORDS,
    ADD_KEYWORDS,
    GROUPS_LOADED,
    TOGGLE_MODAL_ADD_GROUPS,
    ADD_GROUP,
    RENAME_GROUP,
    DELETE_GROUP,
    KEYWORDS_LOADED,
    MINUS_PHRASES_LOADED,
    CLEAR_KEYWORDS,
    CLEAR_GROUPS,
    CLEAR_MINUS_PHRASES,
    MOVE_ITEM
} from '../utils/constTypes'

const initialState = {
    keywords: [
        {
            "keywordId": 4,
            "keyword": "keyword 1",
            "ams": null,
            "competition": null,
            "lowRange": null,
            "highRange": null,
            "currency": null,
            "isMinusPhrase": false,
            "createdAt": "2021-12-14T15:00:00.879Z",
            "updatedAt": "2021-12-14T15:00:00.879Z",
            "campaignId": 1,
            "groupId": null
        },
        {
            "keywordId": 5,
            "keyword": "keyword 2",
            "ams": null,
            "competition": null,
            "lowRange": null,
            "highRange": null,
            "currency": null,
            "isMinusPhrase": false,
            "createdAt": "2021-12-14T15:00:03.981Z",
            "updatedAt": "2021-12-14T15:00:03.981Z",
            "campaignId": 1,
            "groupId": null
        },
        {
            "keywordId": 6,
            "keyword": "keyword 3",
            "ams": null,
            "competition": null,
            "lowRange": null,
            "highRange": null,
            "currency": null,
            "isMinusPhrase": false,
            "createdAt": "2021-12-14T15:00:06.488Z",
            "updatedAt": "2021-12-14T15:00:06.488Z",
            "campaignId": 1,
            "groupId": null
        },
        {
            "keywordId": 7,
            "keyword": "keyword 4",
            "ams": null,
            "competition": null,
            "lowRange": null,
            "highRange": null,
            "currency": null,
            "isMinusPhrase": false,
            "createdAt": "2021-12-14T15:00:09.049Z",
            "updatedAt": "2021-12-14T15:00:09.049Z",
            "campaignId": 1,
            "groupId": null
        },
        {
            "keywordId": 8,
            "keyword": "keyword 5",
            "ams": null,
            "competition": null,
            "lowRange": null,
            "highRange": null,
            "currency": null,
            "isMinusPhrase": false,
            "createdAt": "2021-12-14T15:00:11.892Z",
            "updatedAt": "2021-12-14T15:00:11.892Z",
            "campaignId": 1,
            "groupId": null
        }
    ],
    groups: [
        {
            "groupId": 1,
            "groupName": "group 1",
            "campaignId": 1,
            "groupKeywords": [
                {
                    "keywordId": 9,
                    "keyword": "keyword 6",
                    "ams": null,
                    "competition": null,
                    "lowRange": null,
                    "highRange": null,
                    "currency": null,
                    "isMinusPhrase": false,
                    "createdAt": "2021-12-14T15:00:18.602Z",
                    "updatedAt": "2021-12-14T15:00:18.602Z",
                    "campaignId": 1,
                    "groupId": 1
                },
                {
                    "keywordId": 10,
                    "keyword": "keyword 7",
                    "ams": null,
                    "competition": null,
                    "lowRange": null,
                    "highRange": null,
                    "currency": null,
                    "isMinusPhrase": false,
                    "createdAt": "2021-12-14T15:00:21.674Z",
                    "updatedAt": "2021-12-14T15:00:21.674Z",
                    "campaignId": 1,
                    "groupId": 1
                },
                {
                    "keywordId": 11,
                    "keyword": "keyword 8",
                    "ams": null,
                    "competition": null,
                    "lowRange": null,
                    "highRange": null,
                    "currency": null,
                    "isMinusPhrase": false,
                    "createdAt": "2021-12-14T15:00:24.416Z",
                    "updatedAt": "2021-12-14T15:00:24.416Z",
                    "campaignId": 1,
                    "groupId": 1
                }
            ]
        },
        {
            "groupId": 2,
            "groupName": "group 2",
            "campaignId": 1,
            "groupKeywords": [
                {
                    "keywordId": 12,
                    "keyword": "keyword 9",
                    "ams": null,
                    "competition": null,
                    "lowRange": null,
                    "highRange": null,
                    "currency": null,
                    "isMinusPhrase": false,
                    "createdAt": "2021-12-14T15:00:29.080Z",
                    "updatedAt": "2021-12-14T15:00:29.080Z",
                    "campaignId": 1,
                    "groupId": 2
                },
                {
                    "keywordId": 13,
                    "keyword": "keyword 10",
                    "ams": null,
                    "competition": null,
                    "lowRange": null,
                    "highRange": null,
                    "currency": null,
                    "isMinusPhrase": false,
                    "createdAt": "2021-12-14T15:00:32.123Z",
                    "updatedAt": "2021-12-14T15:00:32.123Z",
                    "campaignId": 1,
                    "groupId": 2
                },
                {
                    "keywordId": 14,
                    "keyword": "keyword 11",
                    "ams": null,
                    "competition": null,
                    "lowRange": null,
                    "highRange": null,
                    "currency": null,
                    "isMinusPhrase": false,
                    "createdAt": "2021-12-14T15:00:35.009Z",
                    "updatedAt": "2021-12-14T15:00:35.009Z",
                    "campaignId": 1,
                    "groupId": 2
                }
            ]
        },
        {
            "groupId": 3,
            "groupName": "group 3",
            "campaignId": 1,
            "groupKeywords": []
        }
    ],
    minusPhrases: [
        {
            "keywordId": 1,
            "keyword": "minusPhrase 1",
            "ams": null,
            "competition": null,
            "lowRange": null,
            "highRange": null,
            "currency": null,
            "isMinusPhrase": true,
            "createdAt": "2021-12-14T14:52:00.080Z",
            "updatedAt": "2021-12-14T14:52:00.080Z",
            "campaignId": 1,
            "groupId": null
        },
        {
            "keywordId": 2,
            "keyword": "minusPhrase 2",
            "ams": null,
            "competition": null,
            "lowRange": null,
            "highRange": null,
            "currency": null,
            "isMinusPhrase": true,
            "createdAt": "2021-12-14T14:52:04.371Z",
            "updatedAt": "2021-12-14T14:52:04.371Z",
            "campaignId": 1,
            "groupId": null
        },
        {
            "keywordId": 3,
            "keyword": "minusPhrase 3",
            "ams": null,
            "competition": null,
            "lowRange": null,
            "highRange": null,
            "currency": null,
            "isMinusPhrase": true,
            "createdAt": "2021-12-14T14:52:07.636Z",
            "updatedAt": "2021-12-14T14:52:07.636Z",
            "campaignId": 1,
            "groupId": null
        }
    ],
    modalMoveIntoGroupIsOpen: false,
    modalMoveIntoMinusPhraseIsOpen: false,
    modalDeleteGroupIsOpen: false,
    modalDeleteKeywordIsOpen: false
    // selectedKeyword: {
    //     isGroup: false,
    //     keyword: null,
    //     newList: null
    // },
    // selectedWords: [],
    // deletedWords: [],
    // modalMinusPhrasesIsOpen: false,
    // modalGroupsIsOpen: false,
    // modalAddKeywordsIsOpen: false,
    // modalAddGroupsIsOpen: false,
    // selectedGroup: {}
}

export const constructorReducer = (state = initialState, action) => {
    switch (action.type) {

        case KEYWORDS_LOADED: {
            const keywords = action.payload
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

            if (source.droppableId.includes('group-')) {
                const sourceGroupId = source.droppableId.split('-')[1]
                const [ sourceGroup ] = state.groups.filter(item => String(item.groupId) === String(sourceGroupId))
                sourceList = sourceGroup.groupKeywords
            } else {
                sourceList = state[source.droppableId]
            }

            if (destination.droppableId.includes('group-')) {
                const destinationGroupId = destination.droppableId.split('-')[1]
                const [ destinationGroup ] = state.groups.filter(item => String(item.groupId) === String(destinationGroupId))
                destinationList = destinationGroup.groupKeywords
            } else {
                destinationList = state[destination.droppableId]
            }

            const [ removed ] = sourceList.splice(source.index, 1)
            destinationList.splice(destination.index, 0, removed)

            return state
        }


        // case DELETE_GROUP: {
        //     console.log(action.payload)
        //     const { groupId } = action.payload
        //     const groups = JSON.parse(JSON.stringify(state.groups))
        //     const newGroups = groups.filter(item => item.groupId !== +groupId)
        //     console.log(newGroups)
        //     return {
        //         ...state,
        //         groups: [
        //             ...newGroups
        //         ]
        //     }
        // }

        // case ADD_GROUP: {
        //     const group = action.payload
        //     return {
        //         ...state,
        //         groups: [
        //             group,
        //             ...state.groups
        //         ]
        //     }
        // }

        // case RENAME_GROUP: {
        //     const newGroup = action.payload
        //     const newGroupsList = state.groups.filter(item => item.groupId !== newGroup.id)
        //     // const newGroups 
        //     return {
        //         ...state,
        //         groups: [
        //             newGroup,
        //             ...newGroupsList
        //         ]
        //     }
        // }

        // case TOGGLE_MODAL_ADD_GROUPS: {
        //     return {
        //         ...state,
        //         modalAddGroupsIsOpen: !state.modalAddGroupsIsOpen
        //     }
        // }

        // case GROUPS_LOADED: {
        //     const groups = action.payload
        //     return {
        //         ...state,
        //         groups: [
        //             ...groups
        //         ]
        //     }
        // }

        // case ADD_KEYWORDS: {
        //     const keywords = action.payload
        //     console.log(keywords)
        //     return {
        //         ...state,
        //         keywords: [
        //             ...keywords,
        //             ...state.keywords
        //         ]
        //     }
        // }

        // case REORDER: {
        //     const { source, destination } = action.payload
        //     if ((source.droppableId === 'keywords') || (source.droppableId === 'groups') || (source.droppableId === 'minusPhrases') ) {
        //         const list = state[`${source.droppableId}`]
        //             const [ removed ] = list.splice(source.index, 1)
        //             list.splice(destination.index, 0, removed)
        //             return {
        //                 ...state,
        //                 [`${source.droppableId}`]: [
        //                     ...list
        //                 ]
        //             }
        //     } else {
        //         let groups = state.groups
        //         let indexGroup
        //         const group = groups.find((item, index) => {
        //             if (item.groupId === source.droppableId) {
        //                 indexGroup = index
        //             }
        //             return item
        //         })
        //         groups.splice(indexGroup, 1)
        //         const list = group.groupKeywords
        //         const [ removed ] = list.splice(source.index, 1)
        //         group.groupKeywords = list
        //         list.splice(destination.index, 0, removed)
        //         groups.splice(indexGroup, 0, group)


        //         return {
        //             ...state,
        //             groups: [
        //                 ...groups
        //             ]
        //         }
        //     }
        // }

        // case MOVE_INTO_GROUP: {
        //     const { source, destination } = action.payload
        //     const keywordList = JSON.parse(JSON.stringify(state.keywords))
        //     const groupsList = JSON.parse(JSON.stringify(state.groups))
        //     const [ removeKeyword ] = keywordList.splice(source.index, 1)
        //     let groupIndex
        //     const removeGroup = groupsList.find((item, index) => {
        //         if (item.groupId === destination.droppableId) {
        //             groupIndex = index
        //             return item
        //         }
        //     })
        //     removeGroup.groupKeywords.splice(destination.index, 0, removeKeyword)
        //     return {
        //         ...state, 
        //         keywords: [
        //             ...keywordList
        //         ],
        //         groups: [
        //             ...groupsList
        //         ]
        //     }

        // }

        // case SELECT_KEYWORD: {
        //     console.log(action.payload)
        //     const { droppableId, index } = action.payload.source
        //     if(droppableId === 'keywords') {
        //         const newKeywordList = JSON.parse(JSON.stringify(state.keywords))
        //         const selected = newKeywordList[index]
        //         const words = selected.keyword.split(' ')
        //         newKeywordList.splice(index, 1)
        //         console.log(state.keywords)
        //         return {
        //             ...state,
        //             selectedKeyword: {
        //                 isGroup: false,
        //                 keyword: selected,
        //                 newList: [
        //                     ...newKeywordList
        //                 ]
        //             },
        //             selectedWords: [
        //                 ...words
        //             ]
        //         }
        //     } else {
        //         let indexGroup
        //         const newGroupsList = JSON.parse(JSON.stringify(state.groups))
        //         const selectedGroup = newGroupsList.find((item, index) => {
        //             if(item.groupId === droppableId) {
        //                 indexGroup = index
        //             }
        //             return item
        //         })
        //         const selected = selectedGroup.groupKeywords[index]
        //         const words = selected.keyword.split(' ')
        //         const [ removeGroup ] = newGroupsList.splice(indexGroup, 1)
        //         removeGroup.groupKeywords.splice(index, 1)
        //         newGroupsList.splice(indexGroup, 0, removeGroup)
        //         return {
        //             ...state,
        //             selectedKeyword: {
        //                 isGroup: true,
        //                 keyword: selected,
        //                 newList: [
        //                     ...newGroupsList
        //                 ]
        //             },
        //             selectedWords: [
        //                 ...words
        //             ]
        //         }
        //     }
        // }

        // case ADD_WORD: {
        //     return {
        //         ...state, 
        //         deletedWords: [
        //             ...state.deletedWords,
        //             action.payload.word
        //         ]
        //     }
        // }

        // case DELETE_WORD: {

        //     const deletedWord = state.deletedWords
        //     const newDeletedWords = deletedWord.filter(item => item !== action.payload.word)
 
        //     return {
        //         ...state, 
        //         deletedWords: [
        //             ...newDeletedWords
        //         ]
        //     }
        // }

        // case ADD_INTO_MINUSPHRASES: {
        //     const deletedWords = state.deletedWords
        //     const selectedKeyword = state.selectedKeyword
        //     const newMinusPhrase = state.selectedKeyword.keyword
        //     const newMinusPhrases = deletedWords.map(item => {
        //         return {
        //             keywordId: v4(),
        //             keyword: item 
        //         }
        //     })


        //     if (selectedKeyword.isGroup) {
        //         return {
        //             ...state,
        //             groups: [
        //                 ...selectedKeyword.newList
        //             ],
        //             selectedKeyword: {
        //                 isGroup: false,
        //                 keyword: null,
        //                 newList: null
        //             },
        //             deletedWords: [],
        //             minusPhrases: [
        //                 newMinusPhrase,
        //                 ...newMinusPhrases,
        //                 ...state.minusPhrases
        //             ]
        //         }
        //     } else {
        //         return {
        //             ...state,
        //             keywords: [
        //                 ...selectedKeyword.newList
        //             ],
        //             selectedKeyword: {
        //                 isGroup: false,
        //                 keyword: null,
        //                 newList: null
        //             },
        //             deletedWords: [],
        //             minusPhrases: [
        //                 newMinusPhrase,
        //                 ...newMinusPhrases,
        //                 ...state.minusPhrases
        //             ]
        //         }
        //     }

  
        // }
            
        // case DELETE_KEYWORD: {
        //     const keywordId = action.payload.keywordId
        //     const newKeywordsList = state.keywords.filter(item => item.keywordId !== keywordId)
        //     return {
        //         ...state,
        //         keywords: newKeywordsList
        //     }
        // }

        // case TOGGLE_MODAL_ADD_KEYWORDS: {
        //     return {
        //         ...state,
        //         modalAddKeywordsIsOpen: !state.modalAddKeywordsIsOpen
        //     }
        // }

        // case TOGGLE_MODAL_MINUSPHRASES: {
        //     if (state.modalMinusPhrasesIsOpen) {
        //         return {
        //             ...state,
        //             selectedKeyword: {
        //                 isGroup: false,
        //                 keyword: null,
        //                 newList: null
        //             },
        //             selectedWords: [],
        //             deletedWords: [],
        //             modalMinusPhrasesIsOpen: !state.modalMinusPhrasesIsOpen
        //         }
        //     } else {
        //         return {
        //             ...state,
        //             modalMinusPhrasesIsOpen: !state.modalMinusPhrasesIsOpen
        //         }
        //     }
        // }

        // case TOGGLE_MODAL_GROUPS: {
        //     if (!state.modalGroupsIsOpen) {
        //         return {
        //             ...state,
        //             modalGroupsIsOpen: !state.modalGroupsIsOpen
        //         }
        //     } else {
        //         return {
        //             ...state,
        //             modalGroupsIsOpen: !state.modalGroupsIsOpen,
        //             selectedKeyword: {
        //                 isGroup: false,
        //                 keyword: null,
        //                 newList: null 
        //             },
        //             selectedGroup: {}
        //         }
        //     }
        // }


        // case SELECT_KEYWORD_FOR_MOVE: {
        //     console.log(action.payload)
        //     return {
        //         ...state,
        //         selectedKeyword: {
        //             isGroup: false,
        //             newList: [],
        //             keyword: {
        //                 droppableId: action.payload.source.droppableId,
        //                 index: action.payload.source.index
        //             }
        //         }
        //     }
        // }

        // case SELECT_GROUP: {
        //     console.log(action.payload)
        //     console.log(state.selectedKeyword)
        //     return {
        //         ...state, 
        //         selectedGroup: {
        //             index: action.payload.group.index,
        //             droppableId: action.payload.group.droppableId,
        //         }
        //     }
        // }


        default:
            return state
    }
}