import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import img from '../img/404-img.svg'
import { CAMPAIGN_ROUTE, MAIN_ROUTE } from '../utils/constRoutes';

const Main = styled.main`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    padding: 20px;
    box-sizing: border-box;
    justify-content: center;
    flex-direction: column;
`

const Title = styled.h1`
    max-width: 600px;
    text-align: center;
    color: white;
    font-weight: 300;
    margin-bottom: 20px;
`

const Image = styled.img`
    max-width: 300px;
`


const Page_404 = () => {
    return (
        <Main>
            <Title>404... А тут ничего нет...</Title>
            <Image src={img} />
        </Main>
    );
};

export default Page_404;