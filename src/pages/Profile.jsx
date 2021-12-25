import React from 'react';
import ProfileInformation from '../components/ProfileInformation/ProfileInformation';
import ProfilePost from '../components/ProfilePost/ProfilePost';
import styled from 'styled-components';


const ProfileContainer = styled.main`
    width: 100%;
    height: 100%;
    overflow-y: scroll;
    box-sizing: border-box;
    padding: 50px;
    display: grid;
    grid-row-gap: 10px;
    justify-content: center;
    grid-template-columns: minmax(auto, 700px);
    grid-template-rows: 260px auto;
    @media ${props => props.theme.media.tablet} {
        height: auto;
        grid-template-rows: auto auto;
    }
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



const Profile = () => {
    return (
        <ProfileContainer>
            <ProfileInformation />
            <ProfilePost />
        </ProfileContainer>
    );
};

export default Profile;