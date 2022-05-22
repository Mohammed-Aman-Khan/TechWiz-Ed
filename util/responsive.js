/* eslint-disable import/no-anonymous-default-export */
import { useMediaQuery, useTheme } from '@mui/material'

export const initializeFrame = () => {
    document.documentElement.style.setProperty('--vh', `${ window.innerHeight * 0.01 }px`)
    document.documentElement.style.setProperty('--vw', `${ window.innerWidth * 0.01 }px`)

    window.addEventListener('resize', () => {
        document.documentElement.style.setProperty('--vh', `${ window.innerHeight * 0.01 }px`)
        document.documentElement.style.setProperty('--vw', `${ window.innerWidth * 0.01 }px`)
    })
}

export const vh = units => `calc(var(--vh, 1vh) * ${ units })`

export const vw = units => `calc(var(--vw, 1vw) * ${ units })`

export const useBreakpoint = () => {
    const theme = useTheme()
    const small = useMediaQuery(theme.breakpoints.down('lg'))

    return small
}

export const usePadding = (component = 'container') => {
    const theme = useTheme()
    const small = useMediaQuery(theme.breakpoints.down('lg'))

    if (component === 'container')
        return small ? '25px 50px 25px 50px' : '0px 150px 0px 150px'
    else
        return small ? '10px 20px 10px 20px' : '30px 150px 30px 150px'
}