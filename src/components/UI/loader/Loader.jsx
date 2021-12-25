import React from 'react';
import styled from 'styled-components';
import PulseLoader from 'react-spinners/PulseLoader'

const LoaderContainer = styled.section`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${props => props.backgroundColor};
    backdrop-filter: ${props => props.backdropFilter};
    border-radius: ${props => props.borderRadius};
    display: flex;
    justify-content: center;
    align-items: center;
`

const Loader = ({ color='white', borderRadius, backgroundColor="rgba(14, 14, 35, .9)", backdropFilter="blur(5px)" }) => {
    return (
        <LoaderContainer 
            borderRadius={borderRadius} 
            backgroundColor={backgroundColor} 
            backdropFilter={backdropFilter}
        >
            <PulseLoader color={color} />
        </LoaderContainer>
    );
};

export default Loader;