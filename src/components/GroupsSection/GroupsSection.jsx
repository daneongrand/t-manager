import React, { useState } from 'react';
import KeywordsSection from '../KeywordsSection/KeywordsSection';
import DndDraggableItem from '../UI/dnd/DndDraggableItem';
import DndDroppable from '../UI/dnd/DndDroppable';
import DndSection from '../UI/dnd/DndSection';
import styled from './GroupsSection.module.css'


const GroupsSection = ({ title, id, groups, prefixDroppableId }) => {
    const [display, setDisplay] = useState('group')

    console.log(display)
    return (
        <section className={styled.groups_section}>
            <header className={styled.groups_section_header}>
                {title}
            </header>

            <DndDroppable
                droppableId={prefixDroppableId + id}
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
                            <KeywordsSection {...item.keywords} prefixDroppableId="groups-keywords$" />
                        </DndDraggableItem>
                    ))
                }
            </DndDroppable>
        </section>
    );
};

export default GroupsSection;