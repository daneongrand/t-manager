import React from 'react';
import styled from 'styled-components';
import { Draggable } from 'react-beautiful-dnd';

const MinusPhrase = styled.li`
    background-color: ${props => props.theme.colors.dark_blue};
    color: white;
    font-size: 18px;
    border-radius: 10px;
    padding: 6px 18px;
    margin-bottom: 5px;
    box-sizing: border-box;
    list-style-type: none;
`

const Text = styled.p`
    margin: 5px 0px;
    font-size: 18px;
    color: white;
`


const MinusPhrasesItem = ({index, keywordId, keyword, ams, competition, lowRange, highRange, deleteKeyword, selectKeyword, toggleModalMinusPhrases, toggleModalGroups, selectKeywordForMove}) => {
    return (
        <Draggable
            draggableId={'keywordId' + keywordId}
            index={index}
        >
            {
                (provided, snapshot) => (
                    <MinusPhrase
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                    >
                        <Text>
                            {keyword}
                        </Text>
                    </MinusPhrase>
                )
            }
        </Draggable>
    );
};

export default MinusPhrasesItem;