import React, { useState } from 'react';
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
    border-bottom: 3px solid ${props => props.theme.colors.blue};
    color: white;
    font-size: 24px;
    margin-top: 10px;
    &::placeholder {
        font-size: 20px;
    }
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

const SignUpForm = () => {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [nickName, setNickName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    return (
        <Form>
            <Title>Регистрация</Title>
            <Input 
                type="text"     
                placeholder="Имя"
                value={firstName}
                onChange={e => setFirstName(e.target.value)} 
            />
            <Input 
                type="text"     
                placeholder="Фамилия"
                value={lastName}
                onChange={e => setLastName(e.target.value)} 
            />
            <Input 
                type="text"     
                placeholder="Никнейм"
                value={nickName}
                onChange={e => setNickName(e.target.value)} 
            />
            <Input 
                type="email"    
                placeholder="Email"
                value={email}
                onChange={e => setEmail(e.target.value)} 
            />
            <Input 
                type="password"     
                placeholder="Пароль"
                value={password}
                onChange={e => setPassword(e.target.value)} 
            />
            <Input 
                type="password"     
                placeholder="Повторите пароль"
                value={confirmPassword}
                onChange={e => setConfirmPassword(e.target.value)} 
            />
            <Submit />
        </Form>
    );
};

export default SignUpForm;