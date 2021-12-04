import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { connect } from 'react-redux';
import { login } from '../../actions/userActions';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { CAMPAIGN_ROUTE } from '../../utils/constRoutes';

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

const SubmitContainer = styled.div`
    margin-top: 30px;
    display: flex;
    width: 100%;
    align-items: center;
    @media ${props => props.theme.media.mobile} {
        flex-direction: column;
        margin-top: 40px;
    }
`

const StyledLink = styled(Link)`
    width: 50%;
    display: flex;
    justify-content: center;
    color: ${props => props.theme.colors.blue};
    @media ${props => props.theme.media.mobile} {
        margin-top: 10px;
    }
`

const StyledLinkSignUp = styled(StyledLink)`
    width: auto;
    margin-left: 5px;
    @media ${props => props.theme.media.mobile} {
        margin-top: 0px;
        margin-left: 0px;
    }
`

const Submit = styled.input.attrs(props => ({
    type: 'submit',
    value: 'Войти'
}))`
    cursor: pointer;
    width: 50%;
    padding: 18px 0px;
    border-radius: 30px 30px 30px 0px;
    font-weight: 700;
    color: white;
    background-color: ${props => props.theme.colors.blue};
    border: 0;
    font-size: 24px;
    @media ${props => props.theme.media.mobile} {
        width: 80%;
    }
`

const ParagraphContainer = styled.div`
    margin-top: 40px;
    display: flex;
    justify-content: center;
    width: 100%;
    @media ${props => props.theme.media.mobile} {
        flex-direction: column;
    }
`

const StyledParagraph = styled.p`
    margin: 0px;
    color: ${props => props.theme.colors.blue};
    justify-content: center;
    @media ${props => props.theme.media.mobile} {
        text-align: center;
    }
`

const LoginError = styled.section`
    padding: 20px;
    border: 1px solid ${props => props.theme.colors.danger};
    border-radius: 0px 30px 30px 30px;
    background-color: rgba(235, 0, 0, .15);
    color: ${props => props.theme.colors.danger};
`


const LoginForm = ({authorizate, loginError}) => {


    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')

    const history = useHistory()



    return (
        <Form>
            <Title>
                Авторизация
            </Title>
            {
                (loginError) && <LoginError>{loginError}</LoginError>
            }
            <Input 
                type="email" 
                placeholder="Ваш nickname или email"
                value={login}
                onChange={e => setLogin(e.target.value)}
            />
            <Input 
                type="password" 
                placeholder="Ваш пароль"
                value={password}
                onChange={e => setPassword(e.target.value)}
            />
            <SubmitContainer>
                <Submit 
                    onClick={async () => {
                        authorizate(login, password)
                        history.push(CAMPAIGN_ROUTE)
                    }}
                />
                <StyledLink>Забыли пароль?</StyledLink>
            </SubmitContainer>
            <ParagraphContainer>
                <StyledParagraph>У вас нет аккаунта?</StyledParagraph>
                <StyledLinkSignUp to='/signup'>Регистрация</StyledLinkSignUp>
            </ParagraphContainer>
        </Form>
    );
};

const MapDispatchToProps = {
    authorizate: login
}

const MapStateToProps = state => {
    return {
        loginError: state.user.loginError
    }
}

export default connect(MapStateToProps, MapDispatchToProps)(LoginForm);