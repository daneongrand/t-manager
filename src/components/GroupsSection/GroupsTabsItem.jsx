import React from 'react';
import styled from 'styled-components'

const TabsItem = styled.li`
    list-style-type: none;
    justify-self: center;
`

const Button = styled.button`
    white-space: nowrap;
    cursor: pointer;
    background-color: transparent;
    border: 0;
    color: ${props => (props.isSelected) ? "white" : "#ccc"};
    padding: 10px 10px;
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