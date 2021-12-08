import React from 'react';
import styled from 'styled-components';

const TabsItem = styled.li`
    height: 100%;
    list-style-type: none;
    justify-self: center;
`

const Button = styled.button`
    font-weight: 800;
    font-size: 18px;
    height: 100%;
    white-space: nowrap;
    cursor: pointer;
    background-color: transparent;
    border: 0;
    color: ${props => (props.isSelected) ? "white" : "#ccc"}; 
    border-bottom: ${props => (props.isSelected) ? '2px solid white' : 'none'};
`

const MinusPhrasesTabsItem = ({ children, selectItem, value, selectedItem }) => {
    return (
        <TabsItem>
            <Button
                onClick={() => selectItem(value)}
                isSelected={selectedItem === value}
            >
                { children }
            </Button>
        </TabsItem>
    );
};

export default MinusPhrasesTabsItem;