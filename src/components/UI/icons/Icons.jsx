import React from 'react';
import styled from 'styled-components'

const Svg = styled.svg.attrs({
    xmlns: 'http://www.w3.org/2000/svg', 
    xmlnsXlink: 'http://www.w3.org/1999/xlink',
})`
`

const Path = styled.path`
    fill: ${props => props.fill};
`

export const UploadPhoto = ({width, height, color}) => {
    return (
        <Svg 
            width={width} 
            height={height} 
            viewBox="0 0 24 24"
        >
            <path d="M21 19V5C21 3.9 20.1 3 19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19ZM8.5 13.5L11 16.51L14.5 12L19 18H5L8.5 13.5Z" fill={color}/>
        </Svg>
    )
}

export const Reply = ({width, height, color}) => {
    return (
        <Svg 
            width={width}
            height={height}
            viewBox="0 0 24 24" 
        >
            <path d="M10 9V5L3 12L10 19V14.9C15 14.9 18.5 16.5 21 20C20 15 17 10 10 9Z" fill={color}/>
        </Svg>
    )
}

export const UploadFile = ({width, height, color}) => {
    return (
        <Svg 
            width={width} 
            height={height}  
            viewBox="0 0 24 24"
        >
            <path d="M20 18C21.1 18 21.99 17.1 21.99 16L22 6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6V16C2 17.1 2.9 18 4 18H0V20H24V18H20ZM4 6H20V16H4V6Z" fill={color}/>
        </Svg>
    )
}


export const UploadUrl = ({width, height, color}) => {
    return (
        <Svg 
            width={width} 
            height={height} 
            viewBox="0 0 24 24"
        >
            <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4C9.11 4 6.6 5.64 5.35 8.04C2.34 8.36 0 10.91 0 14C0 17.31 2.69 20 6 20H19C21.76 20 24 17.76 24 15C24 12.36 21.95 10.22 19.35 10.04ZM14 13V17H10V13H7L12 8L17 13H14Z" fill={color} />
        </Svg>
    )
}

export const Chevron = ({ width, height, color }) => {
    return (
        <Svg 
            width={width}
            height={height} 
            viewBox={`0 0 24 24`} 
        >
            <path d="M7.41 8.58997L12 13.17L16.59 8.58997L18 9.99997L12 16L6 9.99997L7.41 8.58997Z" fill={color} />
        </Svg>
    ) 
}

export const Check = ({ width, height, color }) => {
    return (
        <Svg 
            width={width}
            height={height} 
            viewBox={`0 0 24 24`} 
        >
            <path d="M9 16.17L4.83 12L3.41 13.41L9 19L21 6.99997L19.59 5.58997L9 16.17Z" fill={color} />
        </Svg>
    )
}

export const Edit = ({ width, height, color }) => {
    return (
        <Svg
            width={width}
            height={height} 
            viewBox={`0 0 18 18`}
        >
            <path d="M0 14.2505V18H3.74948L14.8079 6.94154L11.0585 3.19206L0 14.2505ZM17.7075 4.04194C18.0975 3.65199 18.0975 3.02208 17.7075 2.63213L15.3679 0.292459C14.9779 -0.0974865 14.348 -0.0974865 13.9581 0.292459L12.1283 2.12221L15.8778 5.87168L17.7075 4.04194Z" fill={color}/>
        </Svg>

    )
}

export const AddIcon = ({width, height, fill }) => {
    return (
            <Svg
                width={width}
                height={height}
                viewBox={`0 0 24 24`}
            >
                <Path d="M13 7H11V11H7V13H11V17H13V13H17V11H13V7ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z" fill={fill} />
            </Svg>
    )
};

export const AddMinusPhrase = ({width, height, color}) => {
    return (
        <Svg
            width={width}
            heigth={height}
            viewBox={`0 0 24 24`}
        >
            <path d="M19 4H15.5L14.5 3H9.5L8.5 4H5V6H19V4ZM6 7V19C6 20.1 6.9 21 8 21H16C17.1 21 18 20.1 18 19V7H6ZM14 14V18H10V14H8L12 10L16 14H14Z" fill={color}/>
        </Svg>
    )
}

export const AnalyticsLogo = ({width, height, color}) => {
    return (
        <Svg
            width={width + 'px'}
            heigth={height + 'px'}
            viewBox={`0 0 ${width} ${height}`}
        >
            <path d="M21.3333 0H2.66667C1.2 0 0 1.2 0 2.66667V21.3333C0 22.8 1.2 24 2.66667 24H21.3333C22.8 24 24 22.8 24 21.3333V2.66667C24 1.2 22.8 0 21.3333 0ZM8 18.6667H5.33333V9.33333H8V18.6667ZM13.3333 18.6667H10.6667V5.33333H13.3333V18.6667ZM18.6667 18.6667H16V13.3333H18.6667V18.6667Z" fill={color}/>
        </Svg>
    )
}

export const CampaignsLogo = ({width, height, color}) => {
    return (
        <Svg
            width={width + 'px'}
            heigth={height + 'px'}
            viewBox={`0 0 ${width} ${height}`}
        >
            <path d="M21.3333 2.6H15.76C15.2 1.092 13.7333 0 12 0C10.2667 0 8.8 1.092 8.24 2.6H2.66667C1.2 2.6 0 3.77 0 5.2V23.4C0 24.83 1.2 26 2.66667 26H21.3333C22.8 26 24 24.83 24 23.4V5.2C24 3.77 22.8 2.6 21.3333 2.6ZM12 2.6C12.7333 2.6 13.3333 3.185 13.3333 3.9C13.3333 4.615 12.7333 5.2 12 5.2C11.2667 5.2 10.6667 4.615 10.6667 3.9C10.6667 3.185 11.2667 2.6 12 2.6ZM14.6667 20.8H5.33333V18.2H14.6667V20.8ZM18.6667 15.6H5.33333V13H18.6667V15.6ZM18.6667 10.4H5.33333V7.8H18.6667V10.4Z" fill={color}/>
        </Svg>
    )
}

export const ConstructorLogo = ({width, height, color}) => {
    return (
        <Svg
            width={width + 'px'}
            heigth={height + 'px'}
            viewBox={`0 0 ${width} ${height}`}
        >
            <path d="M0 19.5H24V16.5H0V19.5ZM0 24H24V22.5H0V24ZM0 13.5H24V9H0V13.5ZM0 0V6H24V0H0Z" fill={color}/>
        </Svg>
    )
}

export const DeleteKeyword = ({width, height, color}) => {
    return (
        <Svg
            width={width}
            height={height}
            viewBox={`0 0 24 24`}
        >
            <path d="M6 19C6 20.1 6.9 21 8 21H16C17.1 21 18 20.1 18 19V7H6V19ZM8.46 11.88L9.87 10.47L12 12.59L14.12 10.47L15.53 11.88L13.41 14L15.53 16.12L14.12 17.53L12 15.41L9.88 17.53L8.47 16.12L10.59 14L8.46 11.88ZM15.5 4L14.5 3H9.5L8.5 4H5V6H19V4H15.5Z" fill={color}/>
        </Svg>
    )
}

export const LogOutLogo = ({width, height, color}) => {
    return (
        <Svg
            width={width + 'px'}
            heigth={height + 'px'}
            viewBox={`0 0 ${width} ${height}`}
        >
            <path d="M10.09 15.59L11.5 17L16.5 12L11.5 7L10.09 8.41L12.67 11H3V13H12.67L10.09 15.59ZM19 3H5C3.89 3 3 3.9 3 5V9H5V5H19V19H5V15H3V19C3 20.1 3.89 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3Z" fill={color}/>
        </Svg>
    )
}

export const OpenAnalytics = ({width, height, color}) => {
    return (
        <Svg
            width={width}
            heigth={height}
            viewBox={`0 0 24 24`}
        >
            <path d="M10 20H14V4H10V20ZM4 20H8V12H4V20ZM16 9V20H20V9H16Z" fill={color}/>
        </Svg>
    )
}

export const ProfileLogo = ({width, height, color}) => {
    return (
        <Svg
            width={width}
            heigth={height}
            viewBox={`0 0 24 24`}
        >
            <path d="M12 0C5.376 0 0 5.376 0 12C0 18.624 5.376 24 12 24C18.624 24 24 18.624 24 12C24 5.376 18.624 0 12 0ZM12 3.6C13.992 3.6 15.6 5.208 15.6 7.2C15.6 9.192 13.992 10.8 12 10.8C10.008 10.8 8.4 9.192 8.4 7.2C8.4 5.208 10.008 3.6 12 3.6ZM12 20.64C9 20.64 6.348 19.104 4.8 16.776C4.836 14.388 9.6 13.08 12 13.08C14.388 13.08 19.164 14.388 19.2 16.776C17.652 19.104 15 20.64 12 20.64Z"  fill={color}/>
        </Svg>
    )
}

export const SettingsLogo = ({width, height, color}) => {
    return (
        <Svg
            width={width + 'px'}
            heigth={height + 'px'}
            viewBox={`0 0 ${width} ${height}`}
        >
            <path d="M19.14 12.9359C19.176 12.6359 19.2 12.3239 19.2 11.9999C19.2 11.6759 19.176 11.3639 19.128 11.0639L21.156 9.4799C21.336 9.3359 21.384 9.0719 21.276 8.8679L19.356 5.5439C19.236 5.3279 18.984 5.2559 18.768 5.3279L16.38 6.2879C15.876 5.9039 15.348 5.5919 14.76 5.3519L14.4 2.8079C14.364 2.5679 14.16 2.3999 13.92 2.3999H10.08C9.83998 2.3999 9.64799 2.5679 9.61199 2.8079L9.25199 5.3519C8.66399 5.5919 8.12399 5.9159 7.63199 6.2879L5.24398 5.3279C5.02798 5.2439 4.77598 5.3279 4.65598 5.5439L2.73598 8.8679C2.61598 9.0839 2.66398 9.3359 2.85598 9.4799L4.88398 11.0639C4.83598 11.3639 4.79998 11.6879 4.79998 11.9999C4.79998 12.3119 4.82398 12.6359 4.87198 12.9359L2.84398 14.5199C2.66398 14.6639 2.61598 14.9279 2.72398 15.1319L4.64398 18.4559C4.76398 18.6719 5.01598 18.7439 5.23198 18.6719L7.61998 17.7119C8.12398 18.0959 8.65198 18.4079 9.23998 18.6479L9.59999 21.1919C9.64799 21.4319 9.83998 21.5999 10.08 21.5999H13.92C14.16 21.5999 14.364 21.4319 14.388 21.1919L14.748 18.6479C15.336 18.4079 15.876 18.0839 16.368 17.7119L18.756 18.6719C18.972 18.7559 19.224 18.6719 19.344 18.4559L21.264 15.1319C21.384 14.9159 21.336 14.6639 21.144 14.5199L19.14 12.9359V12.9359ZM12 15.5999C10.02 15.5999 8.39998 13.9799 8.39998 11.9999C8.39998 10.0199 10.02 8.3999 12 8.3999C13.98 8.3999 15.6 10.0199 15.6 11.9999C15.6 13.9799 13.98 15.5999 12 15.5999Z" fill={color}/>
        </Svg>
    )
}

