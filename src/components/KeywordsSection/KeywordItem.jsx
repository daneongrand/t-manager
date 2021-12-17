import React, { useState } from 'react';
import { connect } from 'react-redux';
import { deletedKeyword, selectKeyword, toggleModalGroups, toggleModalMinusPhrases } from '../../actions/constructorActions';
import styled from 'styled-components';
import {OpenAnalytics, AddIcon, AddMinusPhrase, DeleteKeyword} from '../UI/icons/Icons'
import DndDraggableItem from '../UI/dnd/DndDraggableItem';
import { Draggable } from 'react-beautiful-dnd';
import { useDispatch } from 'react-redux';
import { deleteKeyword } from '../../actions/keywordsActions';
import { DELETE_KEYWORD } from '../../utils/constTypes';


const Keyword = styled.li`
    background-color: ${props => props.theme.colors.dark_blue};
    border-radius: 10px;
    padding: 6px 18px;
    margin-bottom: 5px;
    box-sizing: border-box;
    list-style-type: none;
    border: ${props => props.isDeleting ? `2px solid ${props.theme.colors.danger}` : 'none'};
`

const Header = styled.header`
    display: grid;
    grid-template-columns: 1fr repeat(4, 24px);
`

const Text = styled.p`
    font-size: 18px;
    color: ${props => props.isDeleting ? props.theme.colors.danger : 'white'};
    margin: 5px 0px;
`

const Button = styled.button`
    cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
    align-self: center;
    background-color: transparent;
    margin: 0;
    padding: 0;
    border: 0;
    width: 24px;
    height: 24px;
    & {
        path {
            transition: .5s;
        }
    }
    &:hover {
        path {
            fill: ${props => props.fillHover};
        }
    }
`

const Body = styled.article`
    max-height: 0;
    overflow: hidden;
    transition: .6s;
    &[aria-expanded="true"] {
        height: auto;
        max-height: 150px;
    }
`

const Indicator = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const BodyText = styled(Text)`
    font-size: 16px;
`


const KeywordItem = ({index, keywordId, keyword, ams = 'Н/Д', competition = 'Н/Д', lowRange = 'Н/Д', highRange = 'Н/Д'}) => {

    const [ indicatorsIsOpen, setIndicatorsIsOpen ] = useState(false)
    const [ isDeleting, setIsDeleting ] = useState(false)
    const dispatch = useDispatch()


    const onDeleteKeyword = (keywordId, index) => {
        setIsDeleting(true)
        dispatch(deleteKeyword(keywordId))
            .then(() => dispatch(deletedKeyword('keywords', index)))
    }

    const onMoveIntoMinusPhrase = (index) => {
        dispatch(selectKeyword({
            droppableId: 'keywords',
            index: index
        }))
        dispatch(toggleModalMinusPhrases({
            droppableId: 'keywords',
            index: index
        }, {
            droppableId: 'minusPhrases',
            index: 0
        }))
    }

    const showIndicators = () => {
        setIndicatorsIsOpen(!indicatorsIsOpen)
    }



    return (
        <Draggable
            draggableId={`keywordId-${keywordId}`}
            index={index}
        >
            {
                (provided, snapshot) => (
                    <Keyword
                        isDeleting={isDeleting}
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                    >
                        <Header>
                            <Text isDeleting={isDeleting}>{keyword}</Text>
                            <Button
                                fillHover={isDeleting ? '#EB0000' : '#00EEFD'}
                                disabled={isDeleting}
                                onClick={showIndicators}
                            >
                                <OpenAnalytics width='100%' height='100%' color={isDeleting ? '#EB0000' : 'white'} />
                            </Button>
                            <Button
                                fillHover={isDeleting ? '#EB0000' : '#00EEFD'}
                                disabled={isDeleting}
                                onClick={() => {
                                    dispatch(toggleModalGroups({droppableId: 'keywords', index: index}))
                                }}
                            >
                                <AddIcon width='100%' height='100%' fill={isDeleting ? '#EB0000' : 'white'} />
                            </Button>
                            <Button
                                disabled={isDeleting}
                                fillHover={isDeleting ? '#EB0000' : '#00EEFD'}
                                onClick={() => onMoveIntoMinusPhrase(index)}
                            >
                                <AddMinusPhrase width='100%' height='100%' color={isDeleting ? '#EB0000' : 'white'} />
                            </Button>
                            <Button
                                disabled={isDeleting}
                                fillHover={isDeleting ? '#EB0000' : '#00EEFD'}
                                onClick={() => onDeleteKeyword(keywordId, index)}
                            >
                                <DeleteKeyword width='100%' height='100%' color={isDeleting ? '#EB0000' : 'white'} />
                            </Button>
                        </Header>

                        <Body
                            aria-expanded={indicatorsIsOpen}
                        >
                            <Indicator>
                                <BodyText>Ср. число запросов:</BodyText>
                                <BodyText>{(ams === '') ? 'Н/Д' : ams}</BodyText>
                            </Indicator>
                            <Indicator>
                                <BodyText>Уровень конкуренции:</BodyText>
                                <BodyText>{(competition === '') ? 'Н/Д' : competition}</BodyText>
                            </Indicator>
                            <Indicator>
                                <BodyText>Минимальная ставка:</BodyText>
                                <BodyText>{(lowRange === '') ? 'Н/Д' : lowRange}</BodyText>
                            </Indicator>
                            <Indicator>
                                <BodyText>Максимальная ставка:</BodyText>
                                <BodyText>{(highRange === '') ? 'Н/Д' : highRange}</BodyText>
                            </Indicator>
                        </Body>
                    </Keyword>
                )
            }
        </Draggable>
    );
};

export default KeywordItem;