import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import { authorization } from '../../actions/userActions';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { CAMPAIGN_ROUTE, LOGIN_ROUTE } from '../../utils/constRoutes';
import Loader from '../UI/loader/Loader';
import { ErrorParagraph } from '../UI/errors/errorParagraph';

const Form = styled.form`
    position: relative;
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



const LoginForm = ({}) => {
    const [isLoading, setIsLoading] = useState(false)
    console.log(isLoading)
    const loginError = useSelector(state => state.user.loginError)
    const dispatch = useDispatch()
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const history = useHistory()
    const [loginErr, setLoginErr] = useState('')
    const [passwordErr, setPasswordErr] = useState('')



    const handleLogin = (e) => {
        e.preventDefault()
        dispatch(authorization(login, password))
            .then(() => {
                history.push(CAMPAIGN_ROUTE)
            })
            .catch(({ errors }) => {
                if (errors.errCode === 3) {
                    setLoginErr(errors.errName)
                }
                if (errors.errCode === 4) {
                    setPasswordErr(errors.errName)
                }
                setIsLoading(false)
            })
    }

    return (
        <Form
            onSubmit={handleLogin}
        >
            <Title>
                Авторизация
            </Title>
            {
                (loginError) && <LoginError>{loginError}</LoginError>
            }
            <Input 
                type="text" 
                placeholder="Ваш nickname или email"
                value={login}
                onChange={e => {
                    setLogin(e.target.value)
                    if (loginErr) {
                        setLoginErr('')
                    }
                }}
            />
            {
                (loginErr) && <ErrorParagraph>{loginErr}</ErrorParagraph>
            }
            <Input 
                type="password" 
                placeholder="Ваш пароль"
                value={password}
                onChange={e => {
                    setPassword(e.target.value)
                    if (passwordErr) {
                        setPasswordErr('')
                    }
                }}
            />
            {
                (passwordErr) && <ErrorParagraph>{passwordErr}</ErrorParagraph>
            }
            <SubmitContainer>
                <Submit />
                <StyledLink to={LOGIN_ROUTE}>Забыли пароль?</StyledLink>
            </SubmitContainer>
            <ParagraphContainer>
                <StyledParagraph>У вас нет аккаунта?</StyledParagraph>
                <StyledLinkSignUp to='/signup'>Регистрация</StyledLinkSignUp>
            </ParagraphContainer>
            {
                (isLoading) && <Loader borderRadius="30px 30px 30px 0px" />
            }
        </Form>
    );
};



export default LoginForm;