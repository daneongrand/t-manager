import React from 'react';
import styled from 'styled-components';
import DevelopmentSection from '../components/DevelopmentSection/DevelopmentSection';
import Button from '../components/UI/buttons/Button';

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

const Analytics = () => {
    return (
        <Main>
            <DevelopmentSection />
        </Main>
    );
};

export default Analytics;