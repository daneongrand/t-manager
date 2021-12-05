import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getAll, showLoader, hideLoader } from '../actions/campaignsActions';
import styled from 'styled-components';
import CampaignsItem from '../components/CampaignsSection/CampaignsItem';

const Main = styled.main`
    width: 100%;
    height: 100%;
    display: grid;
    align-items: center;
    justify-content: center;
`
const CampaignsSection = styled.section`
    width: 500px;
`


const Campaigns = ({ campaigns, getAll, isLoading }) => {
    console.log(isLoading)

    useEffect(() => {
        getAll()
    }, [])
    
    return (
        <Main>
            {
                (isLoading)
                    ? <h1> Loading </h1>
                    : <CampaignsSection>
                        {
                            campaigns.map(item => (<CampaignsItem key={item.id} {...item} />))
                        }
                    </CampaignsSection>
            }
        </Main>
    );
};

const MapStateToProps = state => {
    return {
        isLoading: state.campaigns.isLoading,
        campaigns: state.campaigns.campaigns
    }
}

const MapDispatchToProps = {
    getAll,
    showLoader,
    hideLoader
}

export default connect(MapStateToProps, MapDispatchToProps)(Campaigns);