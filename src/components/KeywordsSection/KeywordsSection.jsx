import React, { useState } from 'react';
import DndDraggableItem from '../UI/dnd/DndDraggableItem';
import DndDroppable from '../UI/dnd/DndDroppable';
import DndSection from '../UI/dnd/DndSection';
import styled, { keyframes } from 'styled-components';
import KeywordItem from './KeywordItem';
import { AddIcon } from '../UI/icons/Icons'
import Section from '../UI/section/Section';

const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Keyword = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 6px 18px;
`

const Article = styled(DndDroppable)`
    height: 90%;
    width: 100%;
    overflow: scroll;
    &::-webkit-scrollbar {
        width: 5px;
        height: 100%;
    }
    &::-webkit-scrollbar-thumb {
        background: rgba(24, 29, 49, 1);
        border-radius: 9em;
        box-shadow: inset 1px 1px 10px #f3faf7;
    }
`



const KeywordsSection = ({title, keywords}) => {

    return (
        <Section borderColor="linear-gradient(var(--rotate), #020050 0%, rgba(22, 82, 238, 0.823221) 26.62%, rgba(2, 87, 250, 0.702993) 46.57%, rgba(0, 126, 181, 0.849966) 73.52%, #00A0FA 100%)">
            <Header>
                {title}
                <AddIcon width="24" height="24" color="white" />
            </Header>

            <Article 
                droppableId="droppableId-keywords"
                type="KEYWORDS"
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
            </Article>
        </Section>
    );
};

export default KeywordsSection;