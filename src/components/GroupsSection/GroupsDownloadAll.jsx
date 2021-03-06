import React from 'react';
import styled from 'styled-components';

const GroupsDownloadAllContainer = styled.div`
    width: 100%;
    heigth: 100%;
`

const TextArea = styled.textarea`
    box-sizing: border-box;
    border: 0;
    border-radius: 10px;
    padding: 10px;
    outline: none;
    width: 100%;
    height: 100%;
    resize: none;
    color: white;
    background-color: ${props => props.theme.colors.dark_blue};
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

const GroupsDownloadAll = ({groups}) => {
    console.log(groups)
    const list = groups.map(item => item.groupKeywords.map(i => i.keyword))
    console.log(list)
    const keywordsList = list.map(item => item.join('\n'))
    console.log(keywordsList)
    const keywordList = keywordsList.join('\n\n')
    console.log(keywordList)
    return (
        <GroupsDownloadAllContainer>
            <TextArea readOnly value={keywordList} />
        </GroupsDownloadAllContainer>
    );
};

export default GroupsDownloadAll;   