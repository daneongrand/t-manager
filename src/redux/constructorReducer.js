import {v4} from 'uuid'
import { ADD_INTO_MINUSPHRASES, ADD_WORD, DELETE_WORD, MOVE, MOVE_INTO_GROUP, REORDER, SELECT_KEYWORD, SELECT_WORD } from './types'

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
    selectedWord: {
        keyword: '',
        isGroups: false
    },
    selectedWords: [],
    deletedWord: []
}

export const constructorReducer = (state = initialState, action) => {
    switch (action.type) {
        case REORDER: {
            const { source, destination } = action.payload
            // console.log(source, destination)
            if ((source.droppableId === 'keywords') || (source.droppableId === 'groups') || (source.droppableId === 'minusPhrases') ) {
                // console.log(source.droppableId)
                const list = state[`${source.droppableId}`]
                    const [ removed ] = list.splice(source.index, 1)
                    list.splice(destination.index, 0, removed)
                    // console.log(list)
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
                // console.log(group)
                const list = group.groupKeywords
                const [ removed ] = list.splice(source.index, 1)
                group.groupKeywords = list
                list.splice(destination.index, 0, removed)
                groups.splice(indexGroup, 0, group)

                // console.log(groups)

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
            // console.log(source, destination)

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
            if (action.payload.source.droppableId === 'keywords') {
                const index = action.payload.source.index
                const keyword = state.keywords[index]
                const words = keyword.keyword.split(' ')
                console.log(words)
                return {
                    ...state,
                    selectedWord: {
                        isGroups: false,
                        keyword: keyword
                    },
                    selectedWords: words
                }
            } else {             
                const groupId = action.payload.source.droppableId
                const index = action.payload.source.index
                const group = state.groups.find(item => item.groupId === groupId)
                const keyword = group.groupKeywords[index]
                const words = keyword.keyword.split(' ')
                return {
                    ...state,
                    selectedWord: {
                        isGroups: true,
                        group: group,
                        keyword: keyword
                    },
                    selectedWords: words
                }
            }
        }

        case ADD_WORD: {
            console.log(state)
            return {
                ...state, 
                deletedWord: [
                    ...state.deletedWord,
                    action.payload.word
                ]
            }
        }

        case DELETE_WORD: {

            const deletedWord = state.deletedWord
            const newDeletedWord = deletedWord.filter(item => item !== action.payload.word)
 
            return {
                ...state, 
                deletedWord: [
                    ...newDeletedWord
                ]
            }
        }

        case ADD_INTO_MINUSPHRASES: {
            const deletedWord = state.deletedWord
            const selectedWord = state.selectedWord.keyword
            const minusPhrases = deletedWord.map(item => {
                return {
                    keywordId: v4(),
                    keyword: item 
                }
            })
            

            if (state.selectedWord.isGroups) {
                console.log('true')
                console.log(state.selectedWord)
                
            } else {
                console.log('false')
            }

            console.log(selectedWord)


            return {
                ...state,
                deletedWord: [],
                minusPhrases: [
                    selectedWord,
                    ...minusPhrases,
                    ...state.minusPhrases
                ]
            }
            
        }
            
        default:
            return state
    }
}