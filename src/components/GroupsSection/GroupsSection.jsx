import React from 'react';
import KeywordsSection from '../KeywordsSection/KeywordsSection';
import DndDraggableItem from '../UI/dnd/DndDraggableItem';
import DndDroppable from '../UI/dnd/DndDroppable';
import DndSection from '../UI/dnd/DndSection';
import styled from './GroupsSection.module.css'


const GroupsSection = ({ title, id, groups }) => {
    console.log("GROUPS", groups)
    return (
        <section className={styled.groups_section}>
            <header className={styled.groups_section_header}>
                { title }
            </header>

            <DndDroppable
                droppableId={'DroppableId-' + id}
                type="GROUPS"
                className={styled.groups_section_article}
                
            >
                {
                    groups.map((item, index) => (
                        <DndDraggableItem
                            key={item.id}
                            draggableId={item.id} 
                            index={index}
                            className={styled.groups_section_item}
                        >
                            <KeywordsSection {...item.keywords} />
                        </DndDraggableItem>
                    ))
                }
            </DndDroppable>
        </section>
    );
};

export default GroupsSection;