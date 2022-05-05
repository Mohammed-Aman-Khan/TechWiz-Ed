import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Link from 'next/link'

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

    const router = useRouter()
    const [scrollY, setScrollY] = useState(0)

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY)
        handleScroll()
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, []);
    console.log(scrollY)
    return <Grid
        container
        sx={{
            padding: '30px 150px 30px 150px',
            position: 'fixed',
            top: 0,
            left: 0,
            backgroundColor: 'white',
            boxShadow: scrollY ? '0px 5px 50px -10px rgba(0, 0, 0, 0.2)' : 'none'
        }}
        justifyContent='space-between'
        alignItems='center'
        flexDirection='row'
        direction='row'
    >
        <Grid item>
            <Typography variant='h4' sx={{ fontWeight: 700 }}>
                LOGO
            </Typography>
        </Grid>
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

                        return <Link key={ path } href={ path }>
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
                                    { link }
                                </Typography>
                            </Grid>
                        </Link>
                    })
                }
            </Grid>
        </Grid>
        <Grid item>
            <Button
                sx={{
                    backgroundColor: 'black',
                    color:'white',
                    borderRadius: '25px',
                    padding: '10px 20px 10px 20px',
                    '&:hover' : {
                        color: 'black',
                    }
                }}
            >
                Start Free Trial
            </Button>
        </Grid>
    </Grid>
}

export default HeaderNav