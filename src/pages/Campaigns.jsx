import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { getAll, showLoader, hideLoader } from '../actions/campaignsActions';
import styled from 'styled-components';
import CampaignsItem from '../components/CampaignsSection/CampaignsItem';
import AddCampaign from '../components/CampaignsSection/AddCampaign';
import AddCampaignForm from '../components/CampaignsSection/AddCampaignForm';

const Main = styled.main`
    width: 100%;
    height: 100%;
    display: grid;
    align-items: start;
    justify-content: center;
    grid-template-rows: 100px auto;
`
const CampaignsSection = styled.section`
    width: 500px;
`


const Campaigns = ({ campaigns, getAll, isLoading }) => {

    const [ addCampaignToggle, setAddCampaignToggle ] = useState(false)

    const handleAddCampaignToggle = () => {
        setAddCampaignToggle(!addCampaignToggle)
    }

    useEffect(() => {
        getAll()
    }, [])
    
    return (
        <Main>
            {
                (addCampaignToggle)
                    ? <AddCampaignForm 
                        onSubmitOk={handleAddCampaignToggle}
                    /> 
                    : <AddCampaign 
                        onClick={handleAddCampaignToggle}
                    />
            }
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
    hideLoader,

}

export default connect(MapStateToProps, MapDispatchToProps)(Campaigns);