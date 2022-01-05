import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { ProfileLogo } from '../UI/icons/Icons'

const ProfileInformationContainer = styled.header`
    height: 100%;
    padding: 30px 50px;
    box-sizing: border-box;
    width: 100%;
    background: rgba(14, 14, 35, 0.8);
    box-shadow: 0px 0px 20px 20px rgba(14, 14, 35, 0.35);
    border-radius: 20px;
    display: grid;
    align-items: center;
    grid-column-gap: 30px;
    grid-template-columns: 200px 1fr;
    @media ${props => props.theme.media.tablet} {
        grid-template-columns: 1fr;
        grid-template-rows: 200px auto auto;
    }
`

const ProfileAvatarContainer = styled.div`
    width: 200px;
    height: 200px;
    grid-row: 1/3;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    border-radius: 50%;
    border: 3px solid ${props => props.theme.colors.blue};
    background-color: ${props => props.theme.colors.blue};
    @media ${props => props.theme.media.tablet} {
        grid-row: 1/1;
    }
`

const ProfileAvatar = styled.img`
    width: 100%;
    box-sizing: border-box;
    border-radius: 50%;
`

const NickName = styled.p`
    align-self: end;
    font-size: 30px;
    color: white;
    font-weight: 800;
    margin: 0;
`

const FullName = styled.p`
    align-self: start;
    font-size: 24px;
    color: ${props => props.theme.colors.blue};
    font-weight: 300;
    margin: 0;
`



const ProfileInformation = () => {
    const currentUser = useSelector(state => state.user.currentUser)
    console.log(currentUser)
    return (
        <ProfileInformationContainer>
            <ProfileAvatarContainer>
                {
                    (currentUser.avatarOriginalName)
                        ? <ProfileAvatar src={process.env.REACT_APP_API_URL_STATIC + '/' + currentUser.avatarOriginalName}/>
                        : <ProfileLogo width="100%" height="100%" color="rgba(14, 14, 35, 1)"  />
                }
            </ProfileAvatarContainer>
            <NickName>
                { currentUser.nickName }
            </NickName>
            <FullName>
                {
                    (currentUser.firstName || currentUser.lastName) && currentUser.firstName + ' ' + currentUser.lastName
                } 
            </FullName>
        </ProfileInformationContainer>
    );
};

export default ProfileInformation;