import React from 'react';
import styled from 'styled-components';

const AddKeywordsSectionContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
`

const Form = styled.form`
    width: 80%;

`

const Label = styled.label`
    color: white;
    display: flex;
    flex-direction: ${props => props.col ? 'column' : 'rows'};

`

const Input = styled.input`
`

const AddKeywordsSection = () => {
    return (
        <AddKeywordsSectionContainer>
            
            {/* <Form>
                <Label col>
                    Ключевое слово:
                    <Input></Input>
                </Label>
                <Label col>
                    Количество просмотров:
                    <Input></Input>
                    <Input></Input>
                </Label>
                <Label>
                    Уровень конкуренции:
                    <Input></Input>
                </Label>
                <Label>
                    Минимальная ставка:
                    <Input></Input>
                </Label>
                <Label>
                    Максимальная ставка:
                    <Input></Input>
                </Label>
                <Label>
                    Валюта:
                    <Input></Input>
                </Label>
            </Form> */}
        </AddKeywordsSectionContainer>
    );
};

export default AddKeywordsSection;