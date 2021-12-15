import React from 'react';
import styled from 'styled-components';
import { Draggable } from 'react-beautiful-dnd';
import { AddIcon, DeleteKeyword, Reply } from '../UI/icons/Icons';
import { useDispatch } from 'react-redux';
import { toggleModalGroups } from '../../actions/constructorActions';

const MinusPhrase = styled.li`
    background-color: ${props => props.theme.colors.dark_blue};
    color: white;
    font-size: 18px;
    border-radius: 10px;
    padding: 6px 18px;
    margin-bottom: 5px;
    box-sizing: border-box;
    list-style-type: none;
    display: grid;
    grid-template-columns: 1fr 24px 24px 24px;
    grid-column-gap: 3px;
    align-items: center;
`

const Text = styled.p`
    margin: 5px 0px;
    font-size: 18px;
    color: white;
`

const Button = styled.button`
    width: 24px;
    height: 24px;
    padding: 0;
    border: 0;
    background-color: transparent;
    cursor: pointer;
`


const MinusPhrasesItem = ({index, keywordId, createdAt, keyword, ams, competition, lowRange, highRange, deleteKeyword, selectKeyword, toggleModalMinusPhrases, selectKeywordForMove}) => {
    const dispatch = useDispatch()
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
                        <Button

                        >
                            <Reply width="100%" height="100%" color="white" />
                        </Button>
                        <Button
                            onClick={() => dispatch(toggleModalGroups({droppableId: 'minusPhrases', index: index}))}
                        >
                            <AddIcon width="100%" height="100%" fill="white" />
                        </Button>
                        <Button>
                            <DeleteKeyword width="100%" height="100%" color="white" />
                        </Button>
                    </MinusPhrase>
                )
            }
        </Draggable>
    );
};

export default MinusPhrasesItem;