import React from 'react';
import styled from 'styled-components';

const SelectContent = styled.div`
    width: ${props => props.width};
    height: ${props => props.height};
    `
    
    const SelectHeader = styled.button`
    width: ${props => props.width};
    height: ${props => props.height};
`

const SelectBody = styled.div`
    width: 300px;
    border: 1px solid red;
    position: relative;
    right: 0;
    bottom: 0;

`

const Select = ({width, height, icon, children}) => {
    return (
        <SelectContent
            width={width}
            height={height}
        >
            <SelectHeader
                width={width}
                height={height}
            >
                {icon}
            </SelectHeader>
            <SelectBody>
                {children}
            </SelectBody>
        </SelectContent>
    );
};

export default Select;