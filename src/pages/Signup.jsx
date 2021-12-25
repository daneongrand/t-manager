import React from 'react';
import styled from 'styled-components'
import SignupForm from '../components/SignupForm/SignupForm'

const Main = styled.main`
    width: 100%;
    padding: 150px 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    @media ${props => props.theme.media.desktop_small} {
        display: grid;
        grid-template-columns: 90%;
        height: auto;
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