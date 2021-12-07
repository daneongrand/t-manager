import React from 'react';
import styled from 'styled-components';

const Tabs = styled.section`
    border-radius: 10px;
    background-color: ${props => props.theme.colors.dark_blue};
    width: 100%;
`

const TabsList = styled.ul`
    overflow-x: scroll;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    margin: 0;
    padding: 0;
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