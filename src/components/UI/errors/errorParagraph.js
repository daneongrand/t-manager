import styled from "styled-components"

export const ErrorParagraph = styled.p`
    margin: 0;
    margin-top: 10px;
    font-weight: 300;
    font-size: 15px;
    color: ${props => props.theme.colors.danger};
`