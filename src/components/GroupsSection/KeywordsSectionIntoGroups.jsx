import React from 'react';
import styled from 'styled-components'
import DndDraggableItem from '../UI/dnd/DndDraggableItem';
import DndDroppable from '../UI/dnd/DndDroppable';


const KeywordsSectionIntoGroups = ({groupName, groupKeywords}) => {
    
    const Section = styled.section`
    `

    const Header = styled.header`
    `

    const Main = styled.main`
    `

    const Keyword = styled.div`
    `


    return (
        <Section>
            <Header>
                {groupName}
            </Header>

            <Main>
                <DndDroppable>
                    {
                        groupKeywords.map((item, index) => (
                            <DndDraggableItem>
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