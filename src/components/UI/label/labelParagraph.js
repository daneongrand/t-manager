import styled from "styled-components";

export const LabelParagraph = styled.p`
    width: 100%;
    color: ${props => (props.isValid || props.isValid === undefined) ? 'white' : props.theme.colors.danger};
    font-weight: 300;
    font-size: 15px;
    margin: 0;
    margin-bottom: 10px;
`