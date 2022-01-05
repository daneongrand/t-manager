import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import styled from 'styled-components'
import { signup } from '../../actions/userActions';
import useConfirmPassword from '../../hooks/useConfirmPassword';
import useInput from '../../hooks/useInput';
import AuthService from '../../services/AuthService';
import { CAMPAIGN_ROUTE, LOGIN_ROUTE } from '../../utils/constRoutes';
import Avatar from '../UI/avatar/Avatar'
import Checkbox from '../UI/checkbox/Checkbox';
import { ErrorParagraph } from '../UI/errors/errorParagraph';
import { Input } from '../UI/input/Input';
import { LabelParagraph } from '../UI/label/labelParagraph';
import { SubmitButton } from './SubmitButton';
import Loader from '../UI/loader/Loader'

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
    @media ${props => props.theme.media.tablet} {
        width: 100%;
        grid-template-columns: 1fr;
        grid-column-gap: 0;
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
    @media ${props => props.theme.media.mobile} {
        width: 100%;
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
    const email = useInput('', { isEmail: true, isEmpty: true })
    const password = useInput('', { isPassword: true, isEmpty: true })
    const confirmPassword = useConfirmPassword('', password.value)
    const [checkbox, setCheckbox] = useState(false)
    const [formValid, setFormValid] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [emailError, setEmailError] = useState('')
    const [nickNameError, setNickNameError] = useState('')

    const history = useHistory()
    const dispatch = useDispatch()

    const resetEmailError = () => setEmailError('')
    const resetNickNameError = () => setNickNameError('')

    useEffect(() => {
        (nickName.inputValid && email.inputValid && password.inputValid && checkbox && confirmPassword.passwordsMatched && !emailError && !nickNameError) ? setFormValid(true) : setFormValid(false)
    }, [nickName.inputValid, email.inputValid, password.inputValid, checkbox, confirmPassword.passwordsMatched, emailError, nickNameError])

    const onSignUp = e => {
        e.preventDefault()
        if (formValid) {
            setIsLoading(true)
            let formData = new FormData()
            formData.append('avatar', avatar)
            formData.append('firstName', firstName.value)
            formData.append('lastName', lastName.value)
            formData.append('nickName', nickName.value)
            formData.append('email', email.value)
            formData.append('password', password.value)
            dispatch(signup(formData))
                .then(data => {
                    setIsLoading(false)
                    history.push(CAMPAIGN_ROUTE)
                })
                .catch(({ errors }) => {
                    for(let err of errors) {
                        if (err.errCode === 1) {
                            setEmailError(err.errName)
                        }
                        if (err.errCode === 2) {
                            setNickNameError(err.errName)
                        }
                    }
                    setIsLoading(false)
                })
            
        }
    }

    
    return (
        <>
            {
                (isLoading)
                    ? <Loader />
                    : <Form
                        onSubmit={onSignUp}
                    >
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
                            <LabelParagraph isValid={!(nickName.isDirty && nickName.isEmpty) && !nickNameError}>Никнейм *</LabelParagraph>
                            <Input 
                                value={nickName.value} 
                                onChange={e => {
                                    nickName.onChange(e)
                                    if (nickNameError) {
                                        resetNickNameError()
                                    }
                                }} 
                                onBlur={e => nickName.onBlur(e)}
                                isValid={!(nickName.isDirty && nickName.isEmpty) && !nickNameError}
                            />
                            {
                                (nickName.isDirty && nickName.isEmpty) && <ErrorParagraph> Это обязательное поле </ErrorParagraph>
                            }
                            {
                                nickNameError && <ErrorParagraph> {nickNameError} </ErrorParagraph>
                            }
                        </Label>
                        <Label rows>
                            <LabelParagraph isValid={!(email.isDirty && email.emailError) && !emailError}>E-mail *</LabelParagraph>
                            <Input
                                type="email"
                                value={email.value} 
                                onBlur={e => email.onBlur(e)}    
                                onChange={e => {
                                    email.onChange(e)
                                    if (emailError) {
                                        resetEmailError()
                                    }
                                }} 
                                isValid={!(email.isDirty && email.emailError) && !emailError}
                            />
                            {
                                (email.isDirty && email.emailError) && <ErrorParagraph> Введите корректный e-mail </ErrorParagraph> 
                            }
                            {
                                emailError && <ErrorParagraph> {emailError} </ErrorParagraph>
                            }
                        </Label>
                        <Label>
                            <LabelParagraph isValid={!(password.isDirty && password.passwordError)}>Пароль *</LabelParagraph>
                            <Input 
                                type="password"
                                value={password.value} 
                                onChange={e => password.onChange(e)} 
                                onBlur={e => password.onBlur(e)}
                                isValid={!(password.isDirty && password.passwordError)}
                            />
                            {
                                (password.isDirty && password.passwordError) && <ErrorParagraph> Введите корректный пароль </ErrorParagraph>
                            }
                        </Label>
                        <Label>
                            <LabelParagraph isValid={!(!confirmPassword.passwordsMatched && confirmPassword.isDirty)}>Подтвердите пароль *</LabelParagraph>
                            <Input 
                                type="password"
                                value={confirmPassword.value} 
                                onChange={e => confirmPassword.onChange(e)} 
                                onBlur={e => confirmPassword.onBlur(e)}
                                isValid={!(!confirmPassword.passwordsMatched && confirmPassword.isDirty)}
                            />
                            {
                                (!confirmPassword.passwordsMatched && confirmPassword.isDirty) && <ErrorParagraph> Пароли не совпадают </ErrorParagraph>
                            }
                        </Label>
                        <PrivacyPolicyContainer>
                            <Checkbox 
                                value={checkbox}
                                onChecked={value => setCheckbox(value)}
                            />
                            <PrivacyPolicyParagraph>
                                Я согласен с политикой конфиденциальности
                            </PrivacyPolicyParagraph>
                        </PrivacyPolicyContainer>
                        <RedirectToLogin to={LOGIN_ROUTE}>У вас уже есть аккаунт?</RedirectToLogin>
                        <SubmitButton 
                            disabled={!formValid} 
                            formValidate={formValid} 
                        />
                    </Form>
            }
        </>
    );
};

export default SignUpForm;