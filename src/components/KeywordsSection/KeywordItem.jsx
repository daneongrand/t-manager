import React, { useState } from 'react';
import styled, {keyframes} from 'styled-components';
import {OpenAnalytics, AddIcon, AddMinusPhrase, DeleteKeyword} from '../UI/icons/Icons'

const KeywordItem = ({keyword, ams, competition, lowRange, highRange}) => {
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



    const Keyword = styled.div`
        background-color: #0A1026;
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
        transition: all .5s;
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


    return (
        <Keyword>
            <KeywordHeader>
                <Text>
                    {keyword}
                </Text>
                <ButtonsList>
                    <ButtonItem>
                        <Button onClick={openInfo}>
                            <OpenAnalytics {...iconConfig} />
                        </Button>
                    </ButtonItem>
                    <ButtonItem>
                        <Button>
                            <AddIcon {...iconConfig} />
                        </Button>
                    </ButtonItem>
                    <ButtonItem>
                        <Button>
                            <AddMinusPhrase {...iconConfig} />
                        </Button>
                    </ButtonItem>
                    <ButtonItem>
                        <Button>
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

export default KeywordItem;