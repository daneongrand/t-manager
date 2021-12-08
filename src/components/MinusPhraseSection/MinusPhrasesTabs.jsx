import React from 'react';
import styled from 'styled-components';

const Tabs = styled.section`
    border-radius: 10px;
    background-color: ${props => props.theme.colors.dark_blue};
    width: 100%;
    height: 100%;
`

const TabsList = styled.ul`
    height: 100%;
    overflow-x: scroll;
    display: grid;
    align-items: center;
    grid-template-columns: 30px repeat(2, 1fr);
    margin: 0;
    padding: 0px 10px;
    box-sizing: border-box;
    &::-webkit-scrollbar {
        height: 0;
    }
`

const MinusPhrasesTabs = ({ children }) => {
    return (
        <Tabs>
            <TabsList>
                { children }
            </TabsList>
        </Tabs>
    );
};

export default MinusPhrasesTabs;