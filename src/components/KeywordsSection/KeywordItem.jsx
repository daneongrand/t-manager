import React, { useState } from 'react';
import { connect } from 'react-redux';
import { deleteKeyword, selectKeyword, toggleModalMinusPhrases, toggleModalGroups, selectKeywordForMove } from '../../actions/constructorActions';
import styled from 'styled-components';
import {OpenAnalytics, AddIcon, AddMinusPhrase, DeleteKeyword} from '../UI/icons/Icons'
import DndDraggableItem from '../UI/dnd/DndDraggableItem';
import { Draggable } from 'react-beautiful-dnd';

const Keyword = styled.li`
    background-color: ${props => props.theme.colors.dark_blue};
    border-radius: 10px;
    padding: 6px 18px;
    margin-bottom: 5px;
    box-sizing: border-box;
    list-style-type: none;
`

const Header = styled.header`
    display: grid;
    grid-template-columns: 1fr repeat(4, 24px);
`

const Text = styled.p`
    font-size: 18px;
    color: white;
    margin: 5px 0px;
`

const Button = styled.button`
    cursor: pointer;
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


const KeywordItem = ({index, keywordId, keyword, ams = 'Н/Д', competition = 'Н/Д', lowRange = 'Н/Д', highRange = 'Н/Д', deleteKeyword, selectKeyword, toggleModalMinusPhrases, toggleModalGroups, selectKeywordForMove}) => {

    const [ indicatorsIsOpen, setIndicatorsIsOpen ] = useState(false)
    
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
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                    >
                        <Header>
                            <Text>{keyword}</Text>
                            <Button
                                fillHover="#00EEFD"
                                onClick={showIndicators}
                            >
                                <OpenAnalytics width='100%' height='100%' color='white' />
                            </Button>
                            <Button
                                fillHover="#00EEFD"
                            >
                                <AddIcon width='100%' height='100%' fill='white' />
                            </Button>
                            <Button
                                fillHover="#00EEFD"
                            >
                                <AddMinusPhrase width='100%' height='100%' color='white' />
                            </Button>
                            <Button
                                fillHover="#00EEFD"
                            >
                                <DeleteKeyword width='100%' height='100%' color='white' />
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

const MapDispatchToProps = {
    selectKeyword,
    deleteKeyword,
    toggleModalMinusPhrases, 
    toggleModalGroups,
    selectKeywordForMove
}

export default connect(null, MapDispatchToProps)(KeywordItem);