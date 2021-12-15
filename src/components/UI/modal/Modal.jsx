import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

export const BackgroundBlur = styled.div`
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

const ModalContainer = styled.section`
    width: ${props => props.width};
    height: ${props => props.height};
    position: relative;
    display: grid;
    grid-template-rows: 40px 1fr;
    border-radius: 10px;
    background: rgba(14, 14, 35, .9);
    padding: 0px 15px;
`

const ModalHeader = styled.header`
    display: grid;
    grid-template-columns: 22px 1fr 22px;
    align-items: center;
`

const ModalArticle = styled.article`
` 

export const CloseButton = styled.button`
    cursor: pointer;
    width: 22px;
    height: 22px;
    border: 0;
    border-radius: 50%;
    background-color: ${props => props.theme.colors.closeBtn};
    transition: .2s;
    &:hover {
        box-shadow: 0px 0px 10px rgba(255, 47, 35, .8);
    }
`

const ModalTitle = styled.h1`
    white-space: nowrap;
    color: white;
    text-align: center;
    font-size: 22px;
    font-weight: 400;
`

const Modal = ({title, width='60%', height='50%', children, onClose = f => f}) => {
    return (
        <BackgroundBlur>
            <ModalContainer
                width={width}
                height={height}
            >
                <ModalHeader>
                    <CloseButton 
                        onClick={onClose}
                    />
                    <ModalTitle>
                        { title }
                    </ModalTitle>
                </ModalHeader>
                <ModalArticle>
                    { children }
                </ModalArticle>
            </ModalContainer>
        </BackgroundBlur>
    );
};

export default Modal;