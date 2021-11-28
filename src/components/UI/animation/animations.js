import { keyframes } from 'styled-components'

export const spin = keyframes`
    0% {
        --rotate: 0deg;
    }
    100% {
        --rotate: 360deg;
    }
`