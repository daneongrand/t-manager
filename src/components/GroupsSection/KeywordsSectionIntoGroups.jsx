import React from 'react';
import styled from 'styled-components'
import DndDraggableItem from '../UI/dnd/DndDraggableItem';
import DndDroppable from '../UI/dnd/DndDroppable';

const Section = styled.section`
    width: 100%;
    height: 100%;
`

const Header = styled.header`
    margin-bottom: 20px;
`

const Main = styled.main`
`

const Keyword = styled.div`
    background: rgba(24, 29, 49, 1);
    border-radius: 10px;
    padding: 6px 18px;
    margin-bottom: 5px;
`

const KeywordsSectionIntoGroups = ({groupId, groupName, groupKeywords, color}) => {

    return (
        <Section>
            <Header>
                {groupName}
            </Header>

            <Main>
                <DndDroppable
                    droppableId={groupId}      
                    type="KEYWORDS"         
                >
                    {
                        groupKeywords.map((item, index) => (
                            <DndDraggableItem
                                key={item.keywordId}
                                draggableId={item.keywordId}
                                index={index}
                                isDraggingColor={ (!color) ? "#05EB00" : color }
                            >
                                <Keyword>
                                    {item.keyword} 
                                </Keyword>
                            </DndDraggableItem>
                        ))
                    }
                </DndDroppable>
            </Main>
        </Section>
    );
};



export default KeywordsSectionIntoGroups;
