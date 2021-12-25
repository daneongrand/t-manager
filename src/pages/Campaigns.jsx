import React, { useEffect, useState } from 'react';
import { getAll } from '../actions/campaignsActions';
import styled from 'styled-components';
import CampaignsItem from '../components/CampaignsSection/CampaignsItem';
import AddCampaignForm from '../components/CampaignsSection/AddCampaignForm';
import { useSelector, useDispatch } from 'react-redux';
import Loader from '../components/UI/loader/Loader'
import Button from '../components/UI/buttons/Button';

const Main = styled.main`
    width: 100%;
    height: 100%;
    display: grid;
    align-items: start;
    justify-content: center;
    grid-template-rows: 100px auto;
    position: relative;
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
        dispatch(getAll())
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
                    : <Button
                        color="primary"
                        style={{
                            maxWidth: "300px",
                            alignSelf: "center",
                            justifySelf: "center"
                        }}
                        onClicked={() => handleAddCampaignToggle()}
                    > Добавить кампанию </Button>
            }
            {
                (isLoading)
                    ? <Loader />
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