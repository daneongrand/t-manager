import React from 'react';
import { useEffect } from 'react';
import { useRouteMatch } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components'
import KeywordsSection from '../components/KeywordsSection/KeywordsSection';
import GroupsSection from '../components/GroupsSection/GroupsSection';
import DndSection from '../components/UI/dnd/DndSection';
import MinusPhraseSection from '../components/MinusPhraseSection/MinusPhraseSection';
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


const Constructor = ({ reorder, moveIntoGroup, toggleModalMinusPhrases, selectKeyword }) => {    
    
    const keywords = useSelector(state => state.constructors.keywords)
    const groups = useSelector(state => state.constructors.groups)
    const minusPhrases = useSelector(state => state.constructors.minusPhrases)
    const modalMinusPhrasesIsOpen = useSelector(state => state.constructors.modalMinusPhrasesIsOpen)
    const modalGroupsIsOpen = useSelector(state => state.constructors.modalGroupsIsOpen)
    const modalAddKeywordsIsOpen = useSelector(state => state.constructors.modalAddKeywordsIsOpen)
    const selectedWords = useSelector(state => state.constructors.selectedWords)
    const match = useRouteMatch()
    const dispatch = useDispatch()

    useEffect(() => {
        console.log(match.params.id)
    }, [])

    const handleOnDragEnd = result => {
        const {source, destination} = result
        if (!destination) return

        if (source.droppableId === destination.droppableId) {
            dispatch(reorder(source, destination))
        } else if (source.droppableId === 'keywords' && destination.droppableId !== 'minusPhrases') {
            console.log(source, destination)
            dispatch(moveIntoGroup(source, destination))
        } else if ((source.droppableId !== 'minusPhrases' || source.droppableId === 'keywords') && destination.droppableId === 'minusPhrases') {
            dispatch(selectKeyword(source))
            dispatch(toggleModalMinusPhrases())
        }

    }



    return (
        <ConstructorMain>
            <ConstructorHeader>

            </ConstructorHeader>

            <ConstructorSection
                onDragEnd={handleOnDragEnd}
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

export default Constructor;