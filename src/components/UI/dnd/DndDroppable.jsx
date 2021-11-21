import React from 'react';
import { Droppable } from 'react-beautiful-dnd';


const DndDroppable = ({children, droppableId, type, className,}) => {
    return (
        <Droppable droppableId={droppableId} type={type}>
            {
                (provided, snapshot) => (
                    <article
                        className={className}
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                    >
                        { children }
                    </article>
                )
            }
        </Droppable>
    );
};

export default DndDroppable;