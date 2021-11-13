import React from 'react';

const CampaignsLogo = ({width, height, color}) => {
    return (
        <svg width={width} height={height} viewBox="0 0 24 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21.3333 2.6H15.76C15.2 1.092 13.7333 0 12 0C10.2667 0 8.8 1.092 8.24 2.6H2.66667C1.2 2.6 0 3.77 0 5.2V23.4C0 24.83 1.2 26 2.66667 26H21.3333C22.8 26 24 24.83 24 23.4V5.2C24 3.77 22.8 2.6 21.3333 2.6ZM12 2.6C12.7333 2.6 13.3333 3.185 13.3333 3.9C13.3333 4.615 12.7333 5.2 12 5.2C11.2667 5.2 10.6667 4.615 10.6667 3.9C10.6667 3.185 11.2667 2.6 12 2.6ZM14.6667 20.8H5.33333V18.2H14.6667V20.8ZM18.6667 15.6H5.33333V13H18.6667V15.6ZM18.6667 10.4H5.33333V7.8H18.6667V10.4Z" fill={color}/>
        </svg>

    );
};

export default CampaignsLogo;