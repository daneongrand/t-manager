import React, { useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import { rename, deleteCampaign } from '../../actions/campaignsActions';
import styled from 'styled-components';
import { Check, Chevron, DeleteKeyword, Edit } from '../UI/icons/Icons';
import { Link, useHistory } from 'react-router-dom';
import { spin } from '../UI/animation/animations';
import { useSelector } from 'react-redux';
import Button from '../UI/buttons/Button';

const ItemAccordion = styled.article`
    @property --rotate {
        syntax: "<angle>";
        initial-value: 0deg;
        inherits: false;
    }
    width: 100%;
    background-color: ${props => props.theme.colors.dark_blue};
    border-radius: 10px;
    position: relative;
    padding: 25px 20px;
    color: white;
    margin-bottom: 20px;
    box-sizing: border-box;
    &::before {
        content: '';
        position: absolute;
        left: -4px;
        top: -4px;
        right: -4px;
        bottom: -4px;
        border-radius: 10px;
        z-index: -1;
        background: ${props => props.isRenaming ? 'linear-gradient(var(--rotate), #00FF29 0%, #1FD94C 22.96%, #48A700 49.56%, #178900 71.63%, #025801 100%)' : 'inherit'};
        animation: ${spin} 5s linear infinite;
        transition: .3s;
    }
    &::after {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        right: 0;
        top: 5%;
        z-index: -1;
        background: ${props => props.isRenaming ? 'linear-gradient(var(--rotate), #00FF29 0%, #1FD94C 22.96%, #48A700 49.56%, #178900 71.63%, #025801 100%)' : 'inherit'};
        filter: blur(80px);
        transform: scale(.9);
        transition: opacity .5s;
        animation: ${spin} 5s linear infinite;
    }
    
`
    
const ItemSummary = styled.div`
    display: grid;
    align-items: center;
    grid-template-columns: auto 30px 30px 30px;
    width: 100%;
`

const ItemDetails = styled.div`
    max-height: 0;
    overflow: hidden;
    transition: .6s;
    &[aria-expanded="true"] {
        height: auto;
        max-height: 150px;
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

const StyledButton = styled.button`
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

const RedirectToConstructor = styled(Button)`

`

const CampaignsItem = ({ campaignName, id }) => {
    const isRenaming = useSelector(state => state.campaigns.isRenaming)
    console.log(isRenaming)
    const isDeleting = useSelector(state => state.campaigns.isDeleting)
    const dispatch = useDispatch()
    const [ isChanging, setIsChanging ] = useState(false)
    const [ name, setName ] = useState(campaignName)
    const [ isOpen, setIsOpen ] = useState(false)
    const history = useHistory()

    const showIndicators = () => {
        console.log('click')
        setIsOpen(!isOpen)
    }

    const addHistoryCampaign = (id) => {
        console.log(id)
        localStorage.setItem('historyCampaign', id)
    }


    return (
        <ItemAccordion isRenaming={(isRenaming.isRenaming && isRenaming.id === id)}>
            <ItemSummary>
                {
                    (isChanging) 
                        ? <Input 
                            disabled={(isRenaming.isRenaming && isRenaming.id === id)}
                            type="text"
                            value={name}
                            onChange={e => setName(e.target.value)}
                        />
                        : <CampaignName> {name} </CampaignName>
                }
                {
                    (isChanging)
                        ? <StyledButton
                            disabled={(isRenaming.isRenaming && isRenaming.id === id)}
                            onClick={() => {
                                dispatch(rename(id, name)).then(() => setIsChanging(!isChanging))
                            }}
                        >
                            <Check width="24" height="24" color="white" />
                        </StyledButton>
                        : <StyledButton
                        onClick={() => setIsChanging(!isChanging)}
                        >
                            <Edit width="18" height="18" color="white" />
                        </StyledButton>
                }
                <StyledButton onClick={showIndicators}>
                    <Chevron width="24" height="24" color="white" />
                </StyledButton>
                <StyledButton
                    onClick={() => dispatch(deleteCampaign(id))}
                >
                    <DeleteKeyword width="24" height="24" color="white" />
                </StyledButton>
            </ItemSummary>
            <ItemDetails aria-expanded={isOpen}>
                <Button
                    size="sm"
                    color="primary"
                    onClicked={() => {
                        addHistoryCampaign(id)
                        history.push(`/campaign_${id}/constructor`)
                    }}
                >
                    Перейти в группу
                </Button>
            </ItemDetails>
        </ItemAccordion>
    );
};

export default CampaignsItem;