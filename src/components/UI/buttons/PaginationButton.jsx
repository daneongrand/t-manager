import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
    padding: 5px 15px;
    background: ${props => props.disabled ? 'transparent' : props.theme.colors.blue};
    color: ${props => props.disabled ? props.theme.colors.dark_blue : 'white'};
    border: 1px solid ${props => props.theme.colors.dark_blue};
    cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
    transition: .2s;
    &:hover {
        box-shadow: ${props => props.disabled ? 'none' : `0px 2px 10px ${props.theme.colors.blue}`};
    }
`

const PaginationButton = ({ children, onClick = f => f, ...rest }) => {
    return (
        <Button
            onClick={onClick}
            { ...rest }
        >
            { children }
        </Button>
    );
};

export default PaginationButton;