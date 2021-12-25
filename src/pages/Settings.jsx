import React from 'react';
import styled from 'styled-components'
import DevelopmentSection from '../components/DevelopmentSection/DevelopmentSection';

const Main = styled.main`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    @media ${props => props.theme.media.tablet} {
        box-sizing: border-box;
        padding-bottom: 30px;
        height: auto;
    }
`

const Settings = () => {
    return (
        <Main>
            <DevelopmentSection />
        </Main>
    );
};

export default Settings;