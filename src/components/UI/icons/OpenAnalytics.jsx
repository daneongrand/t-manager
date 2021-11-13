import React from 'react';

const OpenAnalytics = ({width, height, color}) => {
    return (
        <svg width={width} height={color} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 20H14V4H10V20ZM4 20H8V12H4V20ZM16 9V20H20V9H16Z" fill={color}/>
        </svg>
    );
};

export default OpenAnalytics;