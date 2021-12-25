import React from 'react';
import styled from 'styled-components';

const ItemList = styled.li`
    list-style-type: none;
    width: 100%;
    padding: 30px 30px 15px 30px;
    background-color: rgba(14, 14, 35, 0.8);
    border-radius: 20px;
    box-sizing: border-box;
    display: grid;
    grid-template-rows: 1fr 1fr;
    margin-bottom: 5px;
    grid-row-gap: 8px;
`

const ItemPost = styled.p`
    margin: 0;
    color: white;
    font-size: 18px;
    font-weight: 400;
    text-align: left;
`

const ItemDate = styled.p`
    margin: 0;
    color: ${props => props.theme.colors.blue};
    font-size: 14px;
    font-weight: 300;
    text-align: right;
`



const ProfilePostItem = ({ post, createdAt }) => {
    return (
        <ItemList>
            <ItemPost>
                {post}
            </ItemPost>
            <ItemDate>
                {createdAt}
            </ItemDate>
        </ItemList>
    );
};

export default ProfilePostItem;