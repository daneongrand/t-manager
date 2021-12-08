import React from 'react';
import styled from 'styled-components';
import { Droppable } from 'react-beautiful-dnd';
import KeywordItem from './KeywordItem';

const StyledKeywordsSection = styled.ul`
    min-height: 100%;
    max-height: 100%;
    margin: 0;
    padding: 0;
`

const KeywordsSection = ({ droppableId, groupKeywords }) => {
    return (
        <Droppable
            droppableId={droppableId}
            type="KEYWORDS"
        >
            {
                (provided, snapshot) => {
                    return(
                    <StyledKeywordsSection
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                    >
                        {
                            groupKeywords.map((item, index) => (
                                <KeywordItem 
                                    key={item.keywordId} 
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