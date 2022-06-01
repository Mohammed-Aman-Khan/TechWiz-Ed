/* eslint-disable @next/next/no-img-element */
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import TestimonialCard from '../components/TestimonialCard'
import MuiAccordion from '@mui/material/Accordion'
import AccordionDetails from '@mui/material/AccordionDetails'
import AccordionSummary from '@mui/material/AccordionSummary'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { styled } from '@mui/material/styles'
import { Fragment, useState } from 'react'
import Divider from '@mui/material/Divider'
import Chip from '@mui/material/Chip'
import { useBreakpoint, usePadding } from '../util/responsive'
import Link from 'next/link'

const HeroText = ({ children, style = {}, small }) => {
    return <Typography
        variant={small ? 'h3' : 'h1'}
        sx={{
            fontWeight: 700,
            display: 'inline-block',
            ...style,
        }}
    >
        {children}
    </Typography>
}

const WhatCanItDo = ({
    title,
    color,
    number,
    text,
    small,
}) => {
    return <Paper
        elevation={0}
        sx={{
            padding: small ? '10px' : '20px',
        }}
    >
        <Chip
            label={number}
            sx={{
                backgroundColor: color,
                color: 'white',
            }}
        />
        <br />
        {small ? <br /> : <></>}
        <Typography
            sx={{
                fontFamily: 'Poppins',
                fontWeight: small ? 600 : 700,
                fontSize: small ? '25px' : '40px',
                lineHeigth: small ? '35px' : '60px',
            }}
        >
            {title}
        </Typography>
        <br />
        {small ? <br /> : <></>}
        <Typography
            sx={{
                fontFamily: 'Poppins',
                fontWeight: 400,
                fontSize: small ? '15px' : '20px',
                lineHeigth: small ? '25px' : '34px',
                color: '#6E7387',
            }}
        >
            {text}
        </Typography>
    </Paper>
}

const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
    padding: '25px',
    '&:not(:last-child)': {
        borderBottom: 0,
    },
    '&:before': {
        display: 'none',
    },
}))

const testimonials = [
    {
        title: 'Great way to boost work culture whilst working',
        user: 'Sehaj Sharma',
        rating: 4.9,
        image: '/sample testimonial image.svg',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam netus mattis enim sollicitudin ipsum enim. Amet vitae pellentesque lectus potenti maecenas adipiscing.',
    },
    {
        title: 'Great way to boost work culture whilst working',
        user: 'Sehaj Sharma',
        rating: 4.9,
        image: '/sample testimonial image.svg',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam netus mattis enim sollicitudin ipsum enim. Amet vitae pellentesque lectus potenti maecenas adipiscing.',
    },
    {
        title: 'Great way to boost work culture whilst working',
        user: 'Sehaj Sharma',
        rating: 4.9,
        image: '/sample testimonial image.svg',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam netus mattis enim sollicitudin ipsum enim. Amet vitae pellentesque lectus potenti maecenas adipiscing.',
    },
    {
        title: 'Great way to boost work culture whilst working',
        user: 'Sehaj Sharma',
        rating: 4.9,
        image: '/sample testimonial image.svg',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam netus mattis enim sollicitudin ipsum enim. Amet vitae pellentesque lectus potenti maecenas adipiscing.',
    },
    {
        title: 'Great way to boost work culture whilst working',
        user: 'Sehaj Sharma',
        rating: 4.9,
        image: '/sample testimonial image.svg',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam netus mattis enim sollicitudin ipsum enim. Amet vitae pellentesque lectus potenti maecenas adipiscing.',
    },
    {
        title: 'Great way to boost work culture whilst working',
        user: 'Sehaj Sharma',
        rating: 4.9,
        image: '/sample testimonial image.svg',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam netus mattis enim sollicitudin ipsum enim. Amet vitae pellentesque lectus potenti maecenas adipiscing.',
    },
]

const whatCanEdDo = [
    {
        title: 'Supports Arduino',
        text: 'The flexible nature of Arduino lets the user have easy access to control GPIO pins and use variety of communication protocols to interface various sensors and internal hardware of the device.',
        color: '#AAA7FF',
        number: '01',
    },
    {
        title: 'GSM, Wi-Fi, Bluetooth',
        text: 'GSM give access to calls and SMS whereas Wi-Fi gives access to different internet protocols and APIs.While Bluetooth can connect to different devices, making this IoT enabled smart device.',
        color: '#FFB78D',
        number: '02',
    },
    {
        title: 'Camera & Touch Screen Display',
        text: 'The device gives low level access to camera and lets user manipulate pictures by using various ML models.The user can interact with device through various touch gestures.',
        color: '#86E195',
        number: '03',
    },
]

const questions = [
    {
        question: 'How does it work?',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit massa diam in fermentum morbi proin et vestibulum sodales.',
    },
    {
        question: 'Are there any additional charges?',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit massa diam in fermentum morbi proin et vestibulum sodales.',
    },
    {
        question: 'How can I purchase the product?',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit massa diam in fermentum morbi proin et vestibulum sodales.',
    },
    {
        question: 'What features do you offer an what not?',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit massa diam in fermentum morbi proin et vestibulum sodales.',
    },
]

const LandingPage = () => {

    const small = useBreakpoint()
    const containerPadding = usePadding('container')
    const [ expanded, setExpanded ] = useState(questions[ 0 ].question)

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false)
    }

    return <>
        <section id='landing' className='section-100vh'>
            <Grid
                container
                className={small && 'center'}
                sx={{ height: '100%', padding: containerPadding }}
                alignItems='center'
                justifyContent={small ? 'space-evenly' : 'space-between'}
            >
                <Grid item flexDirection='column'
                    xs={12} sm={12} md={12} lg={6} xl={6}
                    className={small && 'center'}
                >
                    <HeroText
                        small={small}
                        style={{
                            background: 'linear-gradient(96.89deg, #5A87FF 3.1%, #8C58FB 36.8%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                        }}
                    >
                        Go on,
                    </HeroText>
                    <br />
                    <HeroText
                        small={small}
                    >
                        Get your
                    </HeroText>
                    <br />
                    <HeroText
                        small={small}
                        style={{
                            background: 'linear-gradient(96.89deg, #5A87FF 3.1%, #8C58FB 36.8%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                        }}
                    >
                        Techwiz
                    </HeroText>
                    <HeroText
                        small={small}
                    >
                        &nbsp;out.
                    </HeroText>
                    <br />
                    {
                        small ?
                            <center>
                                <Typography
                                    sx={{
                                        fontFamily: 'Poppins',
                                        color: '#6E7387',
                                        maxWidth: '90%',
                                        lineHeight: '30px',
                                        fontSize: '15px'
                                    }}
                                >
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus quis vulputate ipsum, massa ac suspendisse laoreet amet egestas. Felis iaculis.
                                </Typography>
                            </center> :
                            <Typography
                                sx={{
                                    fontFamily: 'Poppins',
                                    color: '#6E7387',
                                    maxWidth: '600px',
                                    lineHeight: '45px',
                                    fontSize: '24px'
                                }}
                            >
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus quis vulputate ipsum, massa ac suspendisse laoreet amet egestas. Felis iaculis.
                            </Typography>
                    }
                    <br /><br />
                    <Button
                        size={small ? 'medium' : 'large'}
                        variant="link"
                        href='#has-never-been-possible'
                        sx={{
                            backgroundColor: '#5080FF',
                            color: 'white',
                            fontWeight: small ? 500 : 600,
                            fontSize: small ? '18px' : '25px',
                            height: small ? '40px' : '70px',
                            borderRadius: '40px',
                            padding: small ? '10px 15px 10px 15px' : '15px 30px 15px 30px',
                            '&:hover': {
                                color: '#5080FF',
                            }
                        }}
                    >
                        Watch Demo
                    </Button>
                    &nbsp;&nbsp;&nbsp;
                    <Button
                        size={small ? 'medium' : 'large'}
                        variant="link"
                        href='#what-you-can-do'
                        sx={{
                            fontWeight: small ? 500 : 600,
                            fontSize: small ? '18px' : '25px',
                            height: small ? '40px' : '70px',
                            borderRadius: '40px',
                            padding: small ? '10px 15px 10px 15px' : '15px 30px 15px 30px',
                        }}
                    >
                        Learn More
                    </Button>
                </Grid>
                <Grid item
                    xs={12} sm={12} md={12} lg={6} xl={6}
                >
                    <img src='/big-screen-hero.svg' alt="Illustration" style={{ width: '100%', height: 'auto' }} />
                </Grid>
            </Grid>
        </section>
        <section id='has-never-been-possible' className='section-min-100vh'>
            <Grid
                container
                className={small && 'center'}
                sx={{ height: '100%', padding: containerPadding }}
                alignItems='center'
                justifyContent='center'
            >
                <center>
                    <Typography
                        variant={small ? 'h4' : 'h2'}
                        style={{
                            fontFamily: 'Poppins',
                            fontWeight: 600,
                        }}
                    >
                        Has never been possible before
                    </Typography>
                    <br />
                    <Typography
                        sx={{
                            fontFamily: 'Poppins',
                            color: '#6E7387',
                            maxWidth: small ? '90%' : '1200px',
                            lineHeight: small ? '35px' : '51px',
                            fontSize: small ? '20px' : '30px'
                        }}
                    >
                        The Ed-Phone is an innovative product with the sole purpose of revolutionizing technical education.
                        The flexibility and features of this product enables users to learn cutting-edge technology through
                        exciting and fun-filled experience.
                    </Typography>
                    <img src="/floating ed.png" alt="Floating Ed" style={{ width: '90vw', maxWidth: 750, height: 'auto', marginTop: 150 }} />
                </center>
            </Grid>
        </section>
        <section id='what-you-can-do' className='section-min-100vh'>
            <Grid
                container
                sx={{ height: '100%', padding: containerPadding }}
                alignItems={small && 'center'}
                justifyContent='center'
            >
                <center>
                    <Typography
                        variant={small ? 'h4' : 'h2'}
                        style={{
                            fontFamily: 'Poppins',
                            fontWeight: 600,
                        }}
                    >
                        Explore what can you do
                    </Typography>
                    <br />
                    <Typography
                        sx={{
                            fontFamily: 'Poppins',
                            color: '#6E7387',
                            maxWidth: small ? '90%' : '1200px',
                            lineHeight: small ? '35px' : '51px',
                            fontSize: small ? '20px' : '30px'
                        }}
                    >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam
                    </Typography>
                </center>
                <Grid item xs={12}>&nbsp;</Grid>
                <Grid item xs={12}>&nbsp;</Grid>
                <Grid item xs={12}>&nbsp;</Grid>
                <Grid item xs={12}>&nbsp;</Grid>
                <Grid item xs={12}>&nbsp;</Grid>
                <Grid item xs={12}>&nbsp;</Grid>
                <Grid
                    container item
                    spacing={small ? 5 : 10}
                >
                    <Grid
                        item
                        xs={12} sm={12} md={6} lg={6} xl={6}
                    >
                        {
                            whatCanEdDo
                                .map(({
                                    title,
                                    text,
                                    color,
                                    number,
                                }) =>
                                    <Grid
                                        item
                                        xs={12}
                                        key={title}
                                    >
                                        <WhatCanItDo
                                            {...{
                                                title,
                                                text,
                                                color,
                                                number,
                                                small,
                                            }}
                                        />
                                    </Grid>
                                )
                        }
                    </Grid>
                    <Grid
                        item
                        xs={12} sm={12} md={6} lg={6} xl={6}
                    >
                        <div
                            style={{
                                height: '100%',
                                width: '100%',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                backgroundColor: '#BEBDFF',
                                borderRadius: '50px',
                                padding: '20px'
                            }}
                        >
                            <img
                                src='/lightphone.png'
                                alt="The Ed Phone"
                                style={small ?
                                    { width: '100%', height: 'auto', maxWidth: 400 } :
                                    { width: '50%', height: 'auto' }
                                }
                            />
                        </div>
                    </Grid>
                </Grid>
            </Grid>
        </section>
        <section id='what-can-ed-do' className='section-100vh'>
            <Grid
                container
                className={small && 'center'}
                sx={{ height: '100%', padding: containerPadding }}
                alignItems='center'
                justifyContent='center'
            >
                <center>
                    <Typography
                        variant={small ? 'h4' : 'h2'}
                        style={{
                            fontFamily: 'Poppins',
                            fontWeight: 600,
                        }}
                    >
                        What can ed do?
                    </Typography>
                    <br />
                    <Typography
                        sx={{
                            fontFamily: 'Poppins',
                            color: '#6E7387',
                            maxWidth: small ? '100%' : '1200px',
                            lineHeight: small ? '35px' : '51px',
                            fontSize: small ? '20px' : '30px'
                        }}
                    >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam
                    </Typography>
                    <br /><br />
                    <video controls style={{ width: small ? '100%' : '80%', height: 'auto', outline: 'none', borderRadius: 10 }} autoPlay>
                        <source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type='video/mp4' />
                    </video>
                    <br /><br />
                    <Link
                        href='/projects'
                        passHref
                    >
                        <Button
                            sx={{
                                backgroundColor: '#5080FF',
                                color: 'white',
                                fontSize: '20px',
                                fontWeight: 600,
                                lineHeight: '50px',
                                padding: '5px 50px 5px 50px',
                                borderRadius: '40px',
                                '&:hover': {
                                    color: '#5080FF',
                                },
                            }}
                            variant="link"
                        >
                            Explore
                        </Button>
                    </Link>
                </center>
            </Grid>
        </section>
        <section id='vision' className='section-100vh'>
            <Grid
                container
                className={small && 'center'}
                sx={{ height: '100%', padding: containerPadding }}
                alignItems='center'
                justifyContent='center'
            >
                <Grid
                    container
                    alignItems='center'
                    justifyContent="space-evenly"
                    spacing={10}
                >
                    <Grid
                        item container
                        className={small && 'center'}
                        xs={12} sm={12} md={12} lg={6} xl={6}
                    >
                        <img src='/our vision.svg' alt="Our Vision" style={{ width: '100%', height: 'auto' }} />
                    </Grid>
                    <Grid
                        item
                        xs={12} sm={12} md={12} lg={6} xl={6}
                    >
                        <Typography
                            variant={small ? 'h4' : 'h2'}
                            style={{
                                fontFamily: 'Poppins',
                                fontWeight: 600,
                            }}
                        >
                            Our Vision
                        </Typography>
                        <br />
                        <Typography
                            sx={{
                                fontFamily: 'Poppins',
                                color: '#6E7387',
                                maxWidth: small ? '100%' : '600px',
                                lineHeight: small ? '30px' : '51px',
                                fontSize: small ? '20px' : '25px',
                            }}
                        // className='text-justify'
                        >
                            To develop cutting edge ED-Tech products and career building courses to make a difference in the education sector.
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
        </section>
        <section id='vision' className='section-100vh'>
            <Grid
                container
                className={small && 'center'}
                sx={{ height: '100%', padding: containerPadding }}
                alignItems='center'
                justifyContent='center'
            >
                <Grid
                    item
                >
                    <center>
                        <Typography
                            variant={small ? 'h4' : 'h2'}
                            style={{
                                fontFamily: 'Poppins',
                                fontWeight: 600,
                            }}
                        >
                            Our Mission
                        </Typography>
                        <br /><br />
                        <Typography
                            sx={{
                                fontFamily: 'Poppins',
                                color: '#6E7387',
                                maxWidth: small ? '100%' : '1200px',
                                lineHeight: small ? '50px' : '67px',
                                fontSize: small ? '25px' : '40px'
                            }}
                        // className='text-justify'
                        >
                            A futuristic product like ED-Phone and other services like the LMS platform, faculty Development Programs and Student workshops are the steps taken to realize our vision.
                        </Typography>
                    </center>
                </Grid>
            </Grid>
        </section>
        <section id='testimonials' className='section-min-100vh'>
            <Paper
                square
                elevation={24}
                sx={{ boxShadow: 'none' }}
            >
                <Grid
                    container
                    sx={{ height: '100%', padding: containerPadding }}
                    alignItems='center'
                    justifyContent='center'
                >
                    <Grid
                        container item
                    >
                        <Grid
                            item
                            xs={12}
                            className={small && 'center'}
                        >
                            <center>
                                <br /><br />
                                <Typography
                                    variant={small ? 'h4' : 'h2'}
                                    style={{
                                        fontFamily: 'Poppins',
                                        fontWeight: 600,
                                    }}
                                >
                                    Testimonials
                                </Typography>
                                <br />
                                <Typography
                                    sx={{
                                        fontFamily: 'Poppins',
                                        color: '#6E7387',
                                        maxWidth: small ? '100%' : '1000px',
                                        lineHeight: small ? '30px' : '51px',
                                        fontSize: small ? '20px' : '25px',
                                    }}
                                >
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisi mi convallis tempor, pellentesque elit vitae aliquet vitae.
                                </Typography>
                            </center>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>&nbsp;</Grid>
                    <Grid item xs={12}>&nbsp;</Grid>
                    <Grid item xs={12}>&nbsp;</Grid>
                    <Grid
                        item container
                        spacing={small ? 5 : 10}
                    >
                        {
                            testimonials
                                .map(({
                                    title,
                                    user,
                                    rating,
                                    image,
                                    text,
                                }) =>
                                    <Grid
                                        key={user}
                                        item
                                        xs={12} sm={6} md={6} lg={4} xl={4}
                                    >
                                        <TestimonialCard
                                            {...{
                                                title,
                                                user,
                                                rating,
                                                image,
                                                text,
                                                small
                                            }}
                                        />
                                    </Grid>
                                )
                        }
                    </Grid>
                    <Grid item xs={12}>&nbsp;</Grid>
                    <Grid item xs={12}>&nbsp;</Grid>
                    <Grid item xs={12}>&nbsp;</Grid>
                </Grid>
            </Paper>
        </section>
        <section id='any-questions' className='section-100vh'>
            <Grid
                container
                sx={{ height: '100%', padding: containerPadding }}
                alignItems='center'
                justifyContent='center'
            >
                <Grid
                    container item
                    spacing={small ? 5 : 10}
                >
                    <Grid
                        item
                        className={small && 'center'}
                        xs={12} sm={12} md={12} lg={6} xl={6}
                    >
                        <Typography
                            variant={small ? 'h4' : 'h2'}
                            sx={{
                                fontFamily: 'Poppins',
                                fontWeight: 600,
                                fontSize: small ? '40px' : '64px',
                                lineHeight: small ? '60px' : '90px',
                            }}
                        >
                            Any questions?
                            <br />
                            We got you.
                        </Typography>
                        <br /><br /><br />
                        <Typography
                            sx={{
                                fontFamily: 'Poppins',
                                fontWeight: 500,
                                fontSize: small ? '20px' : '28px',
                                lineHeight: small ? '30px' : '52px',
                                color: '#6E7387',
                            }}
                        >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ante nullam donec orci, pharetra ullamcorper tristique tempus sit.
                        </Typography>
                    </Grid>
                    <Grid
                        item
                        xs={12} sm={12} md={12} lg={6} xl={6}
                    >
                        {
                            questions
                                .map(({ question, answer }, index, arr) => <Fragment key={question}>
                                    <Accordion
                                        expanded={expanded === question}
                                        onChange={handleChange(question)}
                                    >
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon />}
                                        >
                                            <Typography
                                                sx={{
                                                    fontFamily: 'Poppins',
                                                    fontWeight: 500,
                                                    fontSize: small ? '20px' : '32px',
                                                    lineHeight: small ? '30px' : '45px',
                                                }}
                                            >
                                                {question}
                                            </Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography
                                                sx={{
                                                    fontFamily: 'Poppins',
                                                    fontWeight: 500,
                                                    fontSize: small ? '18px' : '24px',
                                                    lineHeight: small ? '25px' : '35px',
                                                    color: '#6E7387',
                                                }}
                                            >
                                                {answer}
                                            </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                    {index === arr.length - 1 ? <></> : <Divider />}
                                </Fragment>
                                )
                        }
                    </Grid>
                </Grid>
            </Grid>
        </section>
    </>
}

export default LandingPage