import React, { useState } from 'react';
import DndDraggableItem from '../UI/dnd/DndDraggableItem';
import DndDroppable from '../UI/dnd/DndDroppable';
import DndSection from '../UI/dnd/DndSection';
import styled, { keyframes } from 'styled-components';
import styles from './KeywordsSection.module.css'
import KeywordItem from './KeywordItem';
import AddIcon from '../UI/icons/AddIcon';


const KeywordsSection = ({title, keywords}) => {

    const spin = keyframes`
        0% {
            --rotate: 0deg;
        }
        100% {
            --rotate: 360deg;
        }
    `


    const Section = styled.section`
        @property --rotate {
            syntax: "<angle>";
            initial-value: 0deg;
            inherits: false;
        }
        position: relative;
        margin: 30px;
        background: rgba(24, 29, 49, 1);
        padding: 15px;
        border-radius: 8px;
        &::before {
            content: '';
            top: -4px;
            left: -4px;
            position: absolute; 
            width: calc(100% + 8px);
            height: calc(100% + 8px);
            border-radius: 8px;
            z-index: -1;
            background: inherit;
            transition: .3s;
        }
        &::after {
            content: '';
            position: absolute;
            width: 100%;
            height: 100%;
            left: 0;
            right: 0;
            top: 10%;
            z-index: -1;
            transition: .3s;
        }
        &:hover::before {
            background: linear-gradient(var(--rotate), #020050 0%, rgba(22, 82, 238, 0.823221) 26.62%, rgba(2, 87, 250, 0.702993) 46.57%, rgba(0, 126, 181, 0.849966) 73.52%, #00A0FA 100%);
            animation: ${spin} 5s linear infinite;
        }
        &:hover::after {
            background: linear-gradient(var(--rotate), #020050 0%, rgba(22, 82, 238, 0.823221) 26.62%, rgba(2, 87, 250, 0.702993) 46.57%, rgba(0, 126, 181, 0.849966) 73.52%, #00A0FA 100%);
            filter: blur(100px);
            transform: scale(0.7);
            transition: opacity .10s;
            animation: ${spin} 5s linear infinite;
        }
    `
    
    const Keyword = styled.div`
        display: flex;
        justify-content: space-between;
        padding: 6px 18px;
    `


    const Header = styled.header`
        display: flex;
        justify-content: space-between;
        align-items: center;
    `


    return (
        <Section>

            <Header>
                {title}
                <AddIcon width="24" height="24" color="#fff" />
            </Header>

            <DndDroppable 
                droppableId="droppableId-keywords"
                type="KEYWORDS" 
                className={styles.keywords_section_article}
            >
                {
                    keywords.map((item, index) => (
                        <DndDraggableItem 
                            key={item.id}
                            draggableId={item.id} 
                            index={index}
                            className={styles.keywords_section_item}
                        >
                            <KeywordItem {...item} key={item.id} />
                        </DndDraggableItem>
                    ))
                }
            </DndDroppable>
        </Section>
    );
};

export default KeywordsSection;