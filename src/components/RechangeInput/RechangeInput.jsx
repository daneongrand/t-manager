import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { Check, Edit } from '../UI/icons/Icons';
import { Input } from '../UI/input/Input';
import { LabelParagraph } from '../UI/label/labelParagraph'

const RechangeInputContainer = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 34px;
    grid-template-rows: 1fr auto;
    align-items: center;
    grid-column-gap: 10px;
`

const Button = styled.button`
    width: 34px;
    height: 34px;
    border: 0;
    padding: 0;
    background-color: transparent;
    cursor: pointer;
`


const StyledInput = styled(Input)`
    grid-column: 1/2;
`

const Value = styled.p`
    margin: 0;
    grid-column: 1/2;
    box-sizing: border-box;
    width: 100%;
    height: 45px;
    padding: 8px 10px;
    color: white;
    font-size: 22px;
`

const RechangeInput = ({ initialValue = 'Даниил', initialIsFailure = true }) => {
    
    const dispatch = useDispatch()

    const [ value, setValue ] = useState(initialValue)
    const [ isChanging, setIsChanging ] = useState(false)
    const [ isFailure, setIsFailure ] = useState(initialIsFailure)

    return (
        <RechangeInputContainer>
            {
                isChanging
                    ? <StyledInput value={value} onChange={e => setValue(e.target.value)} />
                    : <Value>{value}</Value>
            }
            {
                isChanging
                    ? <Button
                        onClick={() => setIsChanging(!isChanging)}
                    >
                        <Check width="100%" height="100%" color="#4255D4" />
                    </Button>
                    : <Button
                        onClick={() => setIsChanging(!isChanging)}
                    >
                        <Edit width="80%" height="80%" color="#4255D4" />
                    </Button>
            }
        </RechangeInputContainer>
    );
};

export default RechangeInput;