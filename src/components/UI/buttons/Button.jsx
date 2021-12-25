import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
    box-sizing: border-box;
    transition: .2s;
    padding: 0;
    border: 0;
    cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
    border-radius: ${props => {
        switch (props.size) {
            case 'sm': {
                return '8px'
            }
            case 'xl': {
                return '15px'
            }
            default: {
                return '12px'
            }
        }
    }};
    font-size: ${props => {
        switch (props.size) {
            case 'sm': {
                return '18px'
            }
            case 'xl': {
                return '28px'
            }
            default: {
                return '24px'
            }
        }
    }};
    padding: ${props => {
        switch (props.size) {
            case 'sm': {
                return '8px 10px'
            }
            case 'xl': {
                return '10px 20px'
            }
            default: {
                return '10px 20px'
            }
        }
    }};
    background: ${props => props.disabled ? props.theme.colors.disabled : 'white'};
    background: ${props => {
        switch (props.color) {
            case 'primary': {
                return props.theme.colors.blue
            }
        }
    }};
    color: ${props => props.disabled ? 'DFDEDF' : props.theme.colors.dark_blue};
    color: ${props => {
        switch (props.color) {
            case 'primary': {
                return 'white'
            }
        }
    }};
    &:hover {
        box-shadow: 0 0 6px ${props => {
            switch (props.color) {
                case 'primary': {
                    return props.theme.colors.blue
                }
            }}
        };
    }
    &:focus-visible {
        outline: 2px solid ${props => {
            switch (props.color) {
                case 'primary': {
                    return props.theme.colors.blueLight
                }
            }}
        };
        box-shadow: 0 0 6px ${props => {
            switch (props.color) {
                case 'primary': {
                    return props.theme.colors.blueLight
                }
            }}
        };
    }
    
`

const Button = ({ children, onClicked = f => f, ...rest}) => {
    console.log(rest)
    return (
        <StyledButton
            onClick={() => onClicked()}
            { ...rest }
        >
            { children }
        </StyledButton>
    );
};

export default Button;