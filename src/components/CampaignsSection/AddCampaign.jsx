import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
    align-self: center;
    justify-self: center;
    cursor: pointer;
    width: 50%;
    padding: 18px 0px;
    border-radius: 0px 30px 30px 30px;
    font-weight: 700;
    color: white;
    background-color: ${props => props.theme.colors.blue};
    border: 0;
    font-size: 20px;
`

const AddCampaign = ({ onClick }) => {
    return (
        <Button
            onClick={onClick}
        >
            Добавить кампанию
        </Button>
    );
};

export default AddCampaign;