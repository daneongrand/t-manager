import React from 'react';
import styled from 'styled-components';
import { Draggable } from 'react-beautiful-dnd';
import { AddIcon, DeleteKeyword, Reply } from '../UI/icons/Icons';
import { useDispatch } from 'react-redux';
import { moveItem, toggleModalGroups } from '../../actions/constructorActions';
import { useState } from 'react';
import { deleteKeyword, editKeyword } from '../../actions/keywordsActions';
import { deletedKeyword } from '../../actions/constructorActions';

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
    border: ${props => props.isDeleting ? `2px solid ${props.theme.colors.danger}` : 'none'};
`

const Text = styled.p`
    margin: 5px 0px;
    font-size: 18px;
    color: ${props => props.isDeleting ? props.theme.colors.danger : 'white'};
`

const Button = styled.button`
    cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
    width: 24px;
    height: 24px;
    padding: 0;
    border: 0;
    background-color: transparent;
    cursor: pointer;
`


const MinusPhrasesItem = ({index, keywordId, keyword}) => {
    const dispatch = useDispatch()
    const [ isDeleting, setIsDeleting ] = useState(false)
    const onDeleteKeyword = (keywordId, index) => {
        setIsDeleting(true)
        dispatch(deleteKeyword(keywordId))
            .then(() => dispatch(deletedKeyword('minusPhrases', index)))
    }

    return (
        <Draggable
            draggableId={'keywordId' + keywordId}
            index={index}
        >
            {
                (provided, snapshot) => (
                    <MinusPhrase
                        isDeleting={isDeleting}
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                    >
                        <Text isDeleting={isDeleting}>
                            {keyword}
                        </Text>
                        <Button
                            fillHover={isDeleting ? '#EB0000' : '#00EEFD'}
                            disabled={isDeleting}
                            onClick={() => {
                                dispatch(moveItem({droppableId: 'minusPhrases', index: index}, {droppableId: 'keywords', index: 0}))
                                dispatch(editKeyword(keywordId, null, false)).then(() => console.log('cool'))
                            }}
                        >
                            <Reply width="100%" height="100%" color={isDeleting ? '#EB0000' : 'white'}/>
                        </Button>
                        <Button
                            disabled={isDeleting}
                            fillHover={isDeleting ? '#EB0000' : '#00EEFD'}
                            onClick={() => dispatch(toggleModalGroups({droppableId: 'minusPhrases', index: index}))}
                        >
                            <AddIcon width="100%" height="100%" fill={isDeleting ? '#EB0000' : 'white'} />
                        </Button>
                        <Button
                            disabled={isDeleting}
                            fillHover={isDeleting ? '#EB0000' : '#00EEFD'}
                            onClick={() => onDeleteKeyword(keywordId, index)}
                        >
                            <DeleteKeyword width="100%" height="100%" color={isDeleting ? '#EB0000' : 'white'} />
                        </Button>
                    </MinusPhrase>
                )
            }
        </Draggable>
    );
};

export default MinusPhrasesItem;