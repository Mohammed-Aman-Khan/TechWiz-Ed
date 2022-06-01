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
        project: 'Embedded Systems & IoT',
        path: '/projects/embedded-systems-and-iot'
    },
    {
        project: 'Machine Learning & Artificial Intelligence',
        path: '/projects/machine-learning-and-artificial-intelligence'
    },
    {
        project: 'Ethical Hacking',
        path: '/projects/ethical-hacking'
    },
    {
        project: 'Robotics',
        path: '/projects/robotics'
    },
    {
        project: 'Blockchain',
        path: '/projects/Blockchain'
    },
]

const Footer = () => {

    const { breakpoints } = useTheme()
    const small = useMediaQuery(breakpoints.down('md'))
    const medium = useMediaQuery(breakpoints.down('lg'))

    return <>
        <Head>
            <title>The Ed</title>
        </Head>
        <Paper
            square
            elevation={0}
            sx={{
                color: 'white',
                backgroundColor: '#1B1C31',
                padding: small ? '20px' : '50px'
            }}
        >
            <Grid container>
                <Grid
                    container item
                    xs={12} sm={12} md={12} lg={6} xl={6}
                >
                    <Grid
                        item
                        xs={12}
                        sx={{ marginBottom: '30px' }}
                    >
                        <Typography variant="h3">
                            Logo
                        </Typography>
                    </Grid>
                    <Grid
                        item
                        xs={12} sm={12} md={12} lg={6} xl={6}
                        sx={{ marginBottom: '25px' }}
                    >
                        <Typography>
                            Address - lorem ipsum dolor sit amet, consectur adipiscing.
                        </Typography>
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        sx={{ marginBottom: '30px' }}
                    >
                        <Typography>
                            xyz@gmail.com
                        </Typography>
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        sx={{ marginBottom: '15px' }}
                    >
                        <Typography variant="h6">
                            Subscribe for updates
                        </Typography>
                    </Grid>
                    <Grid
                        item
                        xs={12}
                    >
                        <form>
                            <TextField
                                placeholder="Your Email"
                                variant="standard"
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <Button
                                                disableElevation
                                                variant="contained"
                                                sx={{
                                                    backgroundColor: '#5080FF',
                                                    color: 'white',
                                                    height: '50px',
                                                    padding: '0px 25px 0px 25px',
                                                    borderRadius: '0px 18px 18px 0px',
                                                }}
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
                                }}
                            />
                        </form>
                    </Grid>
                </Grid>
                <Grid
                    container item
                    xs={12} sm={12} md={12} lg={6} xl={6}
                    sx={{ height: '100%', marginTop: medium && !small ? '40px' : '0px' }}
                >
                    <Grid
                        container item
                        xs={12} sm={12} md={6} lg={6} xl={6}
                        sx={small ? { marginTop: '40px' } : {}}
                    >
                        <Grid item>
                            <Typography variant="h5" sx={{ fontWeight: 700 }}>
                                Links
                            </Typography>
                            <br /><br />
                            {
                                Links.map(({ link, path }, index) => <Fragment key={link}>
                                    <Link href={path} passHref>
                                        <Typography sx={{ cursor: 'pointer' }}>
                                            {link}
                                        </Typography>
                                    </Link>
                                    {Links.length === index + 1 ? <></> : <br />}
                                </Fragment>)
                            }
                        </Grid>
                    </Grid>
                    <Grid
                        container item
                        xs={12} sm={12} md={6} lg={6} xl={6}
                        sx={small ? { marginTop: '40px' } : {}}
                    >
                        <Grid item>
                            <Typography variant="h5" sx={{ fontWeight: 700 }}>
                                Projects
                            </Typography>
                            <br /><br />
                            {
                                Projects.map(({ project, path }, index) => <Fragment key={project}>
                                    <Link href={path} passHref>
                                        <Typography sx={{ cursor: 'pointer' }}>
                                            {project}
                                        </Typography>
                                    </Link>
                                    {Projects.length === index + 1 ? <></> : <br />}
                                </Fragment>)
                            }
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Paper>
    </>
}

export default Footer