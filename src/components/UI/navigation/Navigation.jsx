import React from 'react';
import styled from './Navigation.module.css'
import { Link } from 'react-router-dom'
import {ReactComponent as ProfileLogo} from '../../../img/profile-logo.svg'
import {ReactComponent as ConstructorLogo} from '../../../img/constructor-logo.svg'
import {ReactComponent as CampaignsLogo} from '../../../img/campaign-logo.svg'
import {ReactComponent as AnalyticsLogo} from '../../../img/analytics-logo.svg'
import {ReactComponent as SettingsLogo} from '../../../img/settings-logo.svg'
import {ReactComponent as LogOutLogo} from '../../../img/logout-logo.svg'

const Navigation = () => {
    return (
        <nav className={styled.navigation}>
            <div className={styled.navigation_profile}>
                <Link to='/profile' className={styled.navigation_item} >
                    <ProfileLogo />
                </Link>
            </div>
            <div className={styled.navigation_tools}>
                <Link to='/constructor' className={styled.navigation_item} >
                    <ConstructorLogo />
                </Link>
                <Link to='/campaigns' className={styled.navigation_item} >
                    <CampaignsLogo />
                </Link>
                <Link to='/analytics' className={styled.navigation_item} >
                    <AnalyticsLogo />
                </Link>
                
            </div>
            <div className={styled.navigation_settings}>
                <Link to='/settings' className={styled.navigation_item} >
                    <SettingsLogo />
                </Link>
                <Link to='/exit' className={styled.navigation_item} >
                    <LogOutLogo />
                </Link>
            </div>
        </nav>
    );
};

export default Navigation;