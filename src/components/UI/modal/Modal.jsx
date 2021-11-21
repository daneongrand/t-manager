import React from 'react';
import styled from 'styled-components';

const BackgrounBlur = styled.div`
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    position: fixed;
    width: 100vw;
    height: 100vh;
    z-index: 999;
    background-color: rgba(255, 255, 255, .1);
    backdrop-filter: blur(5px);
    display: flex;
    justify-content: center;
    align-items: center;
`

const Content = styled.div`
    width: 200px;
    height: 200px;
    background-color: white;
`


const Modal = () => {


    return (
        <BackgrounBlur>
            <Content></Content>
        </BackgrounBlur>
    );
};

export default Modal;