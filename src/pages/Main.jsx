import React from 'react';
import styled from 'styled-components'
import { Link } from 'react-router-dom';
import { LOGIN_ROUTE, SIGNUP_ROUTE } from '../utils/constRoutes';
import logo from '../img/t-manager-logo.png'
import windowImg from '../img/t-manager-window.png'

const MainContainer = styled.main`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-rows: 10% 80% 10%;
    background: radial-gradient(50% 50% at 50% 50%, #000A78 0%, #000537 100%), radial-gradient(50% 50% at 50% 50%, #000A78 0%, #000537 100%); 
    @media ${props => props.theme.media.desktop_small} {
        grid-template-rows: 10% 90%;
    }  
`
const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-around;
`

const Article = styled.article`
    box-sizing: border-box;
    width: 100%;
    display: grid;
    padding: 0 40px;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    grid-column-gap: 100px;
    @media ${props => props.theme.media.desktop_small} {
        grid-template-columns: 100%;
        justify-items: center;
    } 
`

const Title = styled.h1`
    font-weight: 300;
    font-size: 58px;
    line-height: 75px;
    color: #A4ADFF;
    margin-bottom: 39px;
    @media ${props => props.theme.media.desktop_small} {
        font-size: 50px;
        line-height: 64px;
        text-align: center;
    }   
`


const Logo = styled.div`
    display: grid;
    grid-template-columns: 52px auto;
    align-items: center;
    grid-column-gap: 6.5px;
`

const LogoImg = styled.img`
    width: 52px;
    height: 50px;
`

const TitleContainer = styled.div`
    max-width: 700px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    @media ${props => props.theme.media.desktop_small} {
        grid-row-start: 1;
        align-items: center;
    } 
`

const LogoText = styled.span`
    font-family: 'Questrial', sans-serif;
    color: #4A61FA;
    font-size: 24px;
    line-height: 25px;
`

const Button = styled(Link)`
    cursor: pointer;
    padding: 11px 35px;
    background: #4255D4;
    border-radius: 15px 0px 15px 10px;
    color: white;
    font-size: 24px;
    text-decoration: none;
    font-weight: 500;
    transition: .4s;
    &:hover {
        filter: drop-shadow(0px 0px 20px rgba(66, 85, 212, 0.4)) drop-shadow(0px 25px 30px rgba(66, 85, 212, 0.4));
    }
`

const TitleButton = styled(Button)`
    box-sizing: border-box;
    max-width: 280px;
    padding: 18px 54px;
    text-align: center;
    border-radius: 0px 25px 25px 25px;
    font-size: 28px;
`

const Window = styled.img`
    align-self: center;
    justify-self: end;
    max-width: 764px;
    width: 100%;
    filter: drop-shadow(0px 0px 20px rgba(0, 0, 0, 0.15)) drop-shadow(0px 25px 30px rgba(0, 0, 0, 0.35));
    transition: .4s;
    &:hover {
        filter: drop-shadow(0px 0px 20px rgba(66, 85, 212, 0.4)) drop-shadow(0px 25px 30px rgba(66, 85, 212, 0.4));
    }
    @media ${props => props.theme.media.desktop_small} {
        grid-row-start: 2;
        justify-self: center;
    } 
`


const Main = () => {
    return (
        <MainContainer>
            <Header>
                <Logo>
                    <LogoImg src={logo} />
                    <LogoText>manager</LogoText>
                </Logo>
                <Button to={LOGIN_ROUTE}>Авторизация</Button>
            </Header>
            <Article>
                <Window src={windowImg} />
                <TitleContainer>
                    <Title>Простой и удобный планировщик ключевых слов</Title>
                    <TitleButton to={SIGNUP_ROUTE}>Попробовать</TitleButton>
                </TitleContainer>
            </Article>
        </MainContainer>
    );
};

export default Main;