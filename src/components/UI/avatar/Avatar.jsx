import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import { DeleteKeyword, ProfileLogo, UploadPhoto } from '../icons/Icons';


const UploadAvatarContainer = styled.div`
    justify-self: center;
    position: relative;
    width: 200px;
    height: 200px;
    background: ${props => props.theme.colors.blue};
    border-radius: 50%;
    border: 3px solid ${props => props.isFailed ? props.theme.colors.danger : props.theme.colors.blue};
    box-shadow: ${props => props.isFailed ? `0 0 15px ${props.theme.colors.danger}` : 'none'};

    &:after {
        box-sizing: border-box;
        position: absolute;
        content: '';
        top: 0;
        left: 0;
        width: 200px;
        height: 200px;
        border-radius: 50%;
        transition: .3s;  
    }

    &:hover {
        & > label {
            opacity: 1;
            z-index: 1;
        }
    }

    &:hover:after {
        background-color: rgba(14, 14, 35, 0.95);
    }
`

const UploadAvatarLabel = styled.label`
    position: absolute;
    display: flex;
    opacity: 0;
    align-items: center;
    justify-content: center;
    width: 200px;
    height: 200px;
    top: 0;
    left: 0;
    width: 200px;
    height: 200px;
    border-radius: 50%;
`

const UploadAvatarButton = styled.div`
    width: 50px;
    height: 50px;
    cursor: pointer;
`

const UploadAvatarInput = styled.input.attrs({
    type: 'file'

})`
    position: absolute;
    bottom: 20px;
    opacity: 0;
    visibility: hidden;

`

const UploadAvatarImg = styled.img`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    object-fit: cover;
    position: relative;
`

const AvatarUploadError = styled.p`
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 50%;
    background-color: #0E0E23;
    margin: 0;
    color: ${props => props.theme.colors.danger};
    width: 200px;
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
`

const Avatar = ({ onUploadAvatar = f => f, style}) => {

    const [ avatar, setAvatar ] = useState(null)
    const [ avatarError, setAvatarError ] = useState('')
    const [ avatarFailed, setAvatarFailed ] = useState(false)

    // const uploadAvatar = e => {
    //     if (!e.target.files[0]) return 
    //     const avatar = e.target.files[0]
    //     const avatarName = avatar.name.split('.')[1]
    //     console.log(avatarName)
    //     if ((avatarName === 'jpg') || (avatarName === 'png') || (avatarName === 'jpeg')) {
    //         setAvatarFailed(false)
    //         setAvatarError('')
    //         setAvatar(avatar)
    //     } else {
    //         setAvatarFailed(true)
    //         setAvatarError('Загрузите .jpg, .png, .jpeg форматы!')
    //     }
    // }

    const checkValidExt = e => {
        if (!e.target.files[0]) return
        const avatar = e.target.files[0]
        const avatarName = avatar.name.split('.')[1]
        if ((avatarName === 'jpg') || (avatarName === 'png') || (avatarName === 'jpeg')) {
            setAvatarFailed(false)
            setAvatarError('')
            setAvatar(avatar)
            return true
        } else {
            setAvatarFailed(true)
            setAvatarError('Загрузите .jpg, .png, .jpeg форматы!')
            return false
        }
    }

    const uploadFile = e => {
        
        onUploadAvatar(e.target.files[0])
    }


    return (
        <UploadAvatarContainer
            style={style}
            isFailed={avatarFailed}
        >
                {
                    (avatar)
                        ? <UploadAvatarImg src={URL.createObjectURL(avatar)} />
                        : <ProfileLogo width="100%" height="100%" color="#0E0E23" />
                }
                {
                    (avatarError) && <AvatarUploadError> {avatarError} </AvatarUploadError>
                }
                
            <UploadAvatarLabel>
                <UploadAvatarInput
                    onChange={e => {
                        if(checkValidExt(e)) {
                            uploadFile(e)
                        }
                    }}
                />
                <UploadAvatarButton>
                    <UploadPhoto width="100%" height="100%" color="#4255D4" />
                </UploadAvatarButton>
                {
                    avatar && <UploadAvatarButton
                        onClick={e => {
                            e.preventDefault()
                            setAvatarFailed(false)
                            setAvatarError('')
                            setAvatar(null)
                        }}
                    >
                        <DeleteKeyword width="100%" height="100%" color="#4255D4" />
                    </UploadAvatarButton>
                }
            </UploadAvatarLabel>
        </UploadAvatarContainer>
    );
};

export default Avatar;