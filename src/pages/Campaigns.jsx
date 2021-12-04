import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getAll, showLoader, hideLoader } from '../actions/campaignsActions';
import styled from 'styled-components';

const Main = styled.main`
    width: 100%;
    height: 100%;
    display: grid;
    align-items: center;
    justify-content: center;
`

const Campaigns = ({ getAll, showLoader, isLoading }) => {
    console.log(isLoading)

    useEffect(async () => {
        await showLoader()
        await getAll()
        hideLoader()
    }, [])

    return (
        <Main>
            {
                (isLoading)
                    ? <h1> Loading </h1>
                    : <h1> Main </h1>
            }
        </Main>
    );
};

const MapStateToProps = state => {
    return {
        isLoading: state.campaigns.isLoading
    }
}

const MapDispatchToProps = {
    getAll,
    showLoader,
    hideLoader
}

export default connect(MapStateToProps, MapDispatchToProps)(Campaigns);