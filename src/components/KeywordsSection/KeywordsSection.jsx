import React from 'react';
import DndDraggableItem from '../UI/dnd/DndDraggableItem';
import DndDroppable from '../UI/dnd/DndDroppable';
import DndSection from '../UI/dnd/DndSection';
import styled from './KeywordsSection.module.css'

const KeywordsSection = ({title, id, data}) => {
    return (
        <section className={styled.keywords_section}>

            <header className={styled.keywords_section_header}>
                {title}
            </header>

            <DndDroppable 
                droppableId={"DroppableId-" + id}
                type="KEYWORDS" 
                className={styled.keywords_section_article}
            >
                {
                    data.map((item, index) => (
                        <DndDraggableItem 
                            key={item.id}
                            draggableId={item.id} 
                            index={index}
                            className={styled.keywords_section_item}
                        >
                            <div>
                                {item.keyword}
                            </div>
                        </DndDraggableItem>
                    ))
                }
            </DndDroppable>
        </section>
    );
};

export default KeywordsSection;