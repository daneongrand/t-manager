import React from 'react';
import styled from 'styled-components';

const Label = styled.label`
    position: relative;
    width: 15px;
    height: 15px;
`

const Radio = styled.input.attrs({
    type: 'checkbox'
})`
    opacity: 0;
    &:focus-visible ~ div {
        box-shadow: 0px 0px 10px 1px ${props => props.theme.colors.blue};
    }
`

const CustomRadio = styled.div`
    box-sizing: border-box;
    width: 15px;
    height: 15px;
    border: 1px solid ${props => props.theme.colors.blue};
    border-radius: 3px;
    position: absolute;
    top: 0;
    left: 0;
    &:after {
        left: 1px;
        top: 1px;
        border-radius: 2px;
        position: absolute;
        content: '';
        width: 11px;
        height: 11px;
        background-color: ${props => props.isChecked ? props.theme.colors.blue : 'transparent'};
    }
`

const Checkbox = ({ value, onChecked = f => f }) => {



    return (
        <Label>
            <Radio isChecked={value} onChange={() => onChecked(!value)} />
            <CustomRadio isChecked={value} />
        </Label>
    );
};

export default Checkbox;