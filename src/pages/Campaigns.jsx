import React, { useEffect, useState } from 'react';
import { getAll } from '../actions/campaignsActions';
import styled from 'styled-components';
import CampaignsItem from '../components/CampaignsSection/CampaignsItem';
import AddCampaign from '../components/CampaignsSection/AddCampaign';
import AddCampaignForm from '../components/CampaignsSection/AddCampaignForm';
import { useSelector, useDispatch } from 'react-redux';

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


const Campaigns = ({ }) => {
    const isLoading = useSelector(state => state.campaigns.isLoading)
    const campaigns = useSelector(state => state.campaigns.campaigns)
    const dispatch = useDispatch()
    const [ addCampaignToggle, setAddCampaignToggle ] = useState(false)
    
    useEffect(() => {
        console.log('render')
        // dispatch(getAll())
    }, [])
    
    const handleAddCampaignToggle = () => {
        setAddCampaignToggle(!addCampaignToggle)
    }
    
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



export default Campaigns;