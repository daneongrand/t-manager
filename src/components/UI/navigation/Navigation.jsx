import React from 'react';
import styled from './Navigation.module.css'
import { Link } from 'react-router-dom'
import {ProfileLogo, ConstructorLogo, CampaignsLogo, AnalyticsLogo, SettingsLogo, LogOutLogo} from '../icons/Icons'

const Navigation = () => {

    const iconConfig = {
        width: "24",
        height: "24",
        color: "#fff"
    }


    return (
        <nav className={styled.navigation}>
            <div className={styled.navigation_profile}>
                <Link to='/profile' className={styled.navigation_item} >
                    <ProfileLogo {...iconConfig} />
                </Link>
            </div>
            <div className={styled.navigation_tools}>
                <Link to='/constructor' className={styled.navigation_item} >
                    <ConstructorLogo {...iconConfig} />
                </Link>
                <Link to='/campaigns' className={styled.navigation_item} >
                    <CampaignsLogo {...iconConfig} />
                </Link>
                <Link to='/analytics' className={styled.navigation_item} >
                    <AnalyticsLogo {...iconConfig} />
                </Link>
                
            </div>
            <div className={styled.navigation_settings}>
                <Link to='/settings' className={styled.navigation_item} >
                    <SettingsLogo {...iconConfig} />
                </Link>
                <Link to='/exit' className={styled.navigation_item} >
                    <LogOutLogo {...iconConfig} />
                </Link>
            </div>
        </nav>
    );
};

export default Navigation;