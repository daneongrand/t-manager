import styled from "styled-components"
export const Add = styled.input.attrs({
    type: 'submit',
})`
    margin-left: 10px;
    cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
    background-color: rgba(29, 29, 48, .9);
    padding: 8px 35px;
    border-radius: 8px;
    border: 0;
    color: black;
    font-size: 16px;
    font-weight: 800;
    transition: .1s;
    &:hover {
        color: ${props => props.disabled ? 'black' : 'white'};
        background-color: ${props => props.disabled ? 'rgba(29, 29, 48, .9)' : props.theme.colors.blue};
    }
`