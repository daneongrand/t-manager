import React from 'react';
import { useState } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { spin } from '../UI/animation/animations';
import { Check, DeleteKeyword, Edit } from '../UI/icons/Icons';
import Loader from '../UI/loader/Loader';
import KeywordsSection from './KeywordsSection';
import { deleteGroup, renameGroup } from '../../actions/groupsActions';
import { DELETE_GROUP } from '../../utils/constTypes';

const StyledGroupItem = styled.li`
    list-style-type: none;
    background-color: ${props => props.theme.colors.dark_blue};
    border-radius: 10px;
    padding: 18px;
    margin-bottom: 5px;
    display: grid;
    grid-template-rows: 30px 1fr;
    grid-row-gap: 10px;
    position: relative;
`

const Header = styled.header`
    font-size: 20px;
    display: grid;
    grid-template-columns: 1fr 30px 30px;
    grid-column-gap: 5px;
    align-items: center;
    color: white;
`

const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border: 0;
    padding: 0;
    width: 30px;
    height: 30px;
    background-color: transparent;
    & {
        path {
            transition: .5s;
        }
    }
    &:hover {
        path {
            fill: ${props => props.fillHover};
        }
    }
`

const GroupNameInput = styled.input`

`

const GroupItem = ({groupId, groupName, groupKeywords, index}) => {
    const [ rename, setRename ] = useState(false)
    const [ name, setName ] = useState(groupName)
    const [ isRenaming, setIsRenaming ] = useState(false)
    const dispatch = useDispatch()
    return (
        <Draggable
            draggableId={`draggableId-${groupId}`}
            index={index}
        >
            {
                (provided, snapshot) => (
                    <StyledGroupItem
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                    >
                        <Header>
                            {
                                rename
                                    ? <GroupNameInput
                                        value={name}
                                        onChange={e => setName(e.target.value)}
                                    />
                                    : name
                            }
                            {
                                rename
                                    ? <Button

                                        onClick={() => {
                                            setIsRenaming(true)
                                            dispatch(renameGroup(groupId, name))
                                                .then(() => {
                                                    setRename(false)
                                                    setIsRenaming(false)
                                                })
                                        }}
                                    >
                                        <Check width="100%" height="100%" color="white" />
                                    </Button>
                                    : <Button
                                        onClick={() => setRename(true)}
                                    >
                                        <Edit width="20" height="20" color="white" />
                                    </Button>
                            }
                            <Button
                                onClick={() => {
                                    dispatch(deleteGroup(groupId))
                                        .then(data => dispatch({
                                            type: DELETE_GROUP,
                                            payload: data
                                        }))
                                }}
                            >
                                <DeleteKeyword width="100%" height="100%" color="white" />
                            </Button>
                        </Header>
                        <KeywordsSection groupId={groupId} groupKeywords={groupKeywords} />
                        {
                            isRenaming && <Loader borderRadius="10px" />
                        }
                    </StyledGroupItem>
                )
            }
        </Draggable>
    );
};

export default GroupItem;