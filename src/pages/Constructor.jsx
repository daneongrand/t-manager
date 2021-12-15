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
import { getAllGroup } from '../actions/groupsActions';
import AddGroupsModal from '../components/GroupsSection/AddGroupsModal';
import { getAllKeywords } from '../actions/keywordsActions';
import { getAllMinusPhrases } from '../actions/minusPhrasesActions';
import { CLEAR_GROUPS, CLEAR_KEYWORDS, CLEAR_MINUS_PHRASES } from '../utils/constTypes';
import { moveItem, reorder, selectKeyword, toggleModalMinusPhrases } from '../actions/constructorActions';
import MoveIntoMinusPhrases from '../components/Modals/MoveIntoMinusPhrases';
import MoveIntoGroup from '../components/Modals/MoveIntoGroup';


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


const Constructor = ({}) => {    
    
    const keywords = useSelector(state => state.constructors.keywords)
    const groups = useSelector(state => state.constructors.groups)
    const minusPhrases = useSelector(state => state.constructors.minusPhrases)
    const modalMoveIntoMinusPhraseIsOpen = useSelector(state => state.constructors.modalMoveIntoMinusPhraseIsOpen)
    const modalMoveIntoGroupIsOpen = useSelector(state => state.constructors.modalMoveIntoGroupIsOpen)
    const modalAddKeywordsIsOpen = useSelector(state => state.constructors.modalAddKeywordsIsOpen)
    // const modalMinusPhrasesIsOpen = useSelector(state => state.constructors.modalMinusPhrasesIsOpen)
    const selectedWords = useSelector(state => state.constructors.selectedWords)
    const modalAddGroupsIsOpen = useSelector(state => state.constructors.modalAddGroupsIsOpen)
    const match = useRouteMatch()
    const dispatch = useDispatch()

    useEffect(() => {
        console.log(match.params.id)
        dispatch(getAllKeywords(match.params.id))
        dispatch(getAllGroup(match.params.id))
        dispatch(getAllMinusPhrases(match.params.id))
        return () => {
            dispatch({ type: CLEAR_KEYWORDS })
            dispatch({ type: CLEAR_GROUPS })
            dispatch({ type: CLEAR_MINUS_PHRASES })
        }
    }, [])

    const handleOnDragEnd = result => {
        const {source, destination} = result
        if (!destination) return
        console.log(source, destination)
        if (source.droppableId === destination.droppableId) {
            dispatch(reorder(source, destination))
        } else if (destination.droppableId === 'minusPhrases') {
            console.log('into to minus phrase')
            dispatch(selectKeyword(source))
            dispatch(toggleModalMinusPhrases(source, destination))
        } else if (destination.droppableId.includes('group-')) {
            console.log('into group')
        }
        // if (source.droppableId === destination.droppableId) {
        //     dispatch(reorder(source, destination))
        // } else if (source.droppableId === 'keywords' && destination.droppableId !== 'minusPhrases') {
        //     console.log(source, destination)
        //     dispatch(moveIntoGroup(source, destination))
        // } else if ((source.droppableId !== 'minusPhrases' || source.droppableId === 'keywords') && destination.droppableId === 'minusPhrases') {
        //     dispatch(selectKeyword(source))
        //     dispatch(toggleModalMinusPhrases())
        // }

    }



    return (
        <ConstructorMain>
            <ConstructorHeader>

            </ConstructorHeader>

            <ConstructorSection
                onDragEnd={handleOnDragEnd}
                
            >
                <KeywordsSection title="Ключевые слова" keywords={keywords} keywordsLength={keywords.length}/>
                <GroupsSection groups={groups} groupLength={groups.length} keywordLength={groups.reduce((acc, item) => acc += item.groupKeywords.length , 0)}/>
                <MinusPhraseSection minusPhrases={minusPhrases} minusPhrasesLength={minusPhrases.length}/>
            </ConstructorSection>
            {
                modalMoveIntoMinusPhraseIsOpen && <MoveIntoMinusPhrases title='Выбор дополнительных минус-слов' />
            }
            {
                modalMoveIntoGroupIsOpen && <MoveIntoGroup title='Выбор группы' />
            }
            {
                modalAddKeywordsIsOpen && <AddKeywordsModal />
            }
            {
                modalAddGroupsIsOpen && <AddGroupsModal campaignId={match.params.id} />
            }
        </ConstructorMain>
    );
}

export default Constructor;