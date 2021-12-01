import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { signup } from '../../redux/actions';
import styled from 'styled-components';

const Form = styled.form`
    width: 490px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 70px 64px;
    background-color: ${props => props.theme.colors.dark_blue};
    border-radius: 30px 30px 30px 0px;
    box-shadow: 0px 0px 20px ${props => props.theme.colors.dark_blue};
    
    @media ${props => props.theme.media.tablet} {
        width: 100%;
        box-sizing: border-box;
        padding: 70px 30px;
        grid-column: 2;
    }
`

const Title = styled.h1`
    font-weight: 700;
    font-size: 30px;
    color: white;
    line-height: 35px;
    margin-bottom: 20px;
`

const Input = styled.input`
    width: 100%;
    outline: none;
    background-color: transparent;
    border: 0;
    border-bottom: 3px solid ${props => (props.valid) ? props.theme.colors.blue : props.theme.colors.danger};
    color: white;
    font-size: 24px;
    &::placeholder {
        font-size: 20px;
    }

`

const InputContainer = styled.section`
    width: 100%;
    margin-top: 10px;
`

const Submit = styled.input.attrs(props => ({
    type: 'submit',
    value: 'Зарегистрироваться'
}))`
    margin-top: 40px;
    cursor: pointer;
    width: 70%;
    padding: 18px 0px;
    border-radius: 30px 30px 30px 0px;
    font-weight: 700;
    color: white;
    background-color: ${props => props.theme.colors.blue};
    border: 0;
    font-size: 24px;
    @media ${props => props.theme.media.mobile} {
        width: 80%;
        font-size: 20px;
    }
`

const Warning = styled.p`
    margin: 5px 0px 0px 5px; 
    color: ${props => props.theme.colors.danger};
    font-size: 12px;
    text-align: left;
`

const LogoutError = styled.section`
    padding: 20px;
    border: 1px solid ${props => props.theme.colors.danger};
    border-radius: 0px 30px 30px 30px;
    background-color: rgba(235, 0, 0, .15);
    color: ${props => props.theme.colors.danger};
`



const SignUpForm = ({ registration, signupError }) => {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [nickName, setNickName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')


    const [validConfirmPassword, setValidConfirmPassword] = useState(true)

    
    useEffect(() => {
        if (confirmPassword !== password) {
            console.log('Пароль не совпадает')
            setValidConfirmPassword(false)
        } else {
            console.log('Пароль совпадает')
            setValidConfirmPassword(true)
        }
    }, [confirmPassword])

    const signUp = async (e) => {
        e.preventDefault()
        registration(firstName, lastName, nickName, email, password)
    }

    return (
        <Form>
            <Title>Регистрация</Title>
            {
                (signupError) && <LogoutError>  {signupError} </LogoutError>
            }
            <InputContainer>
                <Input 
                    type="text"     
                    placeholder="Имя*"
                    valid
                    value={firstName}
                    onChange={e => setFirstName(e.target.value)} 
                />
            </InputContainer>
            <InputContainer>
                <Input 
                    type="text"     
                    placeholder="Фамилия*"
                    valid
                    value={lastName}
                    onChange={e => setLastName(e.target.value)} 
                />
            </InputContainer>
            <InputContainer>
                <Input 
                    type="text"     
                    placeholder="Никнейм*"
                    valid
                    value={nickName}
                    onChange={e => setNickName(e.target.value)} 
                />
            </InputContainer>
            <InputContainer>
                <Input 
                    type="email"    
                    placeholder="Email*"
                    valid
                    value={email}
                    onChange={e => setEmail(e.target.value)} 
                />
            </InputContainer>
            <InputContainer>
                <Input 
                    type="password"     
                    placeholder="Пароль*"
                    valid
                    value={password}
                    onChange={e => {
                        setPassword(e.target.value)
                    }} 
                />
            </InputContainer>
            <InputContainer>
                <Input 
                    type="password"     
                    placeholder="Повторите пароль"
                    value={confirmPassword}
                    valid={validConfirmPassword}
                    onChange={e => {
                        setConfirmPassword(e.target.value)
                    }} 
                />
                <Warning>
                    {
                        (!validConfirmPassword) && 'Пароль не совпадает'
                    }
                </Warning>
            </InputContainer>
            <Submit 
                onClick={signUp}
            />
        </Form>
    );
};

const MapDispatchToProps = {
    registration: signup
}

const MapStateToProps = state => {
    return {
        signupError: state.user.signupError
    }
}

export default connect(MapStateToProps, MapDispatchToProps)(SignUpForm);