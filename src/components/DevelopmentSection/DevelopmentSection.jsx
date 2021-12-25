import React from 'react';
import styled from 'styled-components';
import img from '../../img/page-development-img.svg'

const DevelopmentSectionContainer = styled.div`
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

const DevelopmentSection = () => {
    return (
        <DevelopmentSectionContainer>
            <Title>Извините, данный раздел находится в разработке :(</Title>
            <Image src={img} />
        </DevelopmentSectionContainer>
    );
};

export default DevelopmentSection;