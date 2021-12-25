import React, { useEffect } from 'react';
import { LabelParagraph } from '../UI/label/labelParagraph';
import styled from 'styled-components';
import { Input } from '../UI/input/Input';
import { useState } from 'react';
import { ErrorParagraph } from '../UI/errors/errorParagraph'


const NickNameInput = ({ value, onChangeNickName = f => f, validate, onValidate = f => f }) => {
    
    const [ isValid, setIsValid ] = useState(validate)
    const [ validFailure, setValidFailure ] = useState('')

    useEffect(() => {
        onValidate(isValid)
    }, [isValid])

    return (
        <>
            <LabelParagraph>Ваш никнейм*</LabelParagraph>
            <Input value={value} onChange={e => onChangeNickName(e.target.value)} />
            <ErrorParagraph>{validFailure}</ErrorParagraph>
        </>
    );
};

export default NickNameInput;