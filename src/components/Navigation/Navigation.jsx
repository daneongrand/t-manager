import React from 'react';
import styled from 'styled-components'
import { connect } from 'react-redux'
import { logout } from '../../actions/userActions';
import { Link } from 'react-router-dom'
import {ProfileLogo, ConstructorLogo, CampaignsLogo, AnalyticsLogo, SettingsLogo, LogOutLogo} from '../UI/icons/Icons'

const NavigationContainer = styled.nav`
    position: fixed;
    display: grid;
    grid-template-rows: 20% 60% 20%;
    width: 50px;
    height: 100%;
    background: rgba(24, 29, 49);
    
    @media ${props => props.theme.media.tablet} {
        bottom: 0;
        width: 100%;
        height: 50px;
        grid-template-columns: 20% 60% 20%;
        grid-template-rows: 100%;
        z-index: 1;
    }
`

const NavigationItem = styled(Link)`
    display: flex;
    align-items: center;
    color: white;
    position: relative;
    text-decoration: none;
    padding: 8px;
    border: 1px solid transparent;
    transition: .4s;
`

const ProfileContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    & > * {
        margin: 0;
    }
    @media ${props => props.theme.media.tablet} {
        flex-direction: row;
    }
`

const ToolsContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    & > * {
        margin: 0;
    }
    @media ${props => props.theme.media.tablet} {
        flex-direction: row;
    }
`

const SettingsContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    & > * {
        margin: 0;
    }
    @media ${props => props.theme.media.tablet} {
        flex-direction: row;
    }
`




const Navigation = ({logout}) => {

    const iconConfig = {
        width: "24",
        height: "24",
        color: "#fff"
    }


    return (
        <NavigationContainer>
            <ProfileContainer>
                    <NavigationItem to='/profile'>
                        <ProfileLogo {...iconConfig} />
                    </NavigationItem>
            </ProfileContainer>
            <ToolsContainer>  
                    <NavigationItem to='/constructor'>
                        <ConstructorLogo {...iconConfig} />
                    </NavigationItem>
                    <NavigationItem to='/campaigns'>
                        <CampaignsLogo {...iconConfig} />
                    </NavigationItem>
                    <NavigationItem to='/analytics'>
                        <AnalyticsLogo {...iconConfig} />
                    </NavigationItem>
                
            </ToolsContainer>
            <SettingsContainer>
                    <NavigationItem to='/settings'>
                        <SettingsLogo {...iconConfig} />
                    </NavigationItem>
                    <NavigationItem onClick={logout} to='/login'>
                        <LogOutLogo {...iconConfig} />
                    </NavigationItem>
                
            </SettingsContainer>
        </NavigationContainer>
    );
};

const MapDispatchToProps = {
    logout
}

export default connect(null, MapDispatchToProps)(Navigation);