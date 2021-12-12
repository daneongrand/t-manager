import React from 'react';
import styled from 'styled-components';
import PulseLoader from 'react-spinners/PulseLoader'

const LoaderContainer = styled.section`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(14, 14, 35, .9);
    backdrop-filter: blur(5px);
    border-radius: ${props => props.borderRadius};
    display: flex;
    justify-content: center;
    align-items: center;
`

const Loader = ({ color='white', borderRadius }) => {
    return (
        <LoaderContainer borderRadius={borderRadius}>
            <PulseLoader color={color} />
        </LoaderContainer>
    );
};

export default Loader;