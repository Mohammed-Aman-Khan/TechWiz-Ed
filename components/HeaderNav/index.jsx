import { useRouter } from 'next/router'
import { useState, useCallback, useEffect, } from 'react'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Link from 'next/link'
import Fab from '@mui/material/Fab'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import Drawer from '@mui/material/Drawer'
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward'
import CloseIcon from '@mui/icons-material/Close'
import { useBreakpoint, usePadding } from '../../util/responsive'
import { ThemeContext } from '../../util/theme'
import { useContext } from 'react'
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined'
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined'
import { useTheme } from '@mui/material'

const Links = [
    {
        link: 'Home',
        path: '/',
    },
    {
        link: 'About Us',
        path: '/about',
    },
    {
        link: 'Projects',
        path: '/projects',
    },
    {
        link: 'Careers',
        path: '/careers',
    },
    {
        link: 'Contact Us',
        path: '/contact',
    }
]

const HeaderNav = () => {

    const theme = useTheme()
    const router = useRouter()
    const small = useBreakpoint()
    const padding = usePadding('header')
    const [ state, setState ] = useState(false)
    const { toggleTheme } = useContext(ThemeContext)

    const toggleDrawer = useCallback(open => event => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift'))
            return
        setState(open)
    }, [ setState ])
    const [ scrollY, setScrollY ] = useState(0)

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY)
        handleScroll()
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return <>
        <Grid
            container
            sx={{
                padding: padding,
                // position: 'absolute',
                // top: 0,
                // left: 0,
                // backgroundColor: 'white',
                // boxShadow: scrollY ? '0px 5px 50px -10px rgba(0, 0, 0, 0.2)' : 'none',
                // zIndex: 2147483647,
            }}
            justifyContent='space-between'
            alignItems='center'
            flexDirection='row'
            direction='row'
        >
            <Grid item>
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    {
                        small ? <>
                            <IconButton
                                size={small ? 'small' : 'medium'}
                                onClick={toggleDrawer(true)}
                            >
                                <MenuIcon />
                            </IconButton>
                            &nbsp;
                        </> : <></>
                    }
                    <Typography
                        variant='h4'
                        sx={{
                            fontWeight: 700,
                        }}
                    >
                        LOGO
                    </Typography>
                </div>
            </Grid>
            {
                !small ? <>
                    <Grid
                        item
                        justifyContent='center'
                        alignItems='center'
                        sx={{ flexGrow: 0.2 }}
                    >
                        <Grid
                            container
                            justifyContent='space-evenly'
                            alignItems='center'
                            flexDirection='row'
                        >
                            {
                                Links.map(({ link, path }) => {
                                    const currentPath = router.pathname
                                    const current = currentPath.replace('/', '') === path.replace('/', '')

                                    return <Link key={path} href={path} passHref>
                                        <Grid item>
                                            <Typography
                                                sx={{
                                                    fontStyle: 'normal',
                                                    fontWeight: current ? 700 : 500,
                                                    fontSize: '20px',
                                                    letterSpacing: '-0.02em',
                                                    cursor: 'pointer',
                                                    color: current ? '#5080FF' : '#6E7387',
                                                    lineHeight: '40px'
                                                }}
                                            >
                                                {link}
                                            </Typography>
                                        </Grid>
                                    </Link>
                                })
                            }
                        </Grid>
                    </Grid>
                    <Grid item>
                        <IconButton
                            onClick={() => toggleTheme()}
                            sx={{
                                borderRadius: '10px',
                                border: theme.palette.mode === 'light' ? '2px solid darkgrey' : '1px solid lightgrey',
                            }}
                        >
                            {
                                theme.palette.mode === 'light' ? <DarkModeOutlinedIcon /> : <LightModeOutlinedIcon />
                            }
                        </IconButton>
                    </Grid>
                </>
                    : <></>
            }
        </Grid>
        {
            scrollY > 100 ?
                <Fab
                    size="small"
                    aria-label="Go to top"
                    sx={{
                        position: 'fixed',
                        right: small ? '5px' : '10px',
                        bottom: small ? '5px' : '10px',
                        backgroundColor: 'black',
                        color: 'white',
                        '&:hover': {
                            color: 'black',
                        }
                    }}
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                >
                    <ArrowUpwardIcon />
                </Fab>
                : <></>
        }
        <Drawer
            anchor={'left'}
            open={state}
            onClose={toggleDrawer(false)}
        >
            <Box
                sx={{ width: 250 }}
                role="presentation"
                onClick={toggleDrawer(false)}
                onKeyDown={toggleDrawer(false)}
            >
                <List>
                    <ListItem>
                        <ListItemText
                            primary={
                                <>
                                    <IconButton
                                        onClick={() => toggleTheme()}
                                        sx={{
                                            borderRadius: '10px',
                                            border: theme.palette.mode === 'light' ? '2px solid darkgrey' : '1px solid lightgrey',
                                        }}
                                    >
                                        {
                                            theme.palette.mode === 'light' ? <DarkModeOutlinedIcon /> : <LightModeOutlinedIcon />
                                        }
                                    </IconButton>
                                    <IconButton
                                        sx={{ float: 'right' }}
                                    >
                                        <CloseIcon />
                                    </IconButton>
                                </>
                            }
                        />
                    </ListItem>
                    <Divider />
                    {
                        Links
                            .map(({ link, path }) =>
                                <ListItem
                                    button
                                    key={link}
                                    onClick={() => router.push(path)}
                                >
                                    <ListItemText
                                        primary={link}
                                    />
                                </ListItem>
                            )
                    }
                </List>
            </Box>
        </Drawer>
    </>
}

export default HeaderNav