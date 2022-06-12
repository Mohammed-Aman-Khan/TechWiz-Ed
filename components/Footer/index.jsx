import Head from 'next/head'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import InputAdornment from '@mui/material/InputAdornment'
import Link from 'next/link'
import { useTheme, useMediaQuery } from '@mui/material'
import { Fragment } from 'react'
import { useResponsiveFontSize } from '../../util/responsive'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import TwitterIcon from '@mui/icons-material/Twitter'
import InstagramIcon from '@mui/icons-material/Instagram'
import YouTubeIcon from '@mui/icons-material/YouTube'
import FacebookIcon from '@mui/icons-material/Facebook'
import CopyrightIcon from '@mui/icons-material/Copyright'
import Stack from '@mui/material/Stack'

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
    },
]

const Projects = [
    {
        project: 'Machine Learning & Artificial Intelligence',
        path: '/projects/machine-learning-and-artificial-intelligence'
    },
    {
        project: 'Embedded Systems & IoT',
        path: '/projects/embedded-systems-and-iot'
    },
    {
        project: 'Ethical Hacking',
        path: '/projects/ethical-hacking'
    },
    {
        project: 'Blockchain',
        path: '/projects/Blockchain'
    },
    {
        project: 'Robotics',
        path: '/projects/robotics'
    },
]

const SocialLinks = [
    {
        icon: <LinkedInIcon sx={ { color: 'white' } } />,
        link: 'https://www.linkedin.com',
    },
    {
        icon: <TwitterIcon sx={ { color: 'white' } } />,
        link: 'https://www.twitter.com',
    },
    {
        icon: <InstagramIcon sx={ { color: 'white' } } />,
        link: 'https://www.instagram.com',
    },
    {
        icon: <YouTubeIcon sx={ { color: 'white' } } />,
        link: 'https://www.youtube.com',
    },
    {
        icon: <FacebookIcon sx={ { color: 'white' } } />,
        link: 'https://www.facebook.com',
    },
]

const Footer = () => {

    const { breakpoints } = useTheme()
    const small = useMediaQuery(breakpoints.down('md'))
    const medium = useMediaQuery(breakpoints.down('lg'))
    const { h5, h6, caption, helper } = useResponsiveFontSize()

    return <>
        <Head>
            <title>The Ed</title>
        </Head>
        <Paper
            square
            elevation={ 0 }
            sx={ {
                color: 'white',
                backgroundColor: '#1B1C31',
                padding: small ? '20px' : '50px'
            } }
        >
            <Grid container>
                <Grid
                    container item
                    xs={ 12 } sm={ 12 } md={ 12 } lg={ 6 } xl={ 6 }
                >
                    <Grid
                        item
                        xs={ 12 }
                        sx={ { marginBottom: '30px' } }
                    >
                        <Link
                            href='/'
                            passHref
                        >
                            <Typography sx={ { cursor: 'pointer', fontSize: h5 } }>
                                Logo
                            </Typography>
                        </Link>
                    </Grid>
                    <Grid
                        item
                        xs={ 12 } sm={ 12 } md={ 12 } lg={ 6 } xl={ 6 }
                        sx={ { marginBottom: '25px' } }
                    >
                        <Typography sx={ { fontSize: caption } }>
                            Address - lorem ipsum dolor sit amet, consectur adipiscing.
                        </Typography>
                    </Grid>
                    <Grid
                        item
                        xs={ 12 }
                        sx={ { marginBottom: '30px' } }
                    >
                        <Typography sx={ { fontSize: caption } }>
                            xyz@gmail.com
                        </Typography>
                    </Grid>
                    <Grid
                        item
                        xs={ 12 }
                        sx={ { marginBottom: '15px' } }
                    >
                        <Typography sx={ { fontSize: h6 } }>
                            Subscribe for updates
                        </Typography>
                    </Grid>
                    <Grid
                        item
                        xs={ 12 }
                    >
                        <form>
                            <TextField
                                placeholder="Your Email"
                                variant="standard"
                                InputProps={ {
                                    style: {
                                        fontSize: caption,
                                    },
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <Button
                                                disableElevation
                                                variant="contained"
                                                sx={ {
                                                    backgroundColor: '#5080FF',
                                                    color: 'white',
                                                    height: '50px',
                                                    padding: '0px 25px 0px 25px',
                                                    borderRadius: '0px 18px 18px 0px',
                                                    fontSize: caption,
                                                } }
                                            >
                                                Subscribe
                                            </Button>
                                        </InputAdornment>
                                    ),
                                    sx: {
                                        backgroundColor: 'white',
                                        borderRadius: '18px',
                                        paddingLeft: '25px',
                                        height: '50px',
                                    },
                                    disableUnderline: true,
                                } }
                            />
                        </form>
                    </Grid>
                </Grid>
                <Grid
                    container item
                    xs={ 12 } sm={ 12 } md={ 12 } lg={ 6 } xl={ 6 }
                    sx={ { height: '100%', marginTop: medium && !small ? '40px' : '0px' } }
                >
                    <Grid
                        container item
                        xs={ 12 } sm={ 12 } md={ 6 } lg={ 6 } xl={ 6 }
                        sx={ small ? { marginTop: '40px' } : {} }
                    >
                        <Grid item>
                            <Typography sx={ { fontWeight: 700, fontSize: h6 } }>
                                Links
                            </Typography>
                            <br /><br />
                            {
                                Links.map(({ link, path }, index) => <Fragment key={ link }>
                                    <Link href={ path } passHref>
                                        <Typography
                                            sx={ {
                                                cursor: 'pointer',
                                                fontSize: caption,
                                                marginTop: small ? '0px' : '10px',
                                                marginBottom: small ? '0px' : '10px'
                                            } }
                                        >
                                            { link }
                                        </Typography>
                                    </Link>
                                    { Links.length === index + 1 ? <></> : <br /> }
                                </Fragment>)
                            }
                        </Grid>
                    </Grid>
                    <Grid
                        container item
                        xs={ 12 } sm={ 12 } md={ 6 } lg={ 6 } xl={ 6 }
                        sx={ small ? { marginTop: '40px' } : {} }
                    >
                        <Grid item>
                            <Typography sx={ { fontWeight: 700, fontSize: h6 } }>
                                Projects
                            </Typography>
                            <br /><br />
                            {
                                Projects.map(({ project, path }, index) => <Fragment key={ project }>
                                    <Link href={ path } passHref>
                                        <Typography
                                            sx={ {
                                                cursor: 'pointer',
                                                fontSize: caption,
                                                marginTop: small ? '0px' : '10px',
                                                marginBottom: small ? '0px' : '10px'
                                            } }
                                        >
                                            { project }
                                        </Typography>
                                    </Link>
                                    { Projects.length === index + 1 ? <></> : <br /> }
                                </Fragment>)
                            }
                        </Grid>
                    </Grid>
                </Grid>
                {
                    Array.from({ length: 5 }, (_, i) => i)
                        .map(i => <Grid key={ i } item xs={ 12 }>&nbsp;</Grid>)
                }
                <Grid
                    container item
                    xs={ 12 }
                    justifyContent='center'
                    alignItems='center'
                >
                    <Stack spacing={ 3 } direction='row'>
                        {
                            SocialLinks
                                .map(({ icon, link }) =>
                                    <a key={ link } target='_blank' rel='noopener noreferrer' href={ link }>
                                        { icon }
                                    </a>
                                )
                        }
                    </Stack>
                </Grid>
                {
                    Array.from({ length: 2 }, (_, i) => i)
                        .map(i => <Grid key={ i } item xs={ 12 }>&nbsp;</Grid>)
                }
                <Grid
                    container item
                    xs={ 12 }
                    justifyContent='center'
                    alignItems='center'
                >
                    <Typography
                        sx={ {
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            fontSize: helper,
                        } }
                    >
                        <CopyrightIcon />&nbsp;{ (new Date()).getFullYear() } Techwiz Labs. All rights reserved.
                    </Typography>
                </Grid>
            </Grid>
        </Paper>
    </>
}

export default Footer