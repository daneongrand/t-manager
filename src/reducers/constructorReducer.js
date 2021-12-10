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
    ADD_KEYWORDS
} from '../utils/constTypes'

const initialState = {
    keywords: [
    ],
    groups: [
        {
            groupId: v4(),
            groupName: 'Group 1',
            groupKeywords: [
                {
                    keywordId: v4(),
                    keyword: 'Купить кал оптом в рассрочку1',
                    ams: '1К-10К',
                    competition: 'Средняя',
                    lowRange: '42.12',
                    highRange: '285.78'
                }, 
                {
                    keywordId: v4(),
                    keyword: 'Купить кал оптом в рассрочку2',
                    ams: '1К-10К',
                    competition: 'Средняя',
                    lowRange: '42.12',
                    highRange: '285.78'
                },
                {
                    keywordId: v4(),
                    keyword: 'Купить кал оптом в рассрочку3',
                    ams: '1К-10К',
                    competition: 'Средняя',
                    lowRange: '42.12',
                    highRange: '285.78'
                },
                {
                    keywordId: v4(),
                    keyword: 'Купить кал оптом в рассрочку4',
                    ams: '1К-10К',
                    competition: 'Средняя',
                    lowRange: '42.12',
                    highRange: '285.78'
                },
                {
                    keywordId: v4(),
                    keyword: 'Купить кал оптом в рассрочку5',
                    ams: '1К-10К',
                    competition: 'Средняя',
                    lowRange: '42.12',
                    highRange: '285.78'
                }
            ]
        }, 
        {
            groupId: v4(),
            groupName: 'Group 2',
            groupKeywords: [
                {
                    keywordId: v4(),
                    keyword: 'Купить кал оптом в рассрочку1',
                    ams: '1К-10К',
                    competition: 'Средняя',
                    lowRange: '42.12',
                    highRange: '285.78'
                }, 
                {
                    keywordId: v4(),
                    keyword: 'Купить кал оптом в рассрочку2',
                    ams: '1К-10К',
                    competition: 'Средняя',
                    lowRange: '42.12',
                    highRange: '285.78'
                },
                {
                    keywordId: v4(),
                    keyword: 'Купить кал оптом в рассрочку3',
                    ams: '1К-10К',
                    competition: 'Средняя',
                    lowRange: '42.12',
                    highRange: '285.78'
                },
                {
                    keywordId: v4(),
                    keyword: 'Купить кал оптом в рассрочку4',
                    ams: '1К-10К',
                    competition: 'Средняя',
                    lowRange: '42.12',
                    highRange: '285.78'
                },
                {
                    keywordId: v4(),
                    keyword: 'Купить кал оптом в рассрочку5',
                    ams: '1К-10К',
                    competition: 'Средняя',
                    lowRange: '42.12',
                    highRange: '285.78'
                }
            ]
        }, 
        {
            groupId: v4(),
            groupName: 'Group 3',
            groupKeywords: [
                {
                    keywordId: v4(),
                    keyword: 'Купить кал оптом в рассрочку1',
                    ams: '1К-10К',
                    competition: 'Средняя',
                    lowRange: '42.12',
                    highRange: '285.78'
                }, 
                {
                    keywordId: v4(),
                    keyword: 'Купить кал оптом в рассрочку2',
                    ams: '1К-10К',
                    competition: 'Средняя',
                    lowRange: '42.12',
                    highRange: '285.78'
                },
                {
                    keywordId: v4(),
                    keyword: 'Купить кал оптом в рассрочку3',
                    ams: '1К-10К',
                    competition: 'Средняя',
                    lowRange: '42.12',
                    highRange: '285.78'
                },
                {
                    keywordId: v4(),
                    keyword: 'Купить кал оптом в рассрочку4',
                    ams: '1К-10К',
                    competition: 'Средняя',
                    lowRange: '42.12',
                    highRange: '285.78'
                },
                {
                    keywordId: v4(),
                    keyword: 'Купить кал оптом в рассрочку5',
                    ams: '1К-10К',
                    competition: 'Средняя',
                    lowRange: '42.12',
                    highRange: '285.78'
                }
            ]
        }, 
        {
            groupId: v4(),
            groupName: 'Group 4',
            groupKeywords: [
                {
                    keywordId: v4(),
                    keyword: 'Купить кал оптом в рассрочку1',
                    ams: '1К-10К',
                    competition: 'Средняя',
                    lowRange: '42.12',
                    highRange: '285.78'
                }, 
                {
                    keywordId: v4(),
                    keyword: 'Купить кал оптом в рассрочку2',
                    ams: '1К-10К',
                    competition: 'Средняя',
                    lowRange: '42.12',
                    highRange: '285.78'
                },
                {
                    keywordId: v4(),
                    keyword: 'Купить кал оптом в рассрочку3',
                    ams: '1К-10К',
                    competition: 'Средняя',
                    lowRange: '42.12',
                    highRange: '285.78'
                },
                {
                    keywordId: v4(),
                    keyword: 'Купить кал оптом в рассрочку4',
                    ams: '1К-10К',
                    competition: 'Средняя',
                    lowRange: '42.12',
                    highRange: '285.78'
                },
                {
                    keywordId: v4(),
                    keyword: 'Купить кал оптом в рассрочку5',
                    ams: '1К-10К',
                    competition: 'Средняя',
                    lowRange: '42.12',
                    highRange: '285.78'
                }
            ]
        }, 
        {
            groupId: v4(),
            groupName: 'Group 5',
            groupKeywords: [
                {
                    keywordId: v4(),
                    keyword: 'Купить кал оптом в рассрочку1',
                    ams: '1К-10К',
                    competition: 'Средняя',
                    lowRange: '42.12',
                    highRange: '285.78'
                }, 
                {
                    keywordId: v4(),
                    keyword: 'Купить кал оптом в рассрочку2',
                    ams: '1К-10К',
                    competition: 'Средняя',
                    lowRange: '42.12',
                    highRange: '285.78'
                },
                {
                    keywordId: v4(),
                    keyword: 'Купить кал оптом в рассрочку3',
                    ams: '1К-10К',
                    competition: 'Средняя',
                    lowRange: '42.12',
                    highRange: '285.78'
                },
                {
                    keywordId: v4(),
                    keyword: 'Купить кал оптом в рассрочку4',
                    ams: '1К-10К',
                    competition: 'Средняя',
                    lowRange: '42.12',
                    highRange: '285.78'
                },
                {
                    keywordId: v4(),
                    keyword: 'Купить кал оптом в рассрочку5',
                    ams: '1К-10К',
                    competition: 'Средняя',
                    lowRange: '42.12',
                    highRange: '285.78'
                }
            ]
        }, 
        {
            groupId: v4(),
            groupName: 'Group 6',
            groupKeywords: [
                {
                    keywordId: v4(),
                    keyword: 'Купить кал оптом в рассрочку1',
                    ams: '1К-10К',
                    competition: 'Средняя',
                    lowRange: '42.12',
                    highRange: '285.78'
                }, 
                {
                    keywordId: v4(),
                    keyword: 'Купить кал оптом в рассрочку2',
                    ams: '1К-10К',
                    competition: 'Средняя',
                    lowRange: '42.12',
                    highRange: '285.78'
                },
                {
                    keywordId: v4(),
                    keyword: 'Купить кал оптом в рассрочку3',
                    ams: '1К-10К',
                    competition: 'Средняя',
                    lowRange: '42.12',
                    highRange: '285.78'
                },
                {
                    keywordId: v4(),
                    keyword: 'Купить кал оптом в рассрочку4',
                    ams: '1К-10К',
                    competition: 'Средняя',
                    lowRange: '42.12',
                    highRange: '285.78'
                },
                {
                    keywordId: v4(),
                    keyword: 'Купить кал оптом в рассрочку5',
                    ams: '1К-10К',
                    competition: 'Средняя',
                    lowRange: '42.12',
                    highRange: '285.78'
                }
            ]
        }, 
        
        {
            groupId: v4(),
            groupName: 'Group 7',
            groupKeywords: [
                {
                    keywordId: v4(),
                    keyword: 'Купить кал оптом в рассрочку1'
                }, 
                {
                    keywordId: v4(),
                    keyword: 'Купить кал оптом в рассрочку2'
                },
                {
                    keywordId: v4(),
                    keyword: 'Купить кал оптом в рассрочку3'
                },
                {
                    keywordId: v4(),
                    keyword: 'Купить кал оптом в рассрочку4'
                },
                {
                    keywordId: v4(),
                    keyword: 'Купить кал оптом в рассрочку5'
                }
            ]
        }
    ],
    minusPhrases: [
        {
            keywordId: v4(),
            keyword: 'Почему все говорят о какашках1'
        },
        {
            keywordId: v4(),
            keyword: 'Почему все говорят о какашках2'
        },
        {
            keywordId: v4(),
            keyword: 'Почему все говорят о какашках1'
        },
        {
            keywordId: v4(),
            keyword: 'Почему все говорят о какашках2'
        },
        {
            keywordId: v4(),
            keyword: 'Почему все говорят о какашках1'
        },
        {
            keywordId: v4(),
            keyword: 'Почему все говорят о какашках2'
        },
        {
            keywordId: v4(),
            keyword: 'Почему все говорят о какашках1'
        },
        {
            keywordId: v4(),
            keyword: 'Почему все говорят о какашках2'
        },
        {
            keywordId: v4(),
            keyword: 'Почему все говорят о какашках1'
        },
        {
            keywordId: v4(),
            keyword: 'Почему все говорят о какашках2'
        },
        {
            keywordId: v4(),
            keyword: 'Почему все говорят о какашках1'
        },
        {
            keywordId: v4(),
            keyword: 'Почему все говорят о какашках2'
        },
        
        {
            keywordId: v4(),
            keyword: 'Почему все говорят о какашках3'
        },
        {
            keywordId: v4(),
            keyword: 'Почему все говорят о какашках4'
        },
        {
            keywordId: v4(),
            keyword: 'Почему все говорят о какашках5'
        },
    ],
    selectedKeyword: {
        isGroup: false,
        keyword: null,
        newList: null
    },
    selectedWords: [],
    deletedWords: [],
    modalMinusPhrasesIsOpen: false,
    modalGroupsIsOpen: false,
    modalAddKeywordsIsOpen: false,
    selectedGroup: {}
}

export const constructorReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_KEYWORDS: {
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

        case REORDER: {
            const { source, destination } = action.payload
            if ((source.droppableId === 'keywords') || (source.droppableId === 'groups') || (source.droppableId === 'minusPhrases') ) {
                const list = state[`${source.droppableId}`]
                    const [ removed ] = list.splice(source.index, 1)
                    list.splice(destination.index, 0, removed)
                    return {
                        ...state,
                        [`${source.droppableId}`]: [
                            ...list
                        ]
                    }
            } else {
                let groups = state.groups
                let indexGroup
                const group = groups.find((item, index) => {
                    if (item.groupId === source.droppableId) {
                        indexGroup = index
                    }
                    return item
                })
                groups.splice(indexGroup, 1)
                const list = group.groupKeywords
                const [ removed ] = list.splice(source.index, 1)
                group.groupKeywords = list
                list.splice(destination.index, 0, removed)
                groups.splice(indexGroup, 0, group)


                return {
                    ...state,
                    groups: [
                        ...groups
                    ]
                }
            }
        }

        case MOVE_INTO_GROUP: {
            const { source, destination } = action.payload
            const keywordList = JSON.parse(JSON.stringify(state.keywords))
            const groupsList = JSON.parse(JSON.stringify(state.groups))
            const [ removeKeyword ] = keywordList.splice(source.index, 1)
            let groupIndex
            const removeGroup = groupsList.find((item, index) => {
                if (item.groupId === destination.droppableId) {
                    groupIndex = index
                    return item
                }
            })
            removeGroup.groupKeywords.splice(destination.index, 0, removeKeyword)
            return {
                ...state, 
                keywords: [
                    ...keywordList
                ],
                groups: [
                    ...groupsList
                ]
            }

        }

        case SELECT_KEYWORD: {
            console.log(action.payload)
            const { droppableId, index } = action.payload.source
            if(droppableId === 'keywords') {
                const newKeywordList = JSON.parse(JSON.stringify(state.keywords))
                const selected = newKeywordList[index]
                const words = selected.keyword.split(' ')
                newKeywordList.splice(index, 1)
                console.log(state.keywords)
                return {
                    ...state,
                    selectedKeyword: {
                        isGroup: false,
                        keyword: selected,
                        newList: [
                            ...newKeywordList
                        ]
                    },
                    selectedWords: [
                        ...words
                    ]
                }
            } else {
                let indexGroup
                const newGroupsList = JSON.parse(JSON.stringify(state.groups))
                const selectedGroup = newGroupsList.find((item, index) => {
                    if(item.groupId === droppableId) {
                        indexGroup = index
                    }
                    return item
                })
                const selected = selectedGroup.groupKeywords[index]
                const words = selected.keyword.split(' ')
                const [ removeGroup ] = newGroupsList.splice(indexGroup, 1)
                removeGroup.groupKeywords.splice(index, 1)
                newGroupsList.splice(indexGroup, 0, removeGroup)
                return {
                    ...state,
                    selectedKeyword: {
                        isGroup: true,
                        keyword: selected,
                        newList: [
                            ...newGroupsList
                        ]
                    },
                    selectedWords: [
                        ...words
                    ]
                }
            }
        }

        case ADD_WORD: {
            return {
                ...state, 
                deletedWords: [
                    ...state.deletedWords,
                    action.payload.word
                ]
            }
        }

        case DELETE_WORD: {

            const deletedWord = state.deletedWords
            const newDeletedWords = deletedWord.filter(item => item !== action.payload.word)
 
            return {
                ...state, 
                deletedWords: [
                    ...newDeletedWords
                ]
            }
        }

        case ADD_INTO_MINUSPHRASES: {
            const deletedWords = state.deletedWords
            const selectedKeyword = state.selectedKeyword
            const newMinusPhrase = state.selectedKeyword.keyword
            const newMinusPhrases = deletedWords.map(item => {
                return {
                    keywordId: v4(),
                    keyword: item 
                }
            })


            if (selectedKeyword.isGroup) {
                return {
                    ...state,
                    groups: [
                        ...selectedKeyword.newList
                    ],
                    selectedKeyword: {
                        isGroup: false,
                        keyword: null,
                        newList: null
                    },
                    deletedWords: [],
                    minusPhrases: [
                        newMinusPhrase,
                        ...newMinusPhrases,
                        ...state.minusPhrases
                    ]
                }
            } else {
                return {
                    ...state,
                    keywords: [
                        ...selectedKeyword.newList
                    ],
                    selectedKeyword: {
                        isGroup: false,
                        keyword: null,
                        newList: null
                    },
                    deletedWords: [],
                    minusPhrases: [
                        newMinusPhrase,
                        ...newMinusPhrases,
                        ...state.minusPhrases
                    ]
                }
            }

  
        }
            
        case DELETE_KEYWORD: {
            const keywordId = action.payload.keywordId
            const newKeywordsList = state.keywords.filter(item => item.keywordId !== keywordId)
            return {
                ...state,
                keywords: newKeywordsList
            }
        }

        case TOGGLE_MODAL_ADD_KEYWORDS: {
            return {
                ...state,
                modalAddKeywordsIsOpen: !state.modalAddKeywordsIsOpen
            }
        }

        case TOGGLE_MODAL_MINUSPHRASES: {
            if (state.modalMinusPhrasesIsOpen) {
                return {
                    ...state,
                    selectedKeyword: {
                        isGroup: false,
                        keyword: null,
                        newList: null
                    },
                    selectedWords: [],
                    deletedWords: [],
                    modalMinusPhrasesIsOpen: !state.modalMinusPhrasesIsOpen
                }
            } else {
                return {
                    ...state,
                    modalMinusPhrasesIsOpen: !state.modalMinusPhrasesIsOpen
                }
            }
        }

        case TOGGLE_MODAL_GROUPS: {
            if (!state.modalGroupsIsOpen) {
                return {
                    ...state,
                    modalGroupsIsOpen: !state.modalGroupsIsOpen
                }
            } else {
                return {
                    ...state,
                    modalGroupsIsOpen: !state.modalGroupsIsOpen,
                    selectedKeyword: {
                        isGroup: false,
                        keyword: null,
                        newList: null 
                    },
                    selectedGroup: {}
                }
            }
        }


        case SELECT_KEYWORD_FOR_MOVE: {
            console.log(action.payload)
            return {
                ...state,
                selectedKeyword: {
                    isGroup: false,
                    newList: [],
                    keyword: {
                        droppableId: action.payload.source.droppableId,
                        index: action.payload.source.index
                    }
                }
            }
        }

        case SELECT_GROUP: {
            console.log(action.payload)
            console.log(state.selectedKeyword)
            return {
                ...state, 
                selectedGroup: {
                    index: action.payload.group.index,
                    droppableId: action.payload.group.droppableId,
                }
            }
        }


        default:
            return state
    }
}