import styled from 'styled-components'

export const SubmitButton = styled.input.attrs({
    type: 'submit',
    value: 'Зарегистрироваться'
})`
    width: 320px;
    box-sizing: border-box;
    cursor: ${props => props.formValidate ? 'cursor' : 'not-allowed'};
    padding: 11px 37px;
    font-weight: 500;
    font-size: 24px;
    line-height: 28px;
    color: ${props => props.formValidate ? 'white' : '#0E0E23'};
    border: 0;
    border-radius: 0px 15px 15px 15px;
    align-self: center;
    justify-self: center;
    background-color: ${props => props.formValidate ? props.theme.colors.blue : 'transparent'};
    border: ${props => props.formValidate ? `none` : `2px solid ${props.theme.colors.blue}`};
    transition: .2s;

    &:hover {
        box-shadow: ${props => props.formValidate ? `0px 0px 10px 1px ${props.theme.colors.blue}` : 'none'};
    }

    &:focus-visible {
        outline: none;
        box-shadow: 0px 0px 10px 1px ${props => props.theme.colors.blue};
    }

    @media ${props => props.theme.media.tablet} {
        grid-column: 1/3;
    }

    @media ${props => props.theme.media.mobile} {
        width: 100%;
    }
    
`