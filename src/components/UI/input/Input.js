import styled from 'styled-components'

export const Input = styled.input`
    box-sizing: border-box;
    width: 100%;
    height: 45px;
    border: 2px solid ${props => props.theme.colors.blue};
    background-color: transparent;
    outline: none;
    border-radius: 15px;
    transition: .2s;
    padding: 8px 10px;
    color: white;
    font-size: 22px;
    &:focus-visible {
        box-shadow: 0px 0px 10px 1px ${props => props.theme.colors.blue};
    }
    border: 2px solid ${props => (props.isValid || props.isValid === undefined) ? props.theme.colors.blue : props.theme.colors.danger};
    &:focus-visible {
        box-shadow: 0px 0px 10px 1px ${props => (props.isValid || props.isValid === undefined)  ? props.theme.colors.blue : props.theme.colors.danger};
    }
`
