import styled from 'styled-components';
import { spin } from '../animation/animations';

export const Section = styled.section`
    @property --rotate {
        syntax: "<angle>";
        initial-value: 0deg;
        inherits: false;
    }
    background: rgba(24, 29, 49, 1);
    position: relative; 
    padding: 15px;
    border-radius: 10px;
    &::before {
        content: '';
        position: absolute;
        left: -4px;
        top: -4px;
        right: -4px;
        bottom: -4px;
        
        border-radius: 10px;
        z-index: -1;
        background: inherit;
        transition: .3s;
    }
    &::after {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        right: 0;
        top: 5%;
        z-index: -1;
        transition: .3s;
    }
    &:hover::before {
        background: ${props => props.borderColor};
        animation: ${spin} 5s linear infinite;
    }
    &:hover::after {
        background: ${props => props.borderColor};
        filter: blur(100px);
        transform: scale(0.7);
        transition: opacity .10s;
        animation: ${spin} 5s linear infinite;
    }
`
