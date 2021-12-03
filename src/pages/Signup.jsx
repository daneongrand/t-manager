import React from 'react';

import styled from 'styled-components'
import SignupForm from '../components/SignupForm/SignupForm'

const Main = styled.main`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    @media ${props => props.theme.media.tablet} {
        display: grid;
        grid-template-columns: 5% 90% 5%;
    }
`

const Signup = () => {

    return (
        <Main>
            <SignupForm />
        </Main>
    );
};


export default Signup;