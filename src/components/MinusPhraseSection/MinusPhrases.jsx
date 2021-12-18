import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import styled from 'styled-components';
import MinusPhrasesItem from './MinusPhrasesItem';
import FlatList from 'flatlist-react'

const StyledMinusPhrases = styled.ul`
    overflow: scroll;
    padding: 0;
    margin: 0;
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

const MinusPhrases = ({ minusPhrases }) => {
    return (
        <Droppable
                droppableId="minusPhrases"
                type="KEYWORDS"
            >
                {
                    (provided, snapshot) => (
                        <StyledMinusPhrases
                            ref={provided.innerRef}
                            {...provided.droppableProps}
                        >
                            <FlatList 
                                renderOnScroll
                                list={minusPhrases}
                                renderItem={(item, index) => (<MinusPhrasesItem key={'keywordId' + item.keywordId} index={index} {...item} />)}
                            />
                            
                        </StyledMinusPhrases>
                    )
                }
            </Droppable>
    );
};

export default MinusPhrases;