import React, { useState } from 'react';
import styled from './styles/Constructor.module.css'
import KeywordsSection from '../components/KeywordsSection/KeywordsSection';
import { v4 } from 'uuid'
import GroupsSection from '../components/GroupsSection/GroupsSection';
import DndSection from '../components/UI/dnd/DndSection';
import MinusPhraseSection from '../components/MinusPhraseSection/MinusPhraseSection';

const Constructor = () => {
    
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

    

    return (
        <DndSection 
            className={styled.constructor}
        >
            <KeywordsSection title="Ключевые слова" {...keywords} />
            <GroupsSection title="Группы" {...groups} />
            <MinusPhraseSection title="Минус-фразы" {...minusPhrases} />
        </DndSection>
    );
};

export default Constructor;