import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import useConfirmPassword from '../../hooks/useConfirmPassword';
import useInput from '../../hooks/useInput';
import { LOGIN_ROUTE } from '../../utils/constRoutes';
import Avatar from '../UI/avatar/Avatar'
import Checkbox from '../UI/checkbox/Checkbox';
import { ErrorParagraph } from '../UI/errors/errorParagraph';
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
    const firstName = useInput('')
    const lastName = useInput('')
    const nickName = useInput('', { isEmpty: true })
    const email = useInput('', { isEmail: true })
    const password = useInput('', { isPassword: true })
    const confirmPassword = useConfirmPassword('', password.value)
    const [checkbox, setCheckbox] = useState(false)
    const [formValid, setFormValid] = useState(false)


    useEffect(() => {
        console.log(nickName.inputValid)
    }, [nickName.value, email.value, password.value, confirmPassword.value])

    return (
        <Form>
            <Avatar 
                style={{ top: "-100px", gridColumn: "1/3" }} 
                onUploadAvatar={file => setAvatar(file)} 
            />
            <Title>Регистрация</Title>
            <Label>
                <LabelParagraph>Имя</LabelParagraph>
                <Input 
                    value={firstName.value} 
                    onChange={e => firstName.onChange(e)} 
                />
            </Label>
            <Label>
                <LabelParagraph>Фамилия</LabelParagraph>
                <Input 
                    value={lastName.value} 
                    onChange={e => lastName.onChange(e)} 
                />
            </Label>
            <Label rows>
                <LabelParagraph isValid={!(nickName.isDirty && !nickName.isEmpty)}>Никнейм *</LabelParagraph>
                <Input 
                    value={nickName.value} 
                    onChange={e => nickName.onChange(e)} 
                    onBlur={e => nickName.onBlur(e)}
                    isValid={!(nickName.isDirty && !nickName.isEmpty)}
                />
                {
                    (nickName.isDirty && !nickName.isEmpty) && <ErrorParagraph> Это обязательное поле </ErrorParagraph>
                }
            </Label>
            <Label rows>
                <LabelParagraph isValid={!(email.isDirty && !email.isEmail)}>E-mail *</LabelParagraph>
                <Input
                    type="email"
                    value={email.value} 
                    onBlur={e => email.onBlur(e)}    
                    onChange={e => email.onChange(e)} 
                    isValid={!(email.isDirty && !email.isEmail)}
                />
                {
                    (email.isDirty && !email.isEmail) && <ErrorParagraph> Введите корректный e-mail </ErrorParagraph> 
                }
            </Label>
            <Label>
                <LabelParagraph isValid={!((password.isDirty && !password.isPassword))}>Пароль *</LabelParagraph>
                <Input 
                    value={password.value} 
                    onChange={e => password.onChange(e)} 
                    onBlur={e => password.onBlur(e)}
                    isValid={!((password.isDirty && !password.isPassword))}
                />
                {
                    (password.isDirty && !password.isPassword) && <ErrorParagraph> Введите корректный пароль </ErrorParagraph>
                }
            </Label>
            <Label>
                <LabelParagraph isValid={confirmPassword.passwordsMatched}>Подтвердите пароль *</LabelParagraph>
                <Input 
                    value={confirmPassword.value} 
                    onChange={e => confirmPassword.onChange(e)} 
                    onBlur={e => confirmPassword.onBlur(e)}
                    isValid={confirmPassword.passwordsMatched}
                />
                {
                    (!confirmPassword.passwordsMatched) && <ErrorParagraph> Пароли не совпадают </ErrorParagraph>
                }
            </Label>
            <PrivacyPolicyParagraph>
                <Checkbox 
                    value={checkbox}
                    onChecked={value => setCheckbox(value)}
                />
                <PrivacyPolicyParagraph>
                    Я согласен с политикой конфиденциальности
                </PrivacyPolicyParagraph>
            </PrivacyPolicyParagraph>
            <RedirectToLogin to={LOGIN_ROUTE}>У вас уже есть аккаунт?</RedirectToLogin>
            <SubmitButton disabled={formValid} formValidate={formValid} />
        </Form>
    );
};

export default SignUpForm;