import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import styled from 'styled-components';

const DroppableList = styled.ul`
    margin: 0;
    padding: 0;
    max-height: 80%;
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

const DndDroppable = ({children, droppableId, type}) => {
    return (
        <Droppable droppableId={droppableId} type={type}>
            {
                (provided, snapshot) => (
                    <ul
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                    >
                        { children }
                    </ul>
                )
            }
        </Droppable>
    );
};

export default DndDroppable;