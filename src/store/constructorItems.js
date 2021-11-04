import { makeAutoObservable } from "mobx";
import { v4 } from 'uuid' 

const keywords = {
    id: v4(),
    data: [
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
            keyword: 'Немножечко говнеца'
        }
    ]
}

const groups = {
    id: v4(),
    groups: [
        {
            name: 'Group 1',
            id: v4(),
            keywords: {
                id: v4(),
                data: [
                    {
                        id: v4(),
                        keyword: 'Крутые какашки'
                    },
                    {
                        id: v4(),
                        keyword: 'Классные какашки'
                    }
                ]
            }
        }, 
        {
            name: 'Group 2',
            id: v4(),
            keywords: {
                id: v4(),
                data: [
                    {
                        id: v4(),
                        keyword: 'Веселая какашка танцует тик-ток смотреть'
                    },
                    {
                        id: v4(),
                        keyword: 'Я пукнул во время секса что делать'
                    }
                ]
            }
        }
    ]
}

const minusPhrases = {
    id: v4(),
    data: [
        {
            id: v4(),
            minusPhrase: 'Почему все говорят о какашках'
        },
        {
            id: v4(),
            minusPhrase: 'Немножечко говнеца'
        }
    ]
}


class constructorItems {

    items = [keywords, groups, minusPhrases]


    constructor() {
        makeAutoObservable(this)
    }
    
    

    handleOnDragEnd(res) {
        const { source, destination } = res
        console.log(source, destination)
        console.log(source.droppableId)
        if (source.droppableId === destination.droppableId) {
            this.fiindList()
            
        }


    }
    
    get fiindList() {
        console.log('hello')
        // console.log(droppableId)
        // let list = this.items.filter(item => item.id === droppableId)

        // if(!list.length) {
        //     list = this.items.filter(item => {
        //         if (item.groups?.keywords.id === droppableId) return item.groups.keywords
        //     })
        // }

        // return list 
    }
    move(list, indexStart, indexEnd) {

    }

}


export default new constructorItems()