import {v4} from 'uuid'
import { MOVE, REORDER } from './types'

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
                    keyword: 'Купить кал оптом в рассрочку'
                }, 
                {
                    keywordId: v4(),
                    keyword: 'Купить кал оптом в рассрочку'
                },
                {
                    keywordId: v4(),
                    keyword: 'Купить кал оптом в рассрочку'
                },
                {
                    keywordId: v4(),
                    keyword: 'Купить кал оптом в рассрочку'
                },
                {
                    keywordId: v4(),
                    keyword: 'Купить кал оптом в рассрочку'
                }
            ]
        }, 
        {
            groupId: v4(),
            groupName: 'Group 2',
            groupKeywords: [
                {
                    keywordId: v4(),
                    keyword: 'Купить кал оптом в рассрочку'
                }, 
                {
                    keywordId: v4(),
                    keyword: 'Купить кал оптом в рассрочку'
                },
                {
                    keywordId: v4(),
                    keyword: 'Купить кал оптом в рассрочку'
                },
                {
                    keywordId: v4(),
                    keyword: 'Купить кал оптом в рассрочку'
                },
                {
                    keywordId: v4(),
                    keyword: 'Купить кал оптом в рассрочку'
                }
            ]
        }
    ],
    minusPhrases: [
        {
            keywordId: v4(),
            keyword: 'Почему все говорят о какашках'
        },
        {
            keywordId: v4(),
            keyword: 'Почему все говорят о какашках'
        },
        {
            keywordId: v4(),
            keyword: 'Почему все говорят о какашках'
        },
        {
            keywordId: v4(),
            keyword: 'Почему все говорят о какашках'
        },
        {
            keywordId: v4(),
            keyword: 'Почему все говорят о какашках'
        },
    ]
}

export const constructorReducer = (state = initialState, action) => {
    switch (action.type) {
        case REORDER:
            break
        case MOVE:
            break
        default:
            return state
    }
}