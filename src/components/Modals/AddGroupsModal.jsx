import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { toggleModalAddGroups } from '../../actions/constructorActions';
import Loader from '../UI/loader/Loader';
import Modal from '../UI/modal/Modal';
import { createGroup } from '../../actions/groupsActions';
import { GROUPS_LOADED, TOGGLE_MODAL_ADD_GROUPS, TOGGLE_MODAL_ADD_KEYWORDS } from '../../utils/constTypes';

const Form = styled.form`
    box-sizing: border-box;
    padding: 30px;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`

const InputNameGroup = styled.input.attrs({
    type: 'text',
    placeholder: 'Название группы'
})`
    width: 100%;
    outline: none;
    background-color: transparent;
    border: 0;
    border-bottom: 3px solid ${props => props.theme.colors.blue};
    color: white;  
    font-size: 22px;
    font-weight: 400;
`

const ButtonsContainer = styled.div`
    margin-top: 20px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`

const Add = styled.input.attrs({
    type: 'submit',
    value: 'Добавить группу'
})`
    margin-left: 10px;
    cursor: pointer;
    background-color: rgba(29, 29, 48, .9);
    padding: 8px 35px;
    border-radius: 8px;
    border: 0;
    color: black;
    font-size: 16px;
    font-weight: 800;
    transition: .1s;
    &:hover {
        color: white;
        background-color: ${props => props.theme.colors.blue};
    }
`

const Cancel = styled.button`
    font-size: 16px;
    font-weight: 800;
    cursor: pointer;
    border: 0;
    padding: 8px 35px;
    border-radius: 8px;
    background-color: rgba(29, 29, 48, .9);
    transition: .1s;
    &:hover {
        background-color: white;
    }
`

const AddGroupsModal = ({ campaignId }) => {
    const dispatch = useDispatch()
    const isLoading = useSelector(state => state.groups.modalIsLoading)
    const [ groupName, setGroupName ] = useState('')
    return (
        <Modal
            width='500px'
            height='auto'
            onClose={() => dispatch(toggleModalAddGroups())}
            title='Создание новой группы'
        >
            <Form
                onSubmit={e => {
                    e.preventDefault()
                    dispatch(createGroup(campaignId, groupName))
                        .then((data) => {
                            dispatch({
                                type: GROUPS_LOADED,
                                payload: [ data ]
                            })
                            dispatch({
                                type: TOGGLE_MODAL_ADD_GROUPS
                            })
                        })
                }}
            >
                <InputNameGroup
                    value={groupName}
                    onChange={e => setGroupName(e.target.value)}
                />
                <ButtonsContainer>
                    <Cancel
                        onClick={() => dispatch(toggleModalAddGroups())}
                    >Отмена</Cancel>
                    <Add />
                </ButtonsContainer>
            </Form>
            {
                (isLoading) && <Loader borderRadius="10px" />
            }
        </Modal>
    );
};

export default AddGroupsModal;