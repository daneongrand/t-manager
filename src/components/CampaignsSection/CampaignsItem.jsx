import React, { useState } from 'react';
import { connect } from 'react-redux';
import { rename, deleteCampaign } from '../../actions/campaignsActions';
import styled from 'styled-components';
import { Check, Chevron, DeleteKeyword, Edit } from '../UI/icons/Icons';

const ItemAccordion = styled.article`
    width: 100%;
    background-color: ${props => props.theme.colors.dark_blue};
    border-radius: 10px;
    padding: 25px 20px;
    color: white;
    margin-bottom: 10px;
    box-sizing: border-box;
    `
    
const ItemSummary = styled.div`
    display: grid;
    align-items: center;
    grid-template-columns: auto 30px 30px 30px;
    width: 100%;
`

const ItemDetails = styled.div`
    overflow: hidden;
    max-height: 0px;
    &[aria-expanded='true'] {
        transition: max-height 1s;
        max-height: 100px;
    }
`

const CampaignName = styled.p`
    width: 100%;
    margin: 0px;
`
const Input = styled.input`
    width: 100%;
    outline: none;
    background-color: transparent;
    border: 0;
    border-bottom: 3px solid ${props => props.theme.colors.blue};
    color: white;
`

const Button = styled.button`
    padding: 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 24px;
    height: 24px;
    cursor: pointer;
    background-color: transparent;
    border: 0;
`

const CampaignsItem = ({ campaignName, id, rename, deleteCampaign }) => {

    const [ isChanging, setIsChanging ] = useState(false)
    const [ name, setName ] = useState(campaignName)
    const [ isOpen, setIsOpen ] = useState(false)

    return (
        <ItemAccordion>
            <ItemSummary>
                {
                    (isChanging) 
                        ? <Input 
                            type="text"
                            value={name}
                            onChange={e => setName(e.target.value)}
                        />
                        : <CampaignName> {name} </CampaignName>
                }
                {
                    (isChanging)
                        ? <Button
                            onClick={() => {
                                setIsChanging(!isChanging)
                                rename(id, name)
                            }}
                        >
                            <Check width="24" height="24" color="white" />
                        </Button>
                        : <Button
                        onClick={() => setIsChanging(!isChanging)}
                        >
                            <Edit width="18" height="18" color="white" />
                        </Button>
                }
                <Button onClick={() => setIsOpen(!isOpen)}>
                    <Chevron width="24" height="24" color="white" />
                </Button>
                <Button
                    onClick={() => deleteCampaign(id)}
                >
                    <DeleteKeyword width="24" height="24" color="white" />
                </Button>
            </ItemSummary>
            {
                <ItemDetails aria-expanded={isOpen}>
                    test
                </ItemDetails>
            }
        </ItemAccordion>
    );
};

const MapDispatchToProps = {
    rename,
    deleteCampaign
}

export default connect(null, MapDispatchToProps)(CampaignsItem);