import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { DeleteKeyword, ProfileLogo, UploadPhoto } from '../UI/icons/Icons';
import { Link, useHistory } from 'react-router-dom';
import { LOGIN_ROUTE } from '../../utils/constRoutes';
import { useDispatch } from 'react-redux';
import { signup } from '../../actions/userActions';

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

const UploadAvatarContainer = styled.div`
    grid-column: 1/3;
    justify-self: center;
    position: relative;
    top: -100px;
    width: 200px;
    height: 200px;
    background: ${props => props.theme.colors.blue};
    border-radius: 50%;
    border: 3px solid ${props => props.isFailed ? props.theme.colors.danger : props.theme.colors.blue};
    box-shadow: ${props => props.isFailed ? `0 0 15px ${props.theme.colors.danger}` : 'none'};

    &:after {
        box-sizing: border-box;
        position: absolute;
        content: '';
        top: 0;
        left: 0;
        width: 200px;
        height: 200px;
        border-radius: 50%;
        transition: .3s;
        
    }
    &:hover {
        & > label {
            opacity: 1;
            z-index: 1;
        }
    }
    &:hover:after {
        background-color: rgba(14, 14, 35, 0.95);
    }
`

const UploadAvatarLabel = styled.label`
    position: absolute;
    display: flex;
    opacity: 0;
    align-items: center;
    justify-content: center;
    width: 200px;
    height: 200px;
    top: 0;
    left: 0;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    
`

const UploadAvatarButton = styled.div`
    width: 50px;
    height: 50px;
    cursor: pointer;
`

const UploadAvatarInput = styled.input.attrs({
    type: 'file'

})`
    position: absolute;
    bottom: 20px;
    opacity: 0;
    visibility: hidden;

`

const UploadAvatarImg = styled.img`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    object-fit: cover;
    position: relative;
`

const AvatarUploadError = styled.p`
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 50%;
    background-color: #0E0E23;
    margin: 0;
    color: ${props => props.theme.colors.danger};
    width: 200px;
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
`

const Label = styled.label`
    grid-column: ${props => props.rows ? '1/3' : ''};
    @media ${props => props.theme.media.tablet} {
        grid-column: 1/3;
    }
`

const LabelParagraph = styled.p`
    width: 100%;
    color: white;
    font-weight: 300;
    font-size: 15px;
    margin: 0;
    margin-bottom: 10px;
`

const Input = styled.input`
    box-sizing: border-box;
    width: 100%;
    height: 45px;
    border: 2px solid ${props => props.theme.colors.blue};
    background-color: transparent;
    outline: none;
    border-radius: 15px;
    transition: .2s;
    padding: 8px 10px;
    color: white;
    font-size: 22px;
    &:focus-visible {
        box-shadow: 0px 0px 10px 1px ${props => props.theme.colors.blue};
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

const StyledRadioLabel = styled.label`
    display: flex;
    width: 15px;
    height: 15px;
    box-sizing: border-box;
`

const Radio = styled.input.attrs({
    type: 'checkbox'
})`
    position: relative;
    opacity: 0;
    &:focus-visible ~ div {
        box-shadow: 0px 0px 10px 1px ${props => props.theme.colors.blue};
    }
`

const CustomRadio = styled.div`
    box-sizing: border-box;
    width: 15px;
    height: 15px;
    border: 1px solid ${props => props.theme.colors.blue};
    border-radius: 3px;
    position: absolute;

    &:after {
        left: 1px;
        top: 1px;
        border-radius: 2px;
        position: absolute;
        content: '';
        width: 11px;
        height: 11px;
        background-color: ${props => props.isChecked ? props.theme.colors.blue : 'transparent'};
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

const SubmitButton = styled.input.attrs({
    type: 'submit',
    value: 'Зарегистрироваться'
})`
    width: 320px;
    box-sizing: border-box;
    cursor: ${props => props.formValidate ? 'cursor' : 'not-allowed'};
    padding: 11px 37px;
    font-weight: 500;
    font-size: 24px;
    line-height: 28px;
    color: ${props => props.formValidate ? 'white' : '#0E0E23'};
    border: 0;
    border-radius: 0px 15px 15px 15px;
    align-self: center;
    justify-self: center;
    background-color: ${props => props.formValidate ? props.theme.colors.blue : 'transparent'};
    border: ${props => props.formValidate ? `none` : `2px solid ${props.theme.colors.blue}`};
    transition: .2s;

    &:hover {
        box-shadow: ${props => props.formValidate ? `0px 0px 10px 1px ${props.theme.colors.blue}` : 'none'};
    }

    &:focus-visible {
        outline: none;
        box-shadow: 0px 0px 10px 1px ${props => props.theme.colors.blue};
    }

    @media ${props => props.theme.media.tablet} {
        grid-column: 1/3;
    }

    @media ${props => props.theme.media.mobile} {
        width: 100%;
    }
    
`

const EmailInput = styled(Input)`
    font-size: 22px;
    border: ${props => props.emailIsValidate ? `2px solid ${props.theme.colors.blue}` : `2px solid ${props.theme.colors.danger}`};
    &:focus-visible {
        box-shadow: 0px 0px 10px 1px ${props => props.emailIsValidate ? props.theme.colors.blue : props.theme.colors.danger};
    }
`



const PasswordInput = styled(Input).attrs({
    type: "password"
})`
    font-size: 22px;
    border: 2px solid ${props => props.passwordIsValidate ? props.theme.colors.blue : props.theme.colors.danger};
    &:focus-visible {
        box-shadow: 0px 0px 10px 1px ${props => props.passwordIsValidate ? props.theme.colors.blue : props.theme.colors.danger};
    }
`

const NickNameInput = styled(Input)`
    font-size: 22px;
    border: 2px solid ${props => props.nickNameIsValidate ? props.theme.colors.blue : props.theme.colors.danger};
    &:focus-visible {
        box-shadow: 0px 0px 10px 1px ${props => props.nickNameIsValidate ? props.theme.colors.blue : props.theme.colors.danger};
    }
`

const ConfirmButtonInput = styled(Input).attrs({
    type: "password"
})`
    font-size: 22px;
    border: 2px solid ${props => props.confirmPasswordIsValidate ? props.theme.colors.blue : props.theme.colors.danger};
    &:focus-visible {
        box-shadow: 0px 0px 10px 1px ${props => props.confirmPasswordIsValidate ? props.theme.colors.blue : props.theme.colors.danger};
    }
`

const ErrorParagraph = styled.p`
    margin: 0;
    margin-top: 10px;
    color: ${props => props.theme.colors.danger};
`




const SignUpForm = ({}) => {

    const [ avatar, setAvatar ] = useState(null)
    const [ avatarError, setAvatarError ] = useState('')
    const [ avatarFailed, setAvatarFailed ] = useState(false)
    const [ isChecked, setIsChecked ] = useState(false)
    const [ firstName, setFirstName ] = useState('')
    const [ lastName, setLastName ] = useState('')
    const [ nickName, setNickName ] = useState('')
    const [ nickNameIsValidate, setNickNameIsValidate ] = useState(true)
    const [ nickNameValidateError, setNickNameValidateError ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ emailIsValidate, setEmailIsValidate ] = useState(false)
    const [ emailValidateError, setEmailValidateError ] = useState('')
    const [ password, setPassword ] = useState('')
    const [ passwordIsValidate, setPasswordIsValidate ] = useState(false)
    const [ confirmPassword, setConfirmPassword ] = useState('')
    const [ confirmPasswordIsValidate, setConfirmPasswordIsValidate ] = useState(false)
    const [ formValidate, setFormValidate ] = useState(false)
    
    const dispatch = useDispatch()
    const history = useHistory()

    useEffect(() => {
        if ((email && emailIsValidate) && (password && passwordIsValidate) && (confirmPassword && confirmPasswordIsValidate) && (nickName) && (isChecked)) {
            console.log(true)
            setFormValidate(true)
        } else {
            console.log(false)
            setFormValidate(false)
        }
    }, [nickName, isChecked, email, emailIsValidate, password, passwordIsValidate, confirmPassword, confirmPasswordIsValidate])


    useEffect(() => {
        setNickNameIsValidate(true)
        setNickNameValidateError('')
    }, [nickName])

    useEffect(() => {
        if (email) {
            if (email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
                setEmailIsValidate(true)
                setEmailValidateError('')
            } else {
                setEmailValidateError('Введите настоящий email')
                setEmailIsValidate(false)
            }
        } else {
            setEmailIsValidate(true)
            setEmailValidateError('')
        }
    }, [email])

    useEffect(() => {
        if (password) {        
            if (password.match(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/)) {
                
                setPasswordIsValidate(true)
            } else {
                
                setPasswordIsValidate(false)
            }
        } else {
            setPasswordIsValidate(true)
        }
    }, [password])

    useEffect(() => {
        if (confirmPassword) {
            if (confirmPassword !== password) {
                setConfirmPasswordIsValidate(false)
            } else {
                setConfirmPasswordIsValidate(true)
            }
        } else {
            setConfirmPasswordIsValidate(true)
        }
    }, [confirmPassword])


    const uploadAvatar = e => {
        if (!e.target.files[0]) return 
        const avatar = e.target.files[0]
        const avatarName = avatar.name.split('.')[1]
        console.log(avatarName)
        if ((avatarName === 'jpg') || (avatarName === 'png') || (avatarName === 'jpeg')) {
            setAvatarFailed(false)
            setAvatarError('')
            setAvatar(avatar)
        } else {
            setAvatarFailed(true)
            setAvatarError('Загрузите .jpg, .png, .jpeg форматы!')
        }
    }

    const submitForm = async (e) => {
        e.preventDefault()
        const formData = new FormData()
        if (avatar) {
            formData.append('avatar', avatar)
        }
        dispatch(signup(formData, firstName, lastName, nickName, email, password))
            .then(() => {
                history.push('/campaigns')
            })
            .catch(({errors}) => {
                console.log(errors)
                for(let err of errors) {
                    if (err.errCode === 1) {
                        setFormValidate(false)
                        setEmailIsValidate(false)
                        setEmailValidateError('Данный email уже используется')
                    }

                    if (err.errCode === 2) {
                        setFormValidate(false)
                        setNickNameIsValidate(false)
                        setNickNameValidateError('Данный никнейм уже существует')
                    }
                    console.log(err)
                }
            })
    }


    return (
        <Form
            onSubmit={submitForm}
        >
            <UploadAvatarContainer
                isFailed={avatarFailed}
            >
                    {
                        (avatar)
                            ? <UploadAvatarImg src={URL.createObjectURL(avatar)} />
                            : <ProfileLogo width="100%" height="100%" color="#0E0E23" />
                    }
                    {
                        (avatarError) && <AvatarUploadError> {avatarError} </AvatarUploadError>
                    }
                    
                <UploadAvatarLabel>
                    <UploadAvatarInput
                        onChange={uploadAvatar}
                    />
                    <UploadAvatarButton>
                        <UploadPhoto width="100%" height="100%" color="#4255D4" />
                    </UploadAvatarButton>
                    {
                        avatar && <UploadAvatarButton
                            onClick={e => {
                                e.preventDefault()
                                setAvatarFailed(false)
                                setAvatarError('')
                                setAvatar(null)
                            }}
                        >
                            <DeleteKeyword width="100%" height="100%" color="#4255D4" />
                        </UploadAvatarButton>
                    }
                </UploadAvatarLabel>
            </UploadAvatarContainer>
            <Title>Регистрация</Title>
            <Label>
                <LabelParagraph>
                    Ваше имя
                </LabelParagraph>
                <Input value={firstName} onChange={e => setFirstName(e.target.value)} />
            </Label>
            <Label>
                <LabelParagraph>
                    Ваша фамилия
                </LabelParagraph>
                <Input value={lastName} onChange={e => setLastName(e.target.value)} />
            </Label>
            <Label rows >
                <LabelParagraph>
                    Ваш никнейм*
                </LabelParagraph>
                <NickNameInput nickNameIsValidate={nickNameIsValidate} value={nickName} onChange={e => setNickName(e.target.value)} />
                {
                    nickNameValidateError && <ErrorParagraph> { nickNameValidateError } </ErrorParagraph>
                }
            </Label>
            <Label rows >
                <LabelParagraph>
                    E-mail*
                </LabelParagraph>
                <EmailInput emailIsValidate={emailIsValidate} onChange={e => setEmail(e.target.value)} />
                {
                    emailValidateError && <ErrorParagraph> {emailValidateError} </ErrorParagraph>
                }
            </Label>
            <Label>
                <LabelParagraph>
                    Пароль*
                </LabelParagraph>
                <PasswordInput value={password} passwordIsValidate={passwordIsValidate} onChange={e => setPassword(e.target.value)} />
                {
                    !passwordIsValidate && <ErrorParagraph> Пароль должен содержать латинские буквы в верхнем и нижнем регистре, а также цифры </ErrorParagraph>
                }
            </Label>
            <Label>
                <LabelParagraph>
                    Подтвердите пароль*
                </LabelParagraph>
                <ConfirmButtonInput value={confirmPassword} confirmPasswordIsValidate={confirmPasswordIsValidate} onChange={e => setConfirmPassword(e.target.value)} />
                {
                    !confirmPasswordIsValidate && <ErrorParagraph> Пароли не совпадают </ErrorParagraph>
                }
            </Label>
            <PrivacyPolicyContainer>
                <StyledRadioLabel>
                    <Radio onChange={() => {setIsChecked(!isChecked)}} />
                    <CustomRadio isChecked={isChecked} />
                </StyledRadioLabel>
                <PrivacyPolicyParagraph>
                    Я согласен с политикой конфиденциальности
                </PrivacyPolicyParagraph>
            </PrivacyPolicyContainer>
            <RedirectToLogin to={LOGIN_ROUTE}>У вас уже есть аккаунт?</RedirectToLogin>
            <SubmitButton
                disabled={!formValidate}
                formValidate={formValidate}
            />
        </Form>
    );
};



export default SignUpForm;