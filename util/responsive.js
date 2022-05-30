/* eslint-disable import/no-anonymous-default-export */
import { useMediaQuery, useTheme } from '@mui/material'

export const useBreakpoint = () => {
    const theme = useTheme()
    const small = useMediaQuery(theme.breakpoints.down('lg'))

    return small
}

export const usePadding = (component = 'container') => {
    const small = useBreakpoint()

    if (component === 'container')
        return small ? '25px 50px 25px 50px' : '0px 150px 0px 150px'
    else
        return small ? '10px 20px 10px 20px' : '30px 150px 30px 150px'
}