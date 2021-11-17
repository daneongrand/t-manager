import React, { useState } from 'react';
import KeywordsSection from '../KeywordsSection/KeywordsSection';
import DndDraggableItem from '../UI/dnd/DndDraggableItem';
import DndDroppable from '../UI/dnd/DndDroppable';
import DndSection from '../UI/dnd/DndSection';
import Section from '../UI/section/Section';
import styled from './GroupsSection.module.css'
import KeywordsSectionIntoGroups from './KeywordsSectionIntoGroups';


const GroupsSection = ({ title, groups }) => {
    
    

    return (
        <Section borderColor="linear-gradient(var(--rotate), #00FF29 0%, #1FD94C 22.96%, #48A700 49.56%, #178900 71.63%, #025801 100%)">
            <header className={styled.groups_section_header}>
                {title}
            </header>

            <DndDroppable
                droppableId='droppableId-groups'
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
                            <KeywordsSectionIntoGroups {...item} />
                        </DndDraggableItem>
                    ))
                }
            </DndDroppable>
        </Section>
    );
};

export default GroupsSection;