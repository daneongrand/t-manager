import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Section } from '../UI/section/Section';
import styled from 'styled-components'
import MinusPhrasesTabs from './MinusPhrasesTabs';
import MinusPhrasesTabsItem from './MinusPhrasesTabsItem';
import { AddIcon } from '../UI/icons/Icons';
import MinusPhrases from './MinusPhrases';
import { useSelector } from 'react-redux';
import Loader from '../UI/loader/Loader';

const StyledSection = styled(Section)`
    align-self: center;
    justify-self: center;
    width: 90%;
    min-height: 90%;
    max-height: 90%;
    box-sizing: border-box;
    display: grid;
    grid-template-rows: 40px 1fr 30px;
`

const Header = styled.header`
    display: flex;
    min-width: 100%;
    max-width: 100%;
    height: 35px;
`

const Footer = styled.footer`
`

const MinusPhrasesLengthParagraph = styled.p`
    color: white;
`

const Button = styled.button`
    cursor: pointer;
    border: 0;
    padding: 0;
    width: 30px;
    height: 30px;
    background-color: transparent;
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

const MinusPhraseSection = ({minusPhrases,minusPhrasesLength}) => {
    const isLoading = useSelector(state => state.minusPhrases.isLoading)
    const [ toggleTabs, setToggleTabs ] = useState('minusPhrases')

    return (
        <StyledSection 
            as="article"
            borderColor="linear-gradient(var(--rotate),  #970000 0%, #A40347 28.65%, #8C0075 55.73%, #8C1C8C 73.96%, #DB01FF 100%)"
        >
            <Header>
                <MinusPhrasesTabs>
                    <Button
                        fillHover="#00EEFD"
                    >
                        <AddIcon width="100%" height="100%" fill="white" />
                    </Button>
                    <MinusPhrasesTabsItem
                        value="minusPhrases"
                        selectedItem={toggleTabs}
                        selectItem={(value) => setToggleTabs(value)}
                    >
                        Минус-слова
                    </MinusPhrasesTabsItem>
                    <MinusPhrasesTabsItem
                        value="downloadAll"
                        selectedItem={toggleTabs}
                        selectItem={(value) => setToggleTabs(value)}
                    >
                        Выгрузить все
                    </MinusPhrasesTabsItem>
                </MinusPhrasesTabs>

            </Header>

            {
                (toggleTabs === "minusPhrases") && <MinusPhrases minusPhrases={minusPhrases} />
            }

            {
                (isLoading) && <Loader borderRadius="10px" />
            }

            <Footer>
                <MinusPhrasesLengthParagraph>Минус-слов: {minusPhrasesLength} </MinusPhrasesLengthParagraph>
            </Footer>
        
        </StyledSection>
    );
};



export default MinusPhraseSection;