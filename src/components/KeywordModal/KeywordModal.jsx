import React from 'react';
import styled from 'styled-components'
import Section from '../UI/section/Section';

const KeywordModalContainer = styled(Section)`
`

const Word = styled.span`
    color: white;
`


const KeywordModal = ({words}) => {

    const selectWord = () => {
        console.log('click')
    }


    return (
        <KeywordModalContainer>
            {
                words.map(item => (
                    <Word onClick={selectWord}> {item} </Word>
                ))
            }
        </KeywordModalContainer>
    );
};

export default KeywordModal;