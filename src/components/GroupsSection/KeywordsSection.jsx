import React from 'react';
import styled from 'styled-components';
import { Droppable } from 'react-beautiful-dnd';
import KeywordItem from './KeywordItem';

const StyledKeywordsSection = styled.ul`
    min-height: 100px;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
`

const KeywordsSection = ({groupId, groupKeywords }) => {
    return (
        <Droppable
            droppableId={'group-' + groupId}
            type="KEYWORDS"
        >
            {
                (provided, snapshot) => {
                    console.log(snapshot)
                    return(
                    <StyledKeywordsSection
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                    >
                        {
                            groupKeywords.map((item, index) => (
                                <KeywordItem 
                                    key={'keywordId-' + item.keywordId} 
                                    index={index} 
                                    {...item}  
                                />
                            ))
                        }
                    </StyledKeywordsSection>
                )}
            }
        </Droppable>
    );
};

export default KeywordsSection;