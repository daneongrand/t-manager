import React from 'react';
import { connect } from 'react-redux';
import KeywordsSection from '../components/KeywordsSection/KeywordsSection';
import GroupsSection from '../components/GroupsSection/GroupsSection';
import DndSection from '../components/UI/dnd/DndSection';
import MinusPhraseSection from '../components/MinusPhraseSection/MinusPhraseSection';
import styled from 'styled-components'

const ConstructorContainer = styled(DndSection)`
    display: grid;
    width: 100%;
    height: 100%;
    grid-template-columns: 50px repeat(3, calc((100% - 50px) / 3));
    grid-template-rows: 90vh;
    & > *:first-child {
        grid-column-start: 2;
    }
    @media ${props => props.theme.media.tablet} {
        grid-template-columns: 100%;
        grid-template-rows: 90vh 90vh 90vh;
        & > *:first-child {
            grid-column-start: 1;
        }
    }
`


const Constructor = ({keywords, groups, minusPhrases}) => {    
    
    const handleOnDragEnd = result => {
        const {source, destination} = result
        if (!destination) return

        if (source.droppableId == destination.droppableId) {
        }
        console.log(source, destination)
    }


    return (
        <ConstructorContainer 
            onDragEnd={handleOnDragEnd}
        > 
                <KeywordsSection title="Ключевые слова" keywords={keywords} />
                <GroupsSection title="Группы" groups={groups} />
                <MinusPhraseSection title="Минус-фразы" minusPhrases={minusPhrases}/>
        </ConstructorContainer>
    );
}

const MapStateToProps = state => {
    console.log(state)
    return {
       keywords: state.constructors.keywords,
       groups: state.constructors.groups,
       minusPhrases: state.constructors.minusPhrases
    }
}

export default connect(MapStateToProps, null)(Constructor);