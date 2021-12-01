import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router';
import styled from 'styled-components'
import SignupForm from '../components/SignupForm/SignupForm'
import { CAMPAIGN_ROUTE } from '../utils/constRoutes';

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

const Signup = ({isAuth}) => {

    let history = useHistory()

    useEffect(() => {
        if (isAuth) {
            history.push(CAMPAIGN_ROUTE)
        }
    })

    return (
        <Main>
            <SignupForm></SignupForm>
        </Main>
    );
};

const MapStateToProps = state => {
    return {
        isAuth: state.user.isAuth
    }
}

export default connect(MapStateToProps, null)(Signup);