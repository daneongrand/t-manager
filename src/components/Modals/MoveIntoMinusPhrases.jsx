import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { moveItem, toggleModalMinusPhrases } from '../../actions/constructorActions';
import Modal from '../UI/modal/Modal';
import styled from 'styled-components';
import { useState } from 'react';
import { Cancel } from '../UI/buttons/Cancel';
import { Add } from '../UI/buttons/Add';

const Form = styled.form`
    padding: 0px 30px 30px;
`


const SingleWordsList = styled.ul`
    margin: 0;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    width: 100%;
`

const SingleWord = styled.li`
    margin-right: 3px;
    box-sizing: border-box;
    list-style-type: none;
    border-radius: 7px;
    color: white;
    background-color: rgba(29, 29, 48, .9);
    font-weight: 400;
    padding: 10px 15px;
    border: 2px solid ${props => props.theme.colors.dark_blue};
    font-size: 20px;
    cursor: pointer;
`

const ButtonsContainer = styled.div`
    margin-top: 15px;
`


const MoveIntoMinusPhrases = ({title}) => {
    const dispatch = useDispatch()
    const selectedKeyword = useSelector(state => state.constructors.selectedKeyword)
    const modalPayload = useSelector(state => state.constructors.modalPayload)
    const singleWords = selectedKeyword.keyword.split(' ')
    const [ selectedWord, setSelectedWord ] = useState([]) 

    console.log(modalPayload)

    const onSelectWord = e => {
        const res = selectedWord.filter(item => item === e.target.innerHTML)
        if (res.length === 0) {
            e.target.style.fontWeight = '800'
            e.target.style.border = '2px solid red'
            e.target.style.color = 'red'
            e.target.style.backgroundColor = 'rgba(235, 0, 0, .15)'
            setSelectedWord([ e.target.innerHTML, ...selectedWord])
        } else {
            e.target.style.fontWeight = ''
            e.target.style.border = ''
            e.target.style.color = ''
            e.target.style.backgroundColor = ''
            const newList = selectedWord.filter(item => item !== e.target.innerHTML)
            setSelectedWord(newList)
        }
    }

    const onAddMinusPhrase = e => {
        e.preventDefault()
        dispatch(moveItem(modalPayload.source, modalPayload.destination))
        dispatch(toggleModalMinusPhrases())
        console.log('add')
    }


    return (
        <Modal 
            title={title}
            width="50%" 
            height='auto'
            onClose={() => dispatch(toggleModalMinusPhrases())}
        >
            <Form
                onSubmit={onAddMinusPhrase}
            >
                <SingleWordsList>
                    {
                        singleWords.map((item, index) => (
                            <SingleWord 
                                key={'singleWord-' + index}
                                onClick={onSelectWord}
                            > 
                                { item } 
                            </SingleWord>
                        ))
                    }
                </SingleWordsList>
                <ButtonsContainer>
                    <Add value="Добавить" />
                    <Cancel
                        onClick={() => dispatch(toggleModalMinusPhrases())}
                    >Отмена</Cancel>
                </ButtonsContainer>
            </Form>
        </Modal>
    );
};

export default MoveIntoMinusPhrases;