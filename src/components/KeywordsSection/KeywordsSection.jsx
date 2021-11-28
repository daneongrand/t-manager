import React from 'react';
import { connect } from 'react-redux';
import DndDraggableItem from '../UI/dnd/DndDraggableItem';
import DndDroppable from '../UI/dnd/DndDroppable';
import styled from 'styled-components';
import KeywordItem from './KeywordItem';
import { AddIcon } from '../UI/icons/Icons'
// import Section from '../UI/section/Section';
import { Section } from '../UI/section/Section';
import Kitty from '../../img/Sleeping-Kitty.svg'

const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 5%;
`

const Article = styled(DndDroppable)`
    height: 90%;
    width: 100%;
    overflow: scroll;
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

const EmptyArticle = styled.article`
    max-width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const Title = styled.h1`
    color: black;
    font-size: 20px;
`

const Img = styled.img`
    width: 100%;
    max-height: 100%;
`

const KeywordsSection = ({title, keywords, color}) => {
    if (!keywords.length) {
        return (
            <Section borderColor="linear-gradient(var(--rotate), #020050 0%, rgba(22, 82, 238, 0.823221) 26.62%, rgba(2, 87, 250, 0.702993) 46.57%, rgba(0, 126, 181, 0.849966) 73.52%, #00A0FA 100%)" >
                <EmptyArticle>
                    <Title> Ключевых слов пока нет :( </Title>
                    <Img src={Kitty}></Img>
                </EmptyArticle>
            </Section>
        )
    }

    return (
        <Section borderColor="linear-gradient(var(--rotate), #020050 0%, rgba(22, 82, 238, 0.823221) 26.62%, rgba(2, 87, 250, 0.702993) 46.57%, rgba(0, 126, 181, 0.849966) 73.52%, #00A0FA 100%)">
            <Header>
                {title}
                <AddIcon width="40" height="40" color="white" />
            </Header>

            <Article 
                droppableId="keywords"
                type="KEYWORDS"
            >
                {
                    keywords.map((item, index) => (
                        <DndDraggableItem
                            key={item.keywordId}
                            draggableId={item.keywordId}
                            index={index}
                            isDraggingColor={ (!color) ? "#00EEFD" : color }
                        >
                            <KeywordItem index={index} {...item} />
                        </DndDraggableItem>
                    ))
                }
            </Article>
        </Section>
    );
};

const MapStateToProps = state => {
    return {
        color: state.dnd.color
    }
}

export default connect(MapStateToProps, null)(KeywordsSection);