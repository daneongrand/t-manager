import React, { useState } from 'react';
import { connect } from 'react-redux';
import { rename } from '../../actions/campaignsActions';
import styled from 'styled-components';
import { Check, Chevron, DeleteKeyword, Edit } from '../UI/icons/Icons';

const ItemAccordion = styled.article`
    width: 100%;
    background-color: ${props => props.theme.colors.dark_blue};
    border-radius: 10px;
    padding: 25px 20px;
    color: white;
    `
    
const ItemSummary = styled.div`
    display: grid;
    align-items: center;
    grid-template-columns: auto 30px 30px 30px;
    width: 100%;
`

const ItemDetails = styled.div`
    transition: 1s;
    height: ${props => props.height};
    visibility: ${props => (props.visibility) ? "none" : "hidden"};
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
    width: 24px;
    height: 24px;
    cursor: pointer;
    background-color: transparent;  
    border: 0;
    display: flex;
    justify-content: center;
    align-items: center;
`

const CampaignsItem = ({ campaignName, id, rename }) => {

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
                            <Check width="20" height="20" color="white" />
                        </Button>
                        : <Button
                        onClick={() => setIsChanging(!isChanging)}
                        >
                            <Edit width="20" height="20" color="white" />
                        </Button>
                }
                {
                    (isOpen)
                        ? <Button onClick={() => setIsOpen(false)}>
                            <Chevron width="20" height="20" color="white" />
                        </Button>
                        : <Button onClick={() => setIsOpen(true)}>
                        <Chevron width="20" height="20" color="white" />
                        </Button>
                }
                <Button>
                    <DeleteKeyword width="20" height="20" color="white" />
                </Button>
            </ItemSummary>
            {
                (isOpen)
                    ? <ItemDetails height="100%" visibility>
                        sdfffffffffffff
                    </ItemDetails>
                    : <ItemDetails height="0">
                        sdfffffffffffff
                    </ItemDetails>
            }
        </ItemAccordion>
    );
};

const MapDispatchToProps = {
    rename
}

export default connect(null, MapDispatchToProps)(CampaignsItem);