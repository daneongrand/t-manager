import {v4} from 'uuid'
import { ADD_INTO_MINUSPHRASES, ADD_WORD, DELETE_KEYWORD, DELETE_WORD, MOVE, MOVE_INTO_GROUP, REORDER, SELECT_KEYWORD, SELECT_WORD, TOGGLE_MODAL, TOGGLE_MODAL_GROUPS, TOGGLE_MODAL_MINUSPHRASES } from './types'

const initialState = {
    keywords: [
        {
            keywordId: v4(),
            keyword: 'Крутые какашки',
            ams: '1К-10К',
            competition: 'Средняя',
            lowRange: '42.12',
            highRange: '285.78'
        },
        {
            keywordId: v4(),
            keyword: 'Классные какашки',
            ams: '1К-10К',
            competition: 'Средняя',
            lowRange: '42.12',
            highRange: '285.78'
        },
        {
            keywordId: v4(),
            keyword: 'Как покакать крутыми какашками клева крута четка покекал смотреть',
            ams: '1К-10К',
            competition: 'Средняя',
            lowRange: '42.12',
            highRange: '285.78'
        },
        {
            keywordId: v4(),
            keyword: 'Невероятный успех какашек читать',
            ams: '1К-10К',
            competition: 'Средняя',
            lowRange: '42.12',
            highRange: '285.78'
        },
        {
            keywordId: v4(),
            keyword: 'Почему все говорят о какашках',
            ams: '1К-10К',
            competition: 'Средняя',
            lowRange: '42.12',
            highRange: '285.78'
        },
        {
            keywordId: v4(),
            keyword: 'Классные какашки',
            ams: '1К-10К',
            competition: 'Средняя',
            lowRange: '42.12',
            highRange: '285.78'
        },
        {
            keywordId: v4(),
            keyword: 'Как покакать крутыми какашками',
            ams: '1К-10К',
            competition: 'Средняя',
            lowRange: '42.12',
            highRange: '285.78'
        },
        {
            keywordId: v4(),
            keyword: 'Невероятный успех какашек читать',
            ams: '1К-10К',
            competition: 'Средняя',
            lowRange: '42.12',
            highRange: '285.78'
        },
        {
            keywordId: v4(),
            keyword: 'Почему все говорят о какашках',
            ams: '1К-10К',
            competition: 'Средняя',
            lowRange: '42.12',
            highRange: '285.78'
        },
        {
            keywordId: v4(),
            keyword: 'Классные какашки',
            ams: '1К-10К',
            competition: 'Средняя',
            lowRange: '42.12',
            highRange: '285.78'
        },
        {
            keywordId: v4(),
            keyword: 'Классные какашки',
            ams: '1К-10К',
            competition: 'Средняя',
            lowRange: '42.12',
            highRange: '285.78'
        },
        {
            keywordId: v4(),
            keyword: 'Как покакать крутыми какашками',
            ams: '1К-10К',
            competition: 'Средняя',
            lowRange: '42.12',
            highRange: '285.78'
        },
        {
            keywordId: v4(),
            keyword: 'Невероятный успех какашек читать',
            ams: '1К-10К',
            competition: 'Средняя',
            lowRange: '42.12',
            highRange: '285.78'
        },
        {
            keywordId: v4(),
            keyword: 'Почему все говорят о какашках',
            ams: '1К-10К',
            competition: 'Средняя',
            lowRange: '42.12',
            highRange: '285.78'
        },
        {
            keywordId: v4(),
            keyword: 'Как покакать крутыми какашками',
            ams: '1К-10К',
            competition: 'Средняя',
            lowRange: '42.12',
            highRange: '285.78'
        },
        {
            keywordId: v4(),
            keyword: 'Невероятный успех какашек читать',
            ams: '1К-10К',
            competition: 'Средняя',
            lowRange: '42.12',
            highRange: '285.78'
        },
        {
            keywordId: v4(),
            keyword: 'Почему все говорят о какашках',
            ams: '1К-10К',
            competition: 'Средняя',
            lowRange: '42.12',
            highRange: '285.78'
        },
        {
            keywordId: v4(),
            keyword: 'Немножечко говнеца',
            ams: '1К-10К',
            competition: 'Средняя',
            lowRange: '42.12',
            highRange: '285.78'
        }
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
    modalGroupsIsOpen: false
}

export const constructorReducer = (state = initialState, action) => {
    switch (action.type) {
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
                        return item
                    }
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

            const sourceList = state.keywords

            let groups = state.groups
            let indexGroup
            const group = groups.find((item, index) => {
                if (item.groupId === destination.droppableId) {
                    indexGroup = index
                    return item
                }
            })
            groups.splice(indexGroup, 1)
            const destinationList = group.groupKeywords
            const [ removed ] = sourceList.splice(source.index, 1)
            group.groupKeywords = destinationList
            destinationList.splice(destination.index, 0, removed)
            groups.splice(indexGroup, 0, group)

            return {
                ...state,
                keywords: [
                    ...sourceList
                ],
                groups: [
                    ...groups
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
                        return item
                    }
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
            return {
                ...state,
                modalGroupsIsOpen: !state.modalGroupsIsOpen
            }
        }

        default:
            return state
    }
}