import React, { useState } from 'react';
import { connect } from 'react-redux';
import { create } from '../../actions/campaignsActions';
import styled from 'styled-components';
import { Check } from '../UI/icons/Icons';

const Form = styled.form`
    align-self: center;
    box-sizing: border-box;
    width: 100%;
    background-color: ${props => props.theme.colors.dark_blue};
    border-radius: 10px;
    padding: 25px 20px;
    display: grid;
    grid-template-columns: auto 24px;
    grid-column-gap: 15px;
`

const Input = styled.input`
    outline: none;
    background-color: transparent;
    border: 0;
    border-bottom: 3px solid ${props => props.theme.colors.blue};
    color: white;
`


const Button = styled.button`
    padding: 0px;
    width: 24px;
    height: 24px;
    cursor: pointer;
    background-color: transparent;  
    border: 0;
    display: flex;
    justify-content: center;
    align-items: center;
`

const AddCampaignForm = ({create, onSubmitOk}) => {

    const [ nameCampaign, setNameCampaign ] = useState('')

    return (
        <Form
            onSubmit={e => {
                e.preventDefault()
                create(nameCampaign)
                setNameCampaign('')
                onSubmitOk()
            }}
        >
            <Input 
                type="text"
                placeholder="Название кампании"
                value={nameCampaign}
                onChange={e => setNameCampaign(e.target.value)}
            />
            
            <Button
                type='submit'
            >
                <Check width="24" height="24" color="white" />
            </Button>
        </Form>
    );
};

const MapDispatchToProps = {
    create
}

export default connect(null, MapDispatchToProps)(AddCampaignForm);