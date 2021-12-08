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
    display: grid;
    grid-template-columns: 30px repeat(3, 1fr);
    align-items: center;
    overflow-x: scroll;
    margin: 0;
    padding: 0px 5px;
    box-sizing: border-box;
    &::-webkit-scrollbar {
        height: 0;
    }
`

const GroupsTabs = ({ children }) => {
    return (
        <Tabs>
            <TabsList>
                { children }
            </TabsList>
        </Tabs>
    );
};

export default GroupsTabs;