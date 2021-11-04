import React from 'react';
import DndDraggableItem from '../UI/dnd/DndDraggableItem';
import DndDroppable from '../UI/dnd/DndDroppable';
import styled from './MinusPhraseSection.module.css'


const MinusPhraseSection = ({title, id, data, prefixDroppableId}) => {
    return (
        <section className={styled.minus_phrase_section}>

            <header  className={styled.minus_phrase_section_header}>
                {title}
            </header>


            <DndDroppable
                droppableId={prefixDroppableId + id}
                type="KEYWORDS"
                className={styled.minus_phrase_section_article}
            >
                {
                    data.map((item, index) => (
                        <DndDraggableItem
                            draggableId={item.id}
                            index={index}
                            className={styled.minus_phrase_section_item}
                            key={item.id}
                        >
                            <div>
                                { item.keyword }
                            </div>
                        </DndDraggableItem>
                    ))
                }
            </DndDroppable>

        </section>
    );
};

export default MinusPhraseSection;