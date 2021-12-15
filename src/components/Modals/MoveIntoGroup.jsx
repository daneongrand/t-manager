import React from 'react';
import Modal from '../UI/modal/Modal';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { Add } from '../UI/buttons/Add';
import { Cancel } from '../UI/buttons/Cancel';
import { moveItem, toggleModalGroups } from '../../actions/constructorActions';

const Form = styled.form`

`

const GroupsList = styled.ul`
    margin: 0;
    padding: 0;
    
`

const Group = styled.li`
    margin-bottom: 8px;
    box-sizing: border-box;
    list-style-type: none;
    border-radius: 7px;
    color: white;
    box-shadow: ${props => props.selected ? `0 0 10px ${props.theme.colors.green}` : 'none'} ;
    background-color: rgba(29, 29, 48, .9);
    font-weight: ${props => props.selected ? '800' : '400'};
    padding: 10px 15px;
    border: ${props => props.selected ? `2px solid ${props.theme.colors.green}` : `2px solid ${props.theme.colors.dark_blue}`};
    font-size: 20px;
    cursor: pointer;
`

const ButtonsContainer = styled.div`

`

const MoveIntoGroup = ({title}) => {
    const selectedKeyword = useSelector(state => state.constructors.selectedKeyword)
    const groups = useSelector(state => state.constructors.groups)
    const [ selectedGroup, setSelectedGroup ] = useState('')
    const dispatch = useDispatch()

    const onSelectGroup = item => (selectedGroup === item) ? setSelectedGroup('') : setSelectedGroup(item)

    console.log(selectedKeyword.keyword)
    return (
        <Modal
            title={title}
            onClose={() => dispatch(toggleModalGroups())}
        >
            <Form
                onSubmit={e => {
                    e.preventDefault()
                    dispatch(moveItem(selectedKeyword.keyword, {droppableId: selectedGroup, index: 0}))
                    dispatch(toggleModalGroups())
                }}
            >

                <ButtonsContainer>
                    <GroupsList>
                        {
                            groups.map((item, index) => (
                                <Group 
                                    key={'group-' + index}
                                    onClick={() => onSelectGroup('group-' + item.groupId)}
                                    selected={selectedGroup === 'group-' + item.groupId}
                                > 
                                    { item.groupName } 
                                </Group>)
                            )
                        }
                    </GroupsList>
                    <Add
                        value='Добавить'
                        disabled={!selectedGroup}
                    />
                    <Cancel
                        onClick={() => dispatch(toggleModalGroups())}
                    > Отмена </Cancel>
                </ButtonsContainer>
            </Form>
        </Modal>
    );
};

export default MoveIntoGroup;