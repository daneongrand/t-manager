import React, { useEffect, useState } from 'react';
import { ErrorParagraph } from '../UI/errors/errorParagraph';
import { Input } from '../UI/input/Input';
import { LabelParagraph } from '../UI/label/labelParagraph';

const EmailInput = ({ value, onChangeEmail = f => f, validate, onValidate = f => f }) => {

    const [ isValid, setIsValid ] = useState(validate)
    const [ validFailure, setValidFailure ] = useState('')

    useEffect(() => {
        onValidate(isValid)
    }, [isValid])

    useEffect(() => {
        if (value) {
            if (value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
                setIsValid(true)
                setValidFailure('')
            } else {
                setValidFailure('Введите настоящий email')
                setIsValid(false)
            }
        } else {
            setIsValid(true)
            setValidFailure('')
        }
    }, [value])

    return (
        <>
            <LabelParagraph isValid={isValid}>Ваш e-mail*</LabelParagraph>
            <Input isValid={isValid} value={value} onChange={e => onChangeEmail(e.target.value)} />
            <ErrorParagraph>{validFailure}</ErrorParagraph>
        </>
    );
};

export default EmailInput;