import React from 'react';
import { connect } from 'react-redux';
import { reorder, moveIntoGroup, toggleModalMinusPhrases, selectKeyword } from '../actions/constructorActions';
import { switchColor } from '../actions/dndActions';
import KeywordsSection from '../components/KeywordsSection/KeywordsSection';
import GroupsSection from '../components/GroupsSection/GroupsSection';
import DndSection from '../components/UI/dnd/DndSection';
import MinusPhraseSection from '../components/MinusPhraseSection/MinusPhraseSection';
import styled from 'styled-components'
import Modal from '../components/UI/modal/Modal';
import KeywordModal from '../components/KeywordModal/KeywordModal';
import GroupsModal from '../components/GroupsSection/GroupsModal';
import AddKeywordsModal from '../components/Modals/AddKeywordsModal';



const ConstructorMain = styled.main`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-rows: 10vh 90vh;
    @media ${props => props.theme.media.tablet} {
        grid-template-rows: 10vh repeat(3, 90vh);   
    }
`

const ConstructorHeader = styled.header`
    width: 100%;
    box-sizing: border-box;
    border: 1px solid red;
`

const ConstructorSection = styled(DndSection)`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 10px;
    @media ${props => props.theme.media.tablet} {
        grid-template-columns: 100%;
        grid-template-rows: repeat(3, 90vh);
    }
`


const Constructor = ({modalAddKeywordsIsOpen, keywords, groups, minusPhrases, reorder, moveIntoGroup, switchColor, toggleModalMinusPhrases, modalMinusPhrasesIsOpen, selectKeyword, selectedWords, modalGroupsIsOpen}) => {    
    
    const handleOnDragEnd = result => {
        const {source, destination} = result
        if (!destination) return

        if (source.droppableId === destination.droppableId) {
            reorder(source, destination)
        } else if (source.droppableId === 'keywords' && destination.droppableId !== 'minusPhrases') {
            console.log(source, destination)
            moveIntoGroup(source, destination)
        } else if ((source.droppableId !== 'minusPhrases' || source.droppableId === 'keywords') && destination.droppableId === 'minusPhrases') {
            selectKeyword(source)
            toggleModalMinusPhrases()
        }

    }


    const handleOnDragUpdate = result => {
        const { destination } = result
        switchColor(destination)         
    }


    return (
        <ConstructorMain>
            <ConstructorHeader>

            </ConstructorHeader>

            <ConstructorSection
                onDragEnd={handleOnDragEnd}
                onDragUpdate={handleOnDragUpdate}
            >
                <KeywordsSection title="Ключевые слова" keywords={keywords} />
                <GroupsSection groups={groups} />
                <MinusPhraseSection minusPhrases={minusPhrases} />
            </ConstructorSection>
            {
                modalMinusPhrasesIsOpen && <Modal>
                    <KeywordModal words={selectedWords} />
                </Modal>
            }
            {
                modalGroupsIsOpen && <Modal>
                    <GroupsModal groups={groups} />
                </Modal>
            }
            {
                modalAddKeywordsIsOpen && <AddKeywordsModal />
            }
        </ConstructorMain>
    );
}

const MapStateToProps = state => {
    return {
       keywords: state.constructors.keywords,
       groups: state.constructors.groups,
       minusPhrases: state.constructors.minusPhrases,
       modalMinusPhrasesIsOpen: state.constructors.modalMinusPhrasesIsOpen,
       modalGroupsIsOpen: state.constructors.modalGroupsIsOpen,
       modalAddKeywordsIsOpen: state.constructors.modalAddKeywordsIsOpen,
       selectedWords: state.constructors.selectedWords
    }
}

const MapDispatchToProps = {
    reorder,
    moveIntoGroup,
    switchColor,
    toggleModalMinusPhrases,
    selectKeyword
}


export default connect(MapStateToProps, MapDispatchToProps)(Constructor);