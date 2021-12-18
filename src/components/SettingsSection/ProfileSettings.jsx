import React from 'react';
import styled from 'styled-components'

const StyledProfileSettings = styled.section`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    background: #0A1026;
    border-radius: 0px 20px 20px 0px;
`

const Title = styled.h1`
    font-size: 24px;
    color: white;
    font-weight: 300;
    padding: 20px;
`

const ProfileSettingsContainer = styled.div`
    max-height: 100%;
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

const ProfileSettings = () => {
    return (
        <StyledProfileSettings>
            <Title>
                Профиля
            </Title>
            <ProfileSettingsContainer>
                
            </ProfileSettingsContainer>
        </StyledProfileSettings>
    );
};

export default ProfileSettings;