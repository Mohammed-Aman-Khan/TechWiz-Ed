/* eslint-disable import/no-anonymous-default-export */
import { useCallback, useMemo } from 'react'
import { useMediaQuery, useTheme } from '@mui/material'

export const useBreakpoint = () => {
    const theme = useTheme()
    const small = useMediaQuery(theme.breakpoints.down('lg'))

    return small
}

export const usePadding = (component = 'container') => {
    const small = useBreakpoint()

    if (component === 'container')
        return small ? '25px' : '0px 150px 0px 150px'
    else
        return small ? '10px 20px 10px 20px' : '30px 150px 30px 150px'
}

export const useResponsiveFontSize = (variant) => {

    const theme = useTheme()
    const small = useMediaQuery(theme.breakpoints.down('sm'))
    const medium = useMediaQuery(theme.breakpoints.down('lg'))

    const getResponsiveValue = useCallback((smVal, mdVal, lgVal) => `${ small ? smVal : medium ? mdVal : lgVal }px`, [ small, medium ])

    const h1 = useMemo(() => getResponsiveValue(40, 70, 100), [ getResponsiveValue ])
    const h2 = useMemo(() => getResponsiveValue(35, 60, 85), [ getResponsiveValue ])
    const h3 = useMemo(() => getResponsiveValue(30, 50, 70), [ getResponsiveValue ])
    const h4 = useMemo(() => getResponsiveValue(25, 40, 55), [ getResponsiveValue ])
    const h5 = useMemo(() => getResponsiveValue(20, 30, 40), [ getResponsiveValue ])
    const h6 = useMemo(() => getResponsiveValue(15, 20, 25), [ getResponsiveValue ])
    const body = useMemo(() => getResponsiveValue(15, 17.5, 20), [ getResponsiveValue ])
    const caption = useMemo(() => getResponsiveValue(14, 16, 18), [ getResponsiveValue ])
    const helper = useMemo(() => getResponsiveValue(10, 12, 14), [ getResponsiveValue ])

    return {
        h1,
        h2,
        h3,
        h4,
        h5,
        h6,
        body,
        caption,
        helper,
    }
}