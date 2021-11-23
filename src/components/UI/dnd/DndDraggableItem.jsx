import React from 'react';
import { Draggable } from 'react-beautiful-dnd';

const DndDraggableItem = ({draggableId, index, children, className, isDraggingColor}) => {
    return (
        <Draggable draggableId={draggableId} index={index}>
            {
                
                (provided, snapshot) => {
                    // console.log(snapshot)
                    return (
                        <div
                            className={className}
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            style={{
                                filter: snapshot.isDragging ? `drop-shadow(0px 0px 5px ${isDraggingColor})` : "none",
                                ...provided.draggableProps.style
                            }}
                        >
                            {children}
                        </div>
                    )
                }
            }
        </Draggable>
    );
};

export default DndDraggableItem;