import React, { useState } from 'react';
import { connect } from 'react-redux';
import DndDraggableItem from '../UI/dnd/DndDraggableItem';
import DndDroppable from '../UI/dnd/DndDroppable';
// import Section from '../UI/section/Section'
import { Section } from '../UI/section/Section';
import styled from 'styled-components'
import MinusPhrasesTabs from './MinusPhrasesTabs';
import MinusPhrasesTabsItem from './MinusPhrasesTabsItem';

const Header = styled.header`
    display: flex;
    justify-content: center;
    color: #fff;
    height: 10%;
`
const Article = styled(DndDroppable)`
    width: 100%;
    height: 90%;
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

const MinusPhrases = styled(DndDraggableItem)`
    color: #fff;
    padding: 5px;
    background: ${props => props.theme.colors.dark_blue};
    border-radius: 5px;
    max-width: 100%;
    margin-bottom: 5px;
`

const MinusPhraseSection = ({title, minusPhrases, color}) => {

    const [ toggleTabs, setToggleTabs ] = useState('minusPhrases')

    return (
        <Section borderColor="linear-gradient(var(--rotate),  #970000 0%, #A40347 28.65%, #8C0075 55.73%, #8C1C8C 73.96%, #DB01FF 100%)">

            <Header>
                <MinusPhrasesTabs>
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
                (toggleTabs === 'minusPhrases')
                    ? <Article
                        droppableId='minusPhrases'
                        type="KEYWORDS"
                    >
                        {
                            minusPhrases.map((item, index) => (
                                <MinusPhrases
                                    draggableId={item.keywordId}
                                    index={index}
                                    key={item.keywordId}
                                    isDraggingColor={(!color) ? "#EB0000" : color}
                                >
                                    <div>
                                        { item.keyword }
                                    </div>
                                </MinusPhrases>
                            ))
                        }
                    </Article>
                    : <h1>Download All</h1>

            }


        </Section>
    );
};

const MapStateToProps = state => {
    return {
        color: state.dnd.color
    }
}

export default connect(MapStateToProps, null)(MinusPhraseSection);