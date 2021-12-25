import React from 'react';
import { useEffect } from 'react';
import { useRouteMatch } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components'
import KeywordsSection from '../components/KeywordsSection/KeywordsSection';
import GroupsSection from '../components/GroupsSection/GroupsSection';
import DndSection from '../components/UI/dnd/DndSection';
import MinusPhraseSection from '../components/MinusPhraseSection/MinusPhraseSection';
import AddKeywordsModal from '../components/Modals/AddKeywordsModal';
import { getAllGroup } from '../actions/groupsActions';
import AddGroupsModal from '../components/Modals/AddGroupsModal';
import { editKeyword, getAllKeywords } from '../actions/keywordsActions';
import { getAllMinusPhrases } from '../actions/minusPhrasesActions';
import { CLEAR_GROUPS, CLEAR_KEYWORDS, CLEAR_MINUS_PHRASES } from '../utils/constTypes';
import { moveItem, reorder, selectKeyword, toggleModalMinusPhrases } from '../actions/constructorActions';
import MoveIntoMinusPhrases from '../components/Modals/MoveIntoMinusPhrases';
import MoveIntoGroup from '../components/Modals/MoveIntoGroup';
import DeleteGroup from '../components/Modals/DeleteGroup';
import { useState } from 'react';
import { getOneCampaign, rename } from '../actions/campaignsActions';
import { Check, Edit } from '../components/UI/icons/Icons';

const ConstructorMain = styled.main`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-rows: 7vh 93vh;
    @media ${props => props.theme.media.tablet} {
        grid-template-rows: 10vh repeat(3, 90vh);   
    }
`

const ConstructorHeader = styled.header`
    padding: 0px 30px;
    width: 100%;
    box-sizing: border-box;
    display: grid;
    grid-template-columns: auto 1fr;
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

const CampaignNameContainer = styled.div`
    align-self: center;
    display: grid;
    grid-template-columns: 1fr 24px;
    grid-column-gap: 10px;
`

const CampaignName = styled.p`
    color: white;
    margin: 0;
    font-size: 22px;
`

const CampaignNameInput = styled.input`
    font-size: 22px;
    border: 0;
    background-color: transparent;
    color: white;
    border-bottom: 2px solid ${props => props.theme.colors.blue};
    outline: none;
`

const Button = styled.button`
    width: 24px;
    height: 24px;
    padding: 0;
    border: 0;
    background-color: transparent;
    cursor: pointer;
`

const Constructor = ({}) => {    
    
    const keywords = useSelector(state => state.constructors.keywords)
    const groups = useSelector(state => state.constructors.groups)
    const minusPhrases = useSelector(state => state.constructors.minusPhrases)
    const modalMoveIntoMinusPhraseIsOpen = useSelector(state => state.constructors.modalMoveIntoMinusPhraseIsOpen)
    const modalMoveIntoGroupIsOpen = useSelector(state => state.constructors.modalMoveIntoGroupIsOpen)
    const modalAddKeywordsIsOpen = useSelector(state => state.constructors.modalAddKeywordsIsOpen)
    const selectedKeyword = useSelector(state => state.constructors.selectedKeyword)
    const modalAddGroupsIsOpen = useSelector(state => state.constructors.modalAddGroupsIsOpen)
    const modalDeleteGroupIsOpen = useSelector(state => state.constructors.modalDeleteGroupIsOpen)
    const match = useRouteMatch()
    const dispatch = useDispatch()
    const [ campaignName, setCampaignName ] = useState('')
    const [ campaignNameIsEdit, setCampaignNameIsEdit ] = useState(false) 

    useEffect(() => {
        console.log(match.params.id)
        dispatch(getAllKeywords(match.params.id))
        dispatch(getAllGroup(match.params.id))
        dispatch(getAllMinusPhrases(match.params.id))
        dispatch(getOneCampaign(match.params.id))
            .then(({ campaign }) => setCampaignName(campaign.campaignName))
        return () => {
            dispatch({ type: CLEAR_KEYWORDS })
            dispatch({ type: CLEAR_GROUPS })
            dispatch({ type: CLEAR_MINUS_PHRASES })
        }
    }, [])

    const handleOnDragStart = result => {
        dispatch(selectKeyword(result.source))
    }

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
            const groupId = destination.droppableId.split('-')[1]
            dispatch(editKeyword(selectedKeyword.keywordId, groupId, false))
            dispatch(moveItem(source, destination))
        } else {
            dispatch(editKeyword(selectedKeyword.keywordId, null, false))
            dispatch(moveItem(source, destination))
        }
    }


    return (
        <ConstructorMain>
            <ConstructorHeader>
                <CampaignNameContainer>
                    {
                        (campaignNameIsEdit)
                            ? <CampaignNameInput 
                                value={campaignName} 
                                onChange={e => setCampaignName(e.target.value)}
                            /> 
                            : <CampaignName>{campaignName}</CampaignName>
                    }
                    {
                        (campaignNameIsEdit)
                            ? <Button
                                onClick={() => {
                                    dispatch(rename(match.params.id, campaignName))
                                        .then(() => setCampaignNameIsEdit(false)) 
                                }}
                            >
                                <Check width="100%" height="100%" color='white' />
                            </Button>
                            : <Button
                                onClick={() => setCampaignNameIsEdit(true)}
                            >
                                <Edit width="100%" height="100%" color='white' />
                            </Button>
                    }
                </CampaignNameContainer>
            </ConstructorHeader>

            <ConstructorSection
                onDragEnd={handleOnDragEnd}
                onDragStart={handleOnDragStart}
            >
                <KeywordsSection title="Ключевые слова" keywords={keywords} keywordsLength={keywords.length}/>
                <GroupsSection groups={groups} groupLength={groups.length} keywordLength={groups.reduce((acc, item) => acc += item.groupKeywords.length, 0)}/>
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
            {
                modalDeleteGroupIsOpen && <DeleteGroup />
            }
        </ConstructorMain>
    );
}

export default Constructor;