import React from 'react';
import { DragDropContext } from 'react-beautiful-dnd';

const DndSection = ({children, onBeforeCapture, onBeforeDragStart, onDragStart, onDragUpdate, onDragEnd, className}) => {
    return (
        <DragDropContext
            onBeforeCapture = {onBeforeCapture}
            onBeforeDragStart = {onBeforeDragStart}
            onDragStart = {onDragStart}
            onDragUpdate = {onDragUpdate}
            onDragEnd = {onDragEnd}
        >
            <section className={className}>
                { children }
            </section>
        </DragDropContext>
    );
};

export default DndSection;