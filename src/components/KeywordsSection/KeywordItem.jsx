import React, { useState } from 'react';
import { connect } from 'react-redux';
import { deleteKeyword, selectKeyword, toggleModalMinusPhrases, toggleModalGroups, selectKeywordForMove } from '../../redux/actions';
import styled from 'styled-components';
import {OpenAnalytics, AddIcon, AddMinusPhrase, DeleteKeyword} from '../UI/icons/Icons'

const Keyword = styled.div`
    background-color: ${props => props.theme.colors.dark_blue};
    border-radius: 10px;
    padding: 6px 18px;
    margin-bottom: 5px;
`
const KeywordHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const KeywordBody = styled.div`
    overflow: hidden;
    height: ${props => props.open ? '100%' : '0'};
    display: grid;
    grid-template-rows: repeat(4, 1fr);
    grid-gap: 5px;
`


const KeywordBodyItem = styled.div`
    display: flex;
    justify-content: space-between;
    color: white;
`

const KeywordBodyItemProperty = styled.div`
`

const KeywrodBodyItemValue = styled.div`
`

const Text = styled.p`
    color: white;
    margin: 0;
`

const ButtonsList = styled.ul`
    margin: 0;
    display: flex;
`

const ButtonItem = styled.li`
    padding: 0;
    list-style-type: none;
`

const Button = styled.button`
    cursor: pointer;
    padding: 0;
    outline: none;
    background-color: transparent;
    border: 0;
`
const KeywordItem = ({index, keywordId, keyword, ams, competition, lowRange, highRange, deleteKeyword, selectKeyword, toggleModalMinusPhrases, toggleModalGroups, selectKeywordForMove}) => {
    const iconConfig = {
        width: "24",
        height: "24",
        color: "#fff"
    }


    const [info, setInfo] = useState(false)

    const openInfo = () => {
        console.log(info)
        setInfo((info) => !info)
    }





    return (
        <Keyword>
            <KeywordHeader>
                <Text>
                    {keyword}
                </Text>
                <ButtonsList>
                    <ButtonItem>
                        <Button 
                            onClick={openInfo}
                        >
                            <OpenAnalytics {...iconConfig} />
                        </Button>
                    </ButtonItem>
                    <ButtonItem>
                        <Button
                            onClick={() => {
                                selectKeywordForMove({
                                    droppableId: 'keywords',
                                    index: index
                                })
                                toggleModalGroups()
                            }}
                        >
                            <AddIcon {...iconConfig} />
                        </Button>
                    </ButtonItem>
                    <ButtonItem>
                        <Button
                            onClick={() => {
                                selectKeyword({
                                    droppableId: 'keywords',
                                    index: index
                                })
                                toggleModalMinusPhrases()
                            }}
                        >
                            <AddMinusPhrase {...iconConfig} />
                        </Button>
                    </ButtonItem>
                    <ButtonItem>
                        <Button
                            onClick={() => deleteKeyword(keywordId)}
                        >
                            <DeleteKeyword {...iconConfig} />
                        </Button>
                    </ButtonItem>
                </ButtonsList>
            </KeywordHeader>
            <KeywordBody open={info}>
                <KeywordBodyItem>
                    <KeywordBodyItemProperty>
                        Ср. число запросов: 
                    </KeywordBodyItemProperty>
                    <KeywrodBodyItemValue>
                        {ams}
                    </KeywrodBodyItemValue>
                </KeywordBodyItem>
                <KeywordBodyItem>
                    <KeywordBodyItemProperty>
                        Уровень конкуренции:
                    </KeywordBodyItemProperty>
                    <KeywrodBodyItemValue>
                        {competition}
                    </KeywrodBodyItemValue>
                </KeywordBodyItem>
                <KeywordBodyItem>
                    <KeywordBodyItemProperty>
                        Минимальная ставка:
                    </KeywordBodyItemProperty>
                    <KeywrodBodyItemValue>
                        {lowRange}
                    </KeywrodBodyItemValue>
                </KeywordBodyItem>
                <KeywordBodyItem>
                    <KeywordBodyItemProperty>
                        Максимальная ставка:
                    </KeywordBodyItemProperty>
                    <KeywrodBodyItemValue>
                        {highRange}
                    </KeywrodBodyItemValue>
                </KeywordBodyItem>
            </KeywordBody>
        </Keyword>
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