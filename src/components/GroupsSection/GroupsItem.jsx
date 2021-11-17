import React from 'react';
import styled from 'styled-components';
import DndDraggableItem from '../UI/dnd/DndDraggableItem';
import DndDroppable from '../UI/dnd/DndDroppable';

const GroupsItem = ({groupId, groupName, groupKeywords}) => {
    const GroupsItem = styled.section`

    `
    const GroupsItemHeader = styled.header`
    
    `


    return (
        <GroupsItem>
            <GroupsItemHeader>
                {groupName}
            </GroupsItemHeader>
            <DndDroppable
                droppableId={"droppableId" + groupId}
                type="KEYWORDS"
            >
                {
                    groupKeywords.map((item, index) => (
                        <DndDraggableItem
                            key={item.keywordId}
                            draggableId={item.keywordId} 
                            index={index}
                        >
                            {item.keyword}
                        </DndDraggableItem>
                    ))
                }
            </DndDroppable>
        </GroupsItem>
    );
};

export default GroupsItem;