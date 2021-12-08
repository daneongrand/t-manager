import React from 'react';
import styled from 'styled-components'

const TabsItem = styled.li`
    list-style-type: none;
    height: 100%;
    justify-self: center;
`

const Button = styled.button`
    font-weight: 800;
    font-size: 18px;
    white-space: nowrap;
    cursor: pointer;
    background-color: transparent;
    border: 0;
    height: 100%;
    color: ${props => (props.isSelected) ? "white" : "#ccc"};
    border-bottom: ${props => (props.isSelected) ? '2px solid white' : 'none'};
`

const GroupsTabsItem = ({ children, selectItem, value, selectedItem }) => {
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

export default GroupsTabsItem;