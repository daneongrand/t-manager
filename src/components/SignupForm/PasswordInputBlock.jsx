import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { ErrorParagraph } from '../UI/errors/errorParagraph';
import { Input } from '../UI/input/Input';
import { LabelParagraph } from '../UI/label/labelParagraph';

const Label = styled.label`
    grid-column: ${props => props.rows ? '1/3' : ''};
    @media ${props => props.theme.media.tablet} {
        grid-column: 1/3;
    }
`

const Password = styled(Input).attrs({
    type: 'password'
})`
`


const PasswordInputBlock = ({ valuePassword, valueConfirmPassword, onChangePassword = f => f, onChangeConfirmPassword = f => f, onValidatePassword = f => f, onValidateConfirmPassword = f => f }) => {

    const [ isValidPassword, setIsValidPassword ] = useState(false)
    const [ validPasswordFailure, setValidPasswordFailure ] = useState('')
    const [ isValidConfirmPassword, setIsValidConfirmPassword ] = useState(false)
    const [ validConfirmPasswordFailure, setValidConfirmPasswordFailure ] = useState('')

    useEffect(() => {
        onValidatePassword(isValidPassword)
    }, [isValidPassword])

    useEffect(() => {
        onValidateConfirmPassword(isValidConfirmPassword)
    }, [isValidConfirmPassword])

    useEffect(() => {
        if (valuePassword) {        
            if (valuePassword.match(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/)) {   
                setIsValidPassword(true)
                setValidPasswordFailure('')
            } else {
                setIsValidPassword(false)
                setValidPasswordFailure('Пароль должен содержать латинские буквы в верхнем и нижнем регистре, а также цифры')
            }
        } else {
            setIsValidPassword(true)
            setValidPasswordFailure('')
        }
    }, [valuePassword])

    useEffect(() => {
        if (valueConfirmPassword) {
            if (valueConfirmPassword === valuePassword) {
                setIsValidConfirmPassword(true)
                setValidConfirmPasswordFailure('')
            } else {
                setIsValidConfirmPassword(false)
                setValidConfirmPasswordFailure('Пароли не совпадают')
            }
        } else {
            setIsValidConfirmPassword(true)
            setValidConfirmPasswordFailure('')
        }
    }, [valueConfirmPassword, valuePassword])

    return (
        <>
            <Label>
                <LabelParagraph isValid={isValidPassword}>Пароль*</LabelParagraph>
                <Password isValid={isValidPassword} value={valuePassword} onChange={e => onChangePassword(e.target.value)} />
                <ErrorParagraph>{validPasswordFailure}</ErrorParagraph>
            </Label>
            <Label>
                <LabelParagraph isValid={isValidConfirmPassword}>Подтверждение пароля*</LabelParagraph>
                <Password isValid={isValidConfirmPassword} value={valueConfirmPassword} onChange={e => onChangeConfirmPassword(e.target.value)} />
                <ErrorParagraph>{validConfirmPasswordFailure}</ErrorParagraph>
            </Label>
        </>
    );
};

export default PasswordInputBlock;