import React from 'react';

const AnalyticsLogo = ({width, height, color}) => {
    return (
        <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21.3333 0H2.66667C1.2 0 0 1.2 0 2.66667V21.3333C0 22.8 1.2 24 2.66667 24H21.3333C22.8 24 24 22.8 24 21.3333V2.66667C24 1.2 22.8 0 21.3333 0ZM8 18.6667H5.33333V9.33333H8V18.6667ZM13.3333 18.6667H10.6667V5.33333H13.3333V18.6667ZM18.6667 18.6667H16V13.3333H18.6667V18.6667Z" fill={color}/>
        </svg>
    );
};

export default AnalyticsLogo;