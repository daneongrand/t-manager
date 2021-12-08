import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import styled from 'styled-components';
import { DeleteKeyword, Edit } from '../UI/icons/Icons';
import KeywordsSection from './KeywordsSection';

const StyledGroupItem = styled.li`
    list-style-type: none;
    background-color: ${props => props.theme.colors.dark_blue};
    border-radius: 10px;
    padding: 18px;
    margin-bottom: 5px;
    display: grid;
    grid-template-rows: 30px 1fr;
    grid-row-gap: 10px;
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

const GroupItem = ({groupId, groupName, groupKeywords, index}) => {
    return (
        <Draggable
            draggableId={groupId}
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
                            {groupName}
                            <Button>
                                <Edit width="20" height="20" color="white" />
                            </Button>
                            <Button>
                                <DeleteKeyword width="100%" height="100%" color="white" />
                            </Button>
                        </Header>
                        <KeywordsSection droppableId={groupId} groupKeywords={groupKeywords} />
                    </StyledGroupItem>
                )
            }
        </Draggable>
    );
};

export default GroupItem;