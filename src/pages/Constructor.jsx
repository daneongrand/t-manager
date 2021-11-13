import React, { useState } from 'react';
import styled from './styles/Constructor.module.css'
import KeywordsSection from '../components/KeywordsSection/KeywordsSection';
import { v4 } from 'uuid'
import GroupsSection from '../components/GroupsSection/GroupsSection';
import DndSection from '../components/UI/dnd/DndSection';
import MinusPhraseSection from '../components/MinusPhraseSection/MinusPhraseSection';
const Constructor = () => {
    const data_keywords = [
            {
                id: v4(),
                keyword: 'Крутые какашки'
            },
            {
                id: v4(),
                keyword: 'Классные какашки'
            },
            {
                id: v4(),
                keyword: 'Как покакать крутыми какашками'
            },
            {
                id: v4(),
                keyword: 'Невероятный успех какашек читать'
            },
            {
                id: v4(),
                keyword: 'Почему все говорят о какашках'
            },
            {
                id: v4(),
                keyword: 'Классные какашки'
            },
            {
                id: v4(),
                keyword: 'Как покакать крутыми какашками'
            },
            {
                id: v4(),
                keyword: 'Невероятный успех какашек читать'
            },
            {
                id: v4(),
                keyword: 'Почему все говорят о какашках'
            },
            {
                id: v4(),
                keyword: 'Классные какашки'
            },
            {
                id: v4(),
                keyword: 'Классные какашки'
            },
            {
                id: v4(),
                keyword: 'Как покакать крутыми какашками'
            },
            {
                id: v4(),
                keyword: 'Невероятный успех какашек читать'
            },
            {
                id: v4(),
                keyword: 'Почему все говорят о какашках'
            },
            {
                id: v4(),
                keyword: 'Как покакать крутыми какашками'
            },
            {
                id: v4(),
                keyword: 'Невероятный успех какашек читать'
            },
            {
                id: v4(),
                keyword: 'Почему все говорят о какашках'
            },
            {
                id: v4(),
                keyword: 'Немножечко говнеца'
            }
        ]
    
    const data_groups = [
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
    ]
    
    const data_minusPhrases = {
        id: v4(),
        data: [
            {
                id: v4(),
                keyword: 'Почему все говорят о какашках'
            },
            {
                id: v4(),
                keyword: 'Почему все говорят о какашках'
            },
            {
                id: v4(),
                keyword: 'Почему все говорят о какашках'
            },
            {
                id: v4(),
                keyword: 'Почему все говорят о какашках'
            },
            {
                id: v4(),
                keyword: 'Почему все говорят о какашках'
            },
            {
                id: v4(),
                keyword: 'Почему все говорят о какашках'
            },
            {
                id: v4(),
                keyword: 'Почему все говорят о какашках'
            },
            {
                id: v4(),
                keyword: 'Почему все говорят о какашках'
            },
            {
                id: v4(),
                keyword: 'Почему все говорят о какашках'
            },
            {
                id: v4(),
                keyword: 'Почему все говорят о какашках'
            },
            {
                id: v4(),
                keyword: 'Почему все говорят о какашках'
            },
            {
                id: v4(),
                keyword: 'Почему все говорят о какашках'
            },
            {
                id: v4(),
                keyword: 'Почему все говорят о какашках'
            },
            {
                id: v4(),
                keyword: 'Почему все говорят о какашках'
            },
            {
                id: v4(),
                keyword: 'Почему все говорят о какашках'
            },
            {
                id: v4(),
                keyword: 'Почему все говорят о какашках'
            },

            {
                id: v4(),
                keyword: 'Немножечко говнеца'
            }
        ]
    }


    const [groups, setGroups] = useState(data_groups)
    const [minusPhrases, setMinusPhrases] = useState(data_minusPhrases)


    // const getData = (droppableId) => {
    //     switch (droppableId.slice(0, droppableId.indexOf('$'))) {
    //         case 'keywords':
    //             return keywords.data
    //             break
    //         case 'groups': 
    //             return groups.groups
    //             break
    //         case 'groups-keywords':
    //             return groups.groups.filter(item => ("groups-keywords$" + item.keywords.id) === droppableId).reduce((acc, item) => acc = [...item.keywords.data],[])
    //             break
    //         case 'minusPhrases':
    //             return minusPhrases.data
    //             break 
    //     }
    // }

    // const setData = (droppableId, newData) => {
    //     switch (droppableId.slice(0, droppableId.indexOf('$'))) {
    //         case 'keywords':
    //             setKeywords({
    //                 ...keywords,
    //                 data: newData
    //             })
    //             break
    //         case 'groups': 
    //             setGroups({
    //                 ...groups,
    //                 groups: newData
    //             })
    //             break
    //         case 'groups-keywords':
    //             let newGroup = groups.groups.map(item => {
    //                 if (("groups-keywords$" + item.keywords.id) === droppableId) {
    //                     return {
    //                         ...item,
    //                         keywords: {
    //                             ...item.keywords,
    //                             data: newData
    //                         }
    //                     }
    //                 } else {
    //                     return item
    //                 }
    //             })
    //             setGroups({
    //                 ...groups,
    //                 groups: newGroup
    //             })
    //             break
    //         case 'minusPhrases':
    //             setMinusPhrases({
    //                 ...minusPhrases,
    //                 data: newData
    //             })
    //             break 
    //     }
    // }

    // const reorder = (list, indexStart, indexEnd) => {
    //     let listItems = Array.from(list)
    //     const [ removed ] = listItems.splice(indexStart, 1)
    //     listItems.splice(indexEnd, 0, removed)
    //     return listItems
    // }

    // const move = (source, destination, droppableSource, droppableDestination) => {
    //     const sourceClone = Array.from(source)
    //     const destinationClone = Array.from(destination)

    //     const [ removed ] = sourceClone.splice(droppableSource.index, 1)

    //     destinationClone.splice(droppableDestination.index, 0, removed)

    //     const result = {}

    //     result[droppableSource.droppableId] = sourceClone
    //     result[droppableDestination.droppableId] = destinationClone

    //     return result

    // }


    // const handleOnDragEnd = (res) => {
    //     const { source, destination } = res
    //     if (!destination) return
    //     console.log(source, destination)

        
    //     if (source.droppableId === destination.droppableId) {

    //         switch (destination.droppableId.slice(0, destination.droppableId.indexOf('$'))) {
    //             case 'keywords':
    //                 let newData = reorder(getData(destination.droppableId), source.index, destination.index)
    //                 console.log(newData)
    //                 setData(destination.droppableId, newData)
    //                 break
    //             case 'groups':
    //                 let newGroups = reorder(getData(destination.droppableId), source.index, destination.index)
    //                 console.log(newGroups)
    //                 setData(destination.droppableId, newGroups)
    //                 break
    //             case 'groups-keywords':
    //                 let newGroupsKeywords = reorder(getData(destination.droppableId), source.index, destination.index)
    //                 setData(destination.droppableId, newGroupsKeywords)
    //                 break
    //             case 'minusPhrases':
    //                 let newMinusPhrases = reorder(getData(destination.droppableId), source.index, destination.index)
    //                 setData(destination.droppableId, newMinusPhrases)
    //                 break
    //         }

    //     } else {
    //         const items = move(getData(source.droppableId), getData(destination.droppableId), source, destination)
            
    //         setData(source.droppableId, items[source.droppableId])
    //         setData(destination.droppableId, items[destination.droppableId])
            
    //         console.log(items)
    //     }



    // }

    return (
        <DndSection 
            // onDragEnd={handleOnDragEnd}
            className={styled.constructor}
        >
            <KeywordsSection title="Ключевые слова" keywords={data_keywords} prefixDroppableId="keywords$" />
            {/* <GroupsSection title="Группы" groups={data_groups} /> */}
            {/* <MinusPhraseSection title="Минус-фразы" {...minusPhrases} prefixDroppableId="minusPhrases$" /> */}
        </DndSection>
    );
}

export default Constructor;