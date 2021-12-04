import React from 'react';
import { connect } from 'react-redux'; 
import { addWord, deleteWord, addIntoMinusPhrases, toggleModalMinusPhrases } from '../../actions/constructorActions';
import { v4 } from 'uuid'
import styled from 'styled-components'
// import Section from '../UI/section/Section';
import { Section } from '../UI/section/Section';

const KeywordModalContainer = styled(Section)`
`

const ButtonsContainer = styled.div`
    margin-top: 20px;
    width: 100%;
    display: flex;
    justify-content: center;
`

const Button = styled.button`

`

const Word = styled.span`
    cursor: pointer;
    color: white;
    padding: 10px;
`


const KeywordModal = ({words, addWord, deleteWord, addIntoMinusPhrases, toggleModalMinusPhrases}) => {

    const selectWord = (e) => {
        console.log(e.target.style.boxShadow)
        if (!e.target.style.boxShadow) {
            addWord(e.target.innerHTML)
            e.target.style.boxShadow = "0px 0px 10px rgba(255, 0, 0, 0.5)"
            e.target.style.border = "1px solid red"
        } else {
            deleteWord(e.target.innerHTML)
            e.target.style.boxShadow = ""
            e.target.style.border = ""
        }
    }


    return (
        <KeywordModalContainer
            onKeyDown={e => console.log(e)}
        >
            {
                words.map(item => (
                    <Word key={v4()} onClick={selectWord}> {item} </Word>
                ))
            }
            <ButtonsContainer>
                <Button onClick={() => {
                    addIntoMinusPhrases()
                    toggleModalMinusPhrases()
                }}>Добавить</Button> 
                <Button onClick={toggleModalMinusPhrases}>Отмена</Button> 
            </ButtonsContainer>
        </KeywordModalContainer>
    );
};



const MapDispatchToProps = {
    addWord, 
    deleteWord,
    addIntoMinusPhrases,
    toggleModalMinusPhrases
}

export default connect(null, MapDispatchToProps)(KeywordModal);