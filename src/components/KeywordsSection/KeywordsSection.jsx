import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import KeywordItem from './KeywordItem';
import { Section } from '../UI/section/Section';
import { Droppable } from 'react-beautiful-dnd';
import { AddIcon } from '../UI/icons/Icons';
import { toggleModalAddKeywords } from '../../actions/constructorActions'
import { useSelector } from 'react-redux';
import Loader from '../UI/loader/Loader';
import { useDispatch } from 'react-redux';
import FlatList from 'flatlist-react'

const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Footer = styled.footer`
`

const KeywordsLengthParagraph = styled.p`
    color: white;
`

const StyledSection = styled(Section)`
    align-self: center;
    justify-self: center;
    width: 90%;
    min-height: 90%;
    max-height: 90%;
    box-sizing: border-box;
    display: grid;
    grid-template-rows: 40px 1fr 30px;
    position: relative;
`


const KeywordsList = styled.ul`
    overflow: scroll;
    padding: 0;
    margin: 0;
    &::-webkit-scrollbar {
        width: 5px;
        height: 100%;
    }
    &::-webkit-scrollbar-thumb {
        background: rgba(24, 29, 49, 1);
        border-radius: 9em;
        box-shadow: inset 1px 1px 10px #f3faf7;
    }
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

const Title = styled.h1`
    color: white;
    font-size: 20px;
`


const KeywordsSection = ({ keywords, keywordsLength}) => {
    const isLoading = useSelector(state => state.keywords.isLoading)
    const dispatch = useDispatch()

    return (
        <StyledSection
            as="article"
            borderColor="linear-gradient(var(--rotate), #020050 0%, rgba(22, 82, 238, 0.823221) 26.62%, rgba(2, 87, 250, 0.702993) 46.57%, rgba(0, 126, 181, 0.849966) 73.52%, #00A0FA 100%)"
        >
            
            <Header>
                <Title>Ключевые слова</Title>
                <Button
                    fillHover="#00EEFD"
                    onClick={() => dispatch(toggleModalAddKeywords())}
                >
                    <AddIcon width="100%" height="100%" fill="white" />
                </Button>
            </Header>

            <Droppable
                droppableId="keywords"
                type="KEYWORDS"
            >
                {
                    (provided, snapshot) => (
                        <KeywordsList
                            ref={provided.innerRef}
                            {...provided.droppableProps}
                        >
                            <FlatList
                                renderOnScroll
                                list={keywords}
                                renderItem={(item, index) => (<KeywordItem key={'keywordId-' + item.keywordId} index={index} {...item} />)}
                                
                            />
                        </KeywordsList>
                    )
                }
            </Droppable>
            
            <Footer>
                <KeywordsLengthParagraph>Ключевых слов: {keywordsLength}</KeywordsLengthParagraph>
            </Footer>
            {
                (isLoading) && <Loader borderRadius="10px" />
            }
        </StyledSection>
    );
};

export default KeywordsSection;