import React, { useState } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { AddMinusPhrase, DeleteKeyword, OpenAnalytics } from '../UI/icons/Icons';
import { deleteKeyword } from '../../actions/keywordsActions';
import { deletedKeyword, selectKeyword, toggleModalMinusPhrases } from '../../actions/constructorActions';
const Keyword = styled.li`
    background-color: rgba(24,29,49,1);
    color: white;
    font-size: 18px;
    border-radius: 10px;
    padding: 6px 18px;
    margin-bottom: 5px;
    box-sizing: border-box;
    list-style-type: none;
    border: ${props => props.isDeleting ? `2px solid ${props.theme.colors.danger}` : 'none'};
`

const Header = styled.header`
    display: grid;
    grid-template-columns: 1fr repeat(3, 24px);
`

const Text = styled.p`
    font-size: 18px;
    color: white;
    margin: 5px 0px;
    color: ${props => props.isDeleting ? props.theme.colors.danger : 'white'};
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

const KeywordItem = ({groupId, index, keywordId, keyword, ams, competition, lowRange, highRange}) => {
    
    const [ indicatorsIsOpen, setIndicatorsIsOpen ] = useState(false)
    const [ isDeleting, setIsDeleting ] = useState(false)
    const dispatch = useDispatch()

    const showIndicators = () => {
        setIndicatorsIsOpen(!indicatorsIsOpen)
    }

    const onMoveIntoMinusPhrase = (index, groupId) => {
        dispatch(selectKeyword({
            droppableId: `group-${groupId}`,
            index: index
        }))
        dispatch(toggleModalMinusPhrases({
            droppableId: `group-${groupId}`,
            index: index
        }, {
            droppableId: 'minusPhrases',
            index: 0
        }))
    }
    
    
    return (
        <Draggable
            draggableId={'keywordIdIntoGroup-' + keywordId}
            index={index}
        >
            {
                (provided, snapshot) => {
                    return (
                    <Keyword
                        isDeleting={isDeleting}
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                    >
                        <Header>
                            <Text isDeleting={isDeleting}>{keyword}</Text>
                            <Button
                                disabled={isDeleting}
                                fillHover={isDeleting ? '#EB0000' : '#00EEFD'}
                                onClick={showIndicators}
                            >
                                <OpenAnalytics width='100%' height='100%' color={isDeleting ? '#EB0000' : 'white'} />
                            </Button>
                            <Button
                                disabled={isDeleting}
                                fillHover={isDeleting ? '#EB0000' : '#00EEFD'}
                                onClick={() => onMoveIntoMinusPhrase(index, groupId)}
                            >
                                <AddMinusPhrase width='100%' height='100%' color={isDeleting ? '#EB0000' : 'white'} />
                            </Button>
                            <Button
                                disabled={isDeleting}
                                fillHover={isDeleting ? '#EB0000' : '#00EEFD'}
                                onClick={() => {
                                    setIsDeleting(true)
                                    dispatch(deleteKeyword(keywordId))
                                        .then(() => dispatch(deletedKeyword(`group-${groupId}`, index)))
                                }}
                            >
                                <DeleteKeyword width='100%' height='100%' color={isDeleting ? '#EB0000' : 'white'} />
                            </Button>
                        </Header>

                        <Body
                            aria-expanded={indicatorsIsOpen}
                        >
                            <Indicator>
                                <BodyText>Ср. число запросов:</BodyText>
                                <BodyText>{ams}</BodyText>
                            </Indicator>
                            <Indicator>
                                <BodyText>Уровень конкуренции:</BodyText>
                                <BodyText>{competition}</BodyText>
                            </Indicator>
                            <Indicator>
                                <BodyText>Минимальная ставка:</BodyText>
                                <BodyText>{lowRange}</BodyText>
                            </Indicator>
                            <Indicator>
                                <BodyText>Максимальная ставка:</BodyText>
                                <BodyText>{highRange}</BodyText>
                            </Indicator>
                        </Body>
                    </Keyword>
                )}
            }
        </Draggable>
    );
};

export default KeywordItem;