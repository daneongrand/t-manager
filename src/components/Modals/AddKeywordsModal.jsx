import React from 'react';
import styled from 'styled-components';
import { Section } from '../UI/section/Section';

const KeywordsContainer = styled(Section)`
    width: 60%;
    height: 50%;
`

const Form = styled.form`
`

const File = styled.input`

`

const AddKeywordsModal = () => {
    return (
        <KeywordsContainer>
            <Form>
                <File
                    type="file"
                >

                </File>
            </Form>
        </KeywordsContainer>
    );
};

export default AddKeywordsModal;