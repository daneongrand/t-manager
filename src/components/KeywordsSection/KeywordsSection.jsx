import React, { useState } from 'react';
import DndDraggableItem from '../UI/dnd/DndDraggableItem';
import DndDroppable from '../UI/dnd/DndDroppable';
import DndSection from '../UI/dnd/DndSection';
import styled, { keyframes } from 'styled-components';
import styles from './KeywordsSection.module.css'
import KeywordItem from './KeywordItem';
import { AddIcon } from '../UI/icons/Icons'
import Section from '../UI/section/Section';


const KeywordsSection = ({title, keywords}) => {
    
    console.log(keywords)


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
        <Section borderColor="linear-gradient(var(--rotate), #020050 0%, rgba(22, 82, 238, 0.823221) 26.62%, rgba(2, 87, 250, 0.702993) 46.57%, rgba(0, 126, 181, 0.849966) 73.52%, #00A0FA 100%)">
            <Header>
                {title}
                <AddIcon width="24" height="24" color="white" />
            </Header>

            <DndDroppable 
                droppableId="droppableId-keywords"
                type="KEYWORDS" 
                className={styles.keywords_section_article}
            >
                {
                    keywords.map((item, index) => (
                        <DndDraggableItem
                            draggableId={item.keywordId}
                            index={index}
                        >
                            <KeywordItem {...item} />
                        </DndDraggableItem>
                    ))
                }
            </DndDroppable>
        </Section>
    );
};

export default KeywordsSection;