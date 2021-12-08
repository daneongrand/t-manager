import React, { useState } from 'react';
import styled from 'styled-components'
import { Section } from '../UI/section/Section';
import GroupsTabs from './GroupsTabs';
import GroupsTabsItem from './GroupsTabsItem';
import { AddIcon } from '../UI/icons/Icons';
import Groups from './Groups'
import GroupsDownload from './GroupsDownload';
import GroupsDownloadAll from './GroupsDownloadAll';


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

const Footer = styled.footer`
    
`


const GroupsSection = ({ title, groups }) => {

    const [ toggleTabs, setToggleTabs ] = useState('download')

    return (
        <StyledSection 
            as="article"
            borderColor="linear-gradient(var(--rotate), #00FF29 0%, #1FD94C 22.96%, #48A700 49.56%, #178900 71.63%, #025801 100%)"
        >
            <Header>
                <GroupsTabs>
                    <Button
                        fillHover="#00EEFD"
                    >
                        <AddIcon width="100%" height="100%" fill="white" />
                    </Button>
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
                (toggleTabs === 'groups') && <Groups groups={groups} />
            }

            {
                (toggleTabs === 'download') && <GroupsDownload groups={groups} />
            }

            {
                (toggleTabs === 'downloadAll') && <GroupsDownloadAll groups={groups} />
            }

            <Footer>
                footer
            </Footer>

        </StyledSection>
    );
};

export default GroupsSection;