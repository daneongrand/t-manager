import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import styled from 'styled-components';
import GroupItem from './GroupItem';

const GroupsList = styled.ul`
    margin: 0;
    padding: 0;
    min-height: 100%;
    overflow-y: scroll;
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

const Groups = ({groups}) => {
    console.log(groups)
    return (
        <Droppable
            droppableId="groups"
            type="GROUPS"
        >
            {
                (provided, snapshot) => (
                    <GroupsList
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                    >
                        {
                            groups.map((item, index) => (
                                <GroupItem 
                                    key={item.groupId}
                                    index={index} 
                                    {...item} 
                                />
                            ))
                        }
                    </GroupsList>
                )
            }
        </Droppable>
    );
};

export default Groups;