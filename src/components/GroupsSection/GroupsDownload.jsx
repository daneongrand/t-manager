import React from 'react';
import styled from 'styled-components';

const GroupsList = styled.ul`
    margin: 0;
    padding: 0;
    min-height: 100%;
    overflow-y: scroll;
    &::-webkit-scrollbar {
        width: 5px;
        height: 100%;
    }
    &::-webkit-scrollbar-thumb {
        background: rgba(24, 29, 49, 1);
        border-radius: 9em;
        box-shadow: inset 1px 1px 10px #f3faf7;
    }
`

const StyledGroupItem = styled.li`
    width: 100%;
    list-style-type: none;
`

const Header = styled.header`
    color: white;
`

const TextArea = styled.textarea`
    box-sizing: border-box;
    border: 0;
    border-radius: 10px;
    padding: 10px;
    outline: none;
    width: 100%;
    resize: none;
    color: white;
    background-color: ${props => props.theme.colors.dark_blue};
`

const GroupItem = (props) => {
    const array = props.groupKeywords.reduce((acc, item) => { return [...acc, item.keyword] }, [])
    const value = array.join('\n')
    console.log(value)
    return (
        <StyledGroupItem>
            <Header> { props.groupName } </Header>
            <TextArea readOnly rows={array.length} value={value} />
        </StyledGroupItem>
    )
}


const GroupsDownLoad = ({groups}) => {
    console.log(groups)

    

    return (
        <GroupsList>
            {
                groups.map(item => (
                    <GroupItem {...item} />
                ))
            }
        </GroupsList>
    );
};

export default GroupsDownLoad;