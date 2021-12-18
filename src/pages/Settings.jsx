import React from 'react';
import styled from 'styled-components'
import SettingsContainer from '../components/SettingsSection/SettingsContainer';

const Main = styled.main`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`


const Settings = () => {
    return (
        <Main>
            <SettingsContainer />
        </Main>
    );
};

export default Settings;