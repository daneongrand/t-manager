import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import styled from 'styled-components';

const DraggableItem = styled.li`
    list-style-type: none;
`

const DndDraggableItem = ({draggableId, index, children, isDraggingColor}) => {
    return (
        <Draggable draggableId={draggableId} index={index}>
            {
                
                (provided, snapshot) => {
                    // console.log(snapshot)
                    return (
                        <DraggableItem
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            style={{
                                filter: snapshot.isDragging ? `drop-shadow(0px 0px 5px ${isDraggingColor})` : "none",
                                ...provided.draggableProps.style
                            }}
                        >
                            {children}
                        </DraggableItem>
                    )
                }
            }
        </Draggable>
    );
};

export default DndDraggableItem;