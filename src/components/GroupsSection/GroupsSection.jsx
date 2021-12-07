import React, { useState } from 'react';
import DndDraggableItem from '../UI/dnd/DndDraggableItem';
import DndDroppable from '../UI/dnd/DndDroppable';
// import Section from '../UI/section/Section';
import KeywordsSectionIntoGroups from './KeywordsSectionIntoGroups';
import styled from 'styled-components'
import { Section } from '../UI/section/Section';
import GroupsTabs from './GroupsTabs';
import GroupsTabsItem from './GroupsTabsItem';


const Header = styled.header`
    display: flex;
    width: 100%;
    margin-bottom: 10px;
    justify-content: space-between;
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

const Group = styled(DndDraggableItem)`
    color: #fff;
    padding: 5px;
    background: ${props => props.theme.colors.dark_blue};
    border-radius: 10px;
    padding: 20px 18px;
    max-width: 100%;
    margin-bottom: 5px;
`

const GroupsSection = ({ title, groups }) => {

    const [ toggleTabs, setToggleTabs ] = useState('groups')

    return (
        <Section borderColor="linear-gradient(var(--rotate), #00FF29 0%, #1FD94C 22.96%, #48A700 49.56%, #178900 71.63%, #025801 100%)">
            <Header>
                <GroupsTabs>
                    <GroupsTabsItem 
                        value="groups"
                        selectedItem={toggleTabs}
                        selectItem={(value) => setToggleTabs(value)}
                    >
                        Группы
                    </GroupsTabsItem>
                    <GroupsTabsItem 
                        value="download"
                        selectedItem={toggleTabs}
                        selectItem={(value) => setToggleTabs(value)}
                    >
                        Выгрузить
                    </GroupsTabsItem>
                    <GroupsTabsItem 
                        value="downloadAll"
                        selectedItem={toggleTabs}
                        selectItem={(value) => setToggleTabs(value)}
                    >
                        Выгрузить все
                    </GroupsTabsItem>
                </GroupsTabs>
            </Header>

            {
                (toggleTabs === 'groups') && <Article
                    droppableId='groups'
                    type="GROUPS"
                >
                    {
                        groups.map((item, index) => (
                            <Group
                                key={item.groupId}
                                draggableId={item.groupId} 
                                index={index}
                            >
                                <KeywordsSectionIntoGroups {...item} />
                            </Group>
                        ))
                    }
                </Article>
            }

            {
                (toggleTabs === 'download') && <article>
                    download
                </article>
            }
            
            {
                (toggleTabs === 'downloadAll') && <article>
                    downloadAll
                </article>
            }

        </Section>
    );
};

export default GroupsSection;