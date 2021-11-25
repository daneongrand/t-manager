import React from 'react';
import { connect } from 'react-redux';
import { reorder, moveIntoGroup, switchColor, toggleModal, selectKeyword } from '../redux/actions';
import KeywordsSection from '../components/KeywordsSection/KeywordsSection';
import GroupsSection from '../components/GroupsSection/GroupsSection';
import DndSection from '../components/UI/dnd/DndSection';
import MinusPhraseSection from '../components/MinusPhraseSection/MinusPhraseSection';
import styled from 'styled-components'
import Modal from '../components/UI/modal/Modal';
import KeywordModal from '../components/KeywordModal/KeywordModal';

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


const Constructor = ({keywords, groups, minusPhrases, reorder, moveIntoGroup, switchColor, toggleModal, modalIsOpen, selectKeyword, selectedWords}) => {    
    
    const handleOnDragEnd = result => {
        const {source, destination} = result
        if (!destination) return

        if (source.droppableId === destination.droppableId) {
            reorder(source, destination)
        } else if (source.droppableId === 'keywords' && destination.droppableId !== 'minusPhrases') {
            moveIntoGroup(source, destination)
        } else if ((source.droppableId !== 'minusPhrases' || source.droppableId === 'keywords') && destination.droppableId === 'minusPhrases') {
            selectKeyword(source)
            toggleModal()
        }

    }


    const handleOnDragUpdate = result => {
        const { destination } = result
        switchColor(destination)         
    }


    return (
        <>
            <ConstructorContainer 
                onDragEnd={handleOnDragEnd}
                onDragUpdate={handleOnDragUpdate}
            > 
                    <KeywordsSection title="Ключевые слова" keywords={keywords} />
                    <GroupsSection title="Группы" groups={groups} />
                    <MinusPhraseSection title="Минус-фразы" minusPhrases={minusPhrases}/>
            </ConstructorContainer>
            {
                modalIsOpen && <Modal>
                    <KeywordModal words={selectedWords} />
                </Modal>
            }
        </>
    );
}

const MapStateToProps = state => {
    return {
       keywords: state.constructors.keywords,
       groups: state.constructors.groups,
       minusPhrases: state.constructors.minusPhrases,
       modalIsOpen: state.modal.isOpen,
       selectedWords: state.constructors.selectedWords
    }
}

const MapDispatchToProps = {
    reorder,
    moveIntoGroup,
    switchColor,
    toggleModal,
    selectKeyword
}


export default connect(MapStateToProps, MapDispatchToProps)(Constructor);