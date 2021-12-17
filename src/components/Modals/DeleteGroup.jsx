import React from 'react';
import Modal from '../UI/modal/Modal';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { toggleModalDeleteGroup } from '../../actions/constructorActions';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import Loader from '../UI/loader/Loader';
import KeywordsService from '../../services/KeywordsService';
import { DELETING_GROUP, KEYWORDS_LOADED } from '../../utils/constTypes';
import { deleteGroup } from '../../actions/groupsActions';

const StyledModal = styled(Modal)`
`

const DeleteGroupContainer = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 50% 50%;
`

const Button = styled.button`
    cursor: pointer;
    padding: 10px 20px;
    color: white;
    background-color: transparent;
    border-radius: 8px;
    border: 2px solid ${props => props.theme.colors.blue};
    transition: .2s;
    &:hover {
        background-color: ${props => props.theme.colors.blue};
    }
`

const Cancel = styled(Button)`
    &:hover {
        border: 2px solid white;
        background-color: white;
        color: black;
    }
`

const Subtitle = styled.h2`
    grid-column: 1/4;
    color: white;
`


const DeleteGroup = () => {
    const [ isDeleting, setIsDeleting ] = useState(false)
    const dispatch = useDispatch()
    const selectedGroup = useSelector(state => state.constructors.selectedGroup)
    console.log(selectedGroup)
    return (
        <StyledModal
            width='auto'
            height='200px'
            title="Удаление группы"
        >
            <DeleteGroupContainer>
                <Subtitle>Удалить с сохранением ключевых слов в конструкторе?</Subtitle>
                <Button
                    onClick={() => {
                        setIsDeleting(true)
                        Promise.all(selectedGroup.groupKeywords.map(async (item) => {
                            await KeywordsService.editKeyword(item.keywordId, null, false)
                        })).then(() => {
                            dispatch({ type: KEYWORDS_LOADED, payload: selectedGroup.groupKeywords })
                            dispatch(deleteGroup(selectedGroup.groupId))
                        }).then(() => {
                            dispatch({ type: DELETING_GROUP, payload: selectedGroup })
                            dispatch(toggleModalDeleteGroup())
                            setIsDeleting(false)
                        })
                    }}
                >
                    С сохранением
                </Button>
                <Button
                    onClick={() => {
                        setIsDeleting(true)
                        Promise.all(selectedGroup.groupKeywords.map(async (item) => {
                            await KeywordsService.deleteKeyword(item.keywordId)
                        })).then(() => {
                            dispatch(deleteGroup(selectedGroup.groupId))
                        }).then(() => {
                            dispatch({ type: DELETING_GROUP, payload: selectedGroup })
                            dispatch(toggleModalDeleteGroup())
                            setIsDeleting(false)
                        })
                    }}
                >
                    Без сохранения
                </Button>
                <Cancel
                    onClick={() => dispatch(toggleModalDeleteGroup())}
                >
                    Отмена
                </Cancel>
            </DeleteGroupContainer>
            {
                isDeleting && <Loader borderRadius="10px" />
            }
        </StyledModal>
    );
};

export default DeleteGroup;