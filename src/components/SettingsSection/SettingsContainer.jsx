import React from 'react';
import { useState } from 'react';
import styled from 'styled-components'
import { ProfileLogo } from '../UI/icons/Icons';
import ProfileSettings from './ProfileSettings';

const StyledSettingsContainer = styled.article`
    width: 70%;
    height: 70%;
    background-color: #181D31;
    border-radius: 20px;
    display: grid;
    grid-template-columns: 30% 70%;
    grid-template-rows: 100%;
    
`

const SettingsNav = styled.nav`
    width: 100%;
    height: 100%;
`

const SettingsNavTitle = styled.h1`
    font-size: 24px;
    color: white;
    font-weight: 300;
    padding: 20px;
`

const SettingsNavList = styled.ul`
    padding: 0 20px;
    margin: 0;
`

const SettingsNavItem = styled.li`
    list-style-type: none;
`

const SettingsNavButton = styled.button`
    cursor: pointer;
    width: 100%;
    padding: 5px 10px;
    background-color: transparent;
    border: 0;
    display: grid;
    align-items: center;
    grid-template-columns: 24px 1fr;
    grid-column-gap: 14px;
    font-size: 22px;
    font-weight: 300;
    color: white;
    text-align: left;
    border-radius: 8px;
    transition: .2s;
    &:hover {
        background: rgba(196, 196, 196, 0.1);
    }
`

const SettingsIndicatorsContainer = styled.div`
    width: 100%;
    height: 100%;
    border-radius: 0px 20px 20px 0px;
    background-color: #0A1026;
    display: grid;
    grid-template-rows: 1fr auto;
`

const SettingsIndicatorsTitle = styled(SettingsNavTitle)`

`



const SettingsContainer = () => {
    const [ activeTab, setActiveTab ] = useState('')
    return (
        <StyledSettingsContainer>
            <SettingsNav>
                <SettingsNavTitle>
                    Настройки
                </SettingsNavTitle>
                <SettingsNavList>
                    <SettingsNavItem>
                        <SettingsNavButton
                            onClick={() => setActiveTab('profile')}
                        >
                            <ProfileLogo width="100%" height="100%" color="#4255D4" />
                            Профиль
                        </SettingsNavButton>
                    </SettingsNavItem>
                </SettingsNavList>
            </SettingsNav>
            {
                (activeTab === 'profile') && <ProfileSettings />
            }
        </StyledSettingsContainer>
    );
};

export default SettingsContainer;