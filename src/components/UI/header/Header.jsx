import React from 'react';
import styled from 'styled-components'

const Header = ({ children }) => {
    const Header = styled.header`
        width: 100%;
        box-sizing: border-box;
    `

    return (
        <Header>
            { children }
        </Header>
    );
};

export default Header;