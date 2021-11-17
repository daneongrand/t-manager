import React from 'react';
import styled, {keyframes} from 'styled-components';


const Section = ({borderColor, children}) => {

    console.log(borderColor)
    const spin = keyframes`
        0% {
            --rotate: 0deg;
        }
        100% {
            --rotate: 360deg;
        }
    `

    const Section = styled.section`
        @property --rotate {
            syntax: "<angle>";
            initial-value: 0deg;
            inherits: false;
        }
        position: relative;
        margin: 30px;
        background: rgba(24, 29, 49, 1);
        padding: 15px;
        border-radius: 8px;
        &::before {
            content: '';
            top: -4px;
            left: -4px;
            position: absolute; 
            width: calc(100% + 8px);
            height: calc(100% + 8px);
            border-radius: 8px;
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
            top: 10%;
            z-index: -1;
            transition: .3s;
        }
        &:hover::before {
            background: ${borderColor};
            animation: ${spin} 5s linear infinite;
        }
        &:hover::after {
            background: ${borderColor};
            filter: blur(100px);
            transform: scale(0.7);
            transition: opacity .10s;
            animation: ${spin} 5s linear infinite;
        }
    `

    return (
        <Section>
            {children}
        </Section>
    );
};

export default Section;