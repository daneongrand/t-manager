import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import { LOGIN_ROUTE } from '../../utils/constRoutes';
import Avatar from '../UI/avatar/Avatar'
import Checkbox from '../UI/checkbox/Checkbox';
import { Input } from '../UI/input/Input';
import { LabelParagraph } from '../UI/label/labelParagraph';
import EmailInput from './EmailInput';
import NickNameInput from './NickNameInput';
import PasswordInputBlock from './PasswordInputBlock';
import { SubmitButton } from './SubmitButton';

const Form = styled.form`
    width: 892px;
    background: rgba(14, 14, 35, 0.8);
    box-shadow: 0px 0px 20px 20px rgba(14, 14, 35, 0.35);
    border-radius: 20px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 100px;
    grid-row-gap: 12px;
    grid-column-gap: 20px;
    justify-content: center;
    padding: 0px 20px 40px;
    @media ${props => props.theme.media.desktop_small} {
        width: 100%;
        box-sizing: border-box;
        margin: 150px 0px;
    }
`

const Title = styled.h1`
    padding: 10px 0px;
    width: 100%;
    text-align: center;
    grid-column: 1/3;
    font-weight: 700;
    font-size: 30px;
    color: white;
    line-height: 35px;
`


const Label = styled.label`
    grid-column: ${props => props.rows ? '1/3' : ''};
    @media ${props => props.theme.media.tablet} {
        grid-column: 1/3;
    }
`

const RedirectToLogin = styled(Link)`
    align-self: center;
    justify-self: center;
    color: ${props => props.theme.colors.blue};
    box-sizing: border-box;
    text-align: center;
    padding: 10px 20px;
    border-radius: 15px;
    &:focus-visible {
        border: 2px solid ${props => props.theme.colors.blue};
        outline: none;
        box-shadow: 0px -2px 10px  ${props => props.theme.colors.blue};
    }
    @media ${props => props.theme.media.tablet} {
        grid-column: 1/3;
        
    }
    @media ${props => props.theme.media.mobile} {
        width: 100%;
    }

`

const PrivacyPolicyContainer = styled.div`
    grid-column: 1/3;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 15px 0;
    
`

const PrivacyPolicyParagraph = styled.span`
    margin: 0;
    margin-left: 10px;
    color: white;
`



const SignUpForm = () => {

    const [ avatar, setAvatar ] = useState(null)
    const [ firstName, setFirstName ] = useState('')
    const [ lastName, setLastName ] = useState('')
    const [ nickName, setNickName ] = useState('')
    const [ nickNameIsValid, setNickNameIsValid ] = useState(true)
    const [ email, setEmail ] = useState('')
    const [ emailIsValid, setEmailIsValid ] = useState(true)
    const [ password, setPassword ] = useState('')
    const [ passwordIsValid, setPasswordIsValid ] = useState(true)
    const [ confirmPassword, setConfirmPassword ] = useState('')
    const [ confirmPasswordIsValid, setConfirmPasswordIsValid ] = useState(true)
    const [ acceptedPrivacy, setAcceptedPrivacy ] = useState(false)
    const [ validForm, setValidForm ] = useState(false)


    useEffect(() => {
        if (nickName && nickNameIsValid && email && emailIsValid && password && passwordIsValid && confirmPassword && confirmPasswordIsValid && acceptedPrivacy ) {
            setValidForm(true)
        } else {
            setValidForm(false)
        }
    }, [nickName, nickNameIsValid, email, emailIsValid, password, passwordIsValid, confirmPassword, confirmPasswordIsValid, acceptedPrivacy])

    return (
        <Form>
            <Avatar style={{ top: "-100px", gridColumn: "1/3" }} onUploadAvatar={file => setAvatar(file)} />
            <Title>Регистрация</Title>
            <Label>
                <LabelParagraph>Ваше имя</LabelParagraph>
                <Input value={firstName} onChange={e => setFirstName(e.target.value)} />
            </Label>
            <Label>
                <LabelParagraph>Ваша фамилия</LabelParagraph>
                <Input value={lastName} onChange={e => setLastName(e.target.value)} />
            </Label>
            <Label rows>
                <NickNameInput 
                    value={nickName} 
                    validate={nickNameIsValid}
                    onChangeNickName={value => setNickName(value)} 
                />
            </Label>
            <Label rows>
                <EmailInput 
                    value={email} 
                    validate={emailIsValid}
                    onChangeEmail={value => setEmail(value)} 
                    onValidate={value => setEmailIsValid(value)}
                />
            </Label>
            <PasswordInputBlock
                valuePassword={password} 
                valueConfirmPassword={confirmPassword} 
                onChangePassword={value => setPassword(value)} 
                onChangeConfirmPassword={value => setConfirmPassword(value)} 
                onValidatePassword={value => setPasswordIsValid(value)}
                onValidateConfirmPassword={value => setConfirmPasswordIsValid(value)}
            />
            <PrivacyPolicyContainer>
                <Checkbox value={acceptedPrivacy} onChecked={value => setAcceptedPrivacy(value)} />
                <PrivacyPolicyParagraph>
                    Я согласен с политикой конфиденциальности
                </PrivacyPolicyParagraph>
            </PrivacyPolicyContainer>
            <RedirectToLogin to={LOGIN_ROUTE}>У вас уже есть аккаунт?</RedirectToLogin>
            <SubmitButton disabled={validForm} formValidate={validForm} />
        </Form>
    );
};

export default SignUpForm;