import React, { Children } from 'react';
import { Draggable } from 'react-beautiful-dnd';

const DndDraggableItem = ({draggableId, index, children, className}) => {
    return (
        <Draggable draggableId={draggableId} index={index}>
            {
                
                (provided, snapshot) => (
                    <div
                        className={className}
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                    >
                        {children}
                    </div>
                )
            }
        </Draggable>
    );
};

export default DndDraggableItem;