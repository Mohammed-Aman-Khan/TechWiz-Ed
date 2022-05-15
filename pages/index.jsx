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
import { Fragment } from 'react'
import Divider from '@mui/material/Divider'
import Chip from '@mui/material/Chip'

const HeroText = ({ children, style = {} }) => {
    return <Typography
        variant='h1'
        sx={ {
            fontWeight: 700,
            display: 'inline-block',
            ...style,
        } }
    >
        { children }
    </Typography>
}

const WhatCanItDo = ({
    title,
    color,
    number,
    text,
}) => {
    return <Paper
        elevation={ 0 }
        sx={ {
            padding: '20px',
        } }
    >
        <Chip
            label={ number }
            sx={ {
                backgroundColor: color,
                color: 'white',
            } }
        />
        <br /><br />
        <Typography
            sx={ {
                fontFamily: 'Poppins',
                fontWeight: 700,
                fontSize: '40px',
                lineHeigth: '60px',
            } }
        >
            { title }
        </Typography>
        <br /><br />
        <Typography
            sx={ {
                fontFamily: 'Poppins',
                fontWeight: 400,
                fontSize: '20px',
                lineHeigth: '34px',
                color: '#6E7387',
            } }
        >
            { text }
        </Typography>
    </Paper>
}

const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={ 0 } square { ...props } />
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

const LandingPage = () => {
    return <>
        <section className='section-100vh'>
            <Grid
                container
                sx={ { height: '100%', padding: '125px 150px 125px 150px' } }
                alignItems='center'
                justifyContent='space-between'
                flexDirection='row'
            >
                <Grid item flexDirection='column'>
                    <HeroText
                        style={ {
                            background: 'linear-gradient(96.89deg, #5A87FF 3.1%, #8C58FB 36.8%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                        } }
                    >
                        Go on,
                    </HeroText>
                    <br />
                    <HeroText>
                        Get your
                    </HeroText>
                    <br />
                    <HeroText
                        style={ {
                            background: 'linear-gradient(96.89deg, #5A87FF 3.1%, #8C58FB 36.8%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                        } }
                    >
                        Techwiz
                    </HeroText>
                    <HeroText>&nbsp;out.</HeroText>
                    <br />
                    <Typography
                        sx={ {
                            fontFamily: 'Poppins',
                            color: '#6E7387',
                            maxWidth: '600px',
                            lineHeight: '45px',
                            fontSize: ' 24px'
                        } }
                    >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus quis vulputate ipsum, massa ac suspendisse laoreet amet egestas. Felis iaculis.
                    </Typography>
                    <br /><br />
                    <Button
                        size='large'
                        sx={ {
                            backgroundColor: '#5080FF',
                            color: 'white',
                            fontWeight: 600,
                            fontSize: '25px',
                            height: '70px',
                            borderRadius: '40px',
                            padding: '15px 30px 15px 30px',
                            '&:hover': {
                                color: '#5080FF',
                            }
                        } }
                    >
                        Watch Demo
                    </Button>
                    &nbsp;&nbsp;&nbsp;
                    <Button
                        size='large'
                        variant="link"
                        sx={ {
                            fontWeight: 600,
                            fontSize: '25px',
                            height: '70px',
                            borderRadius: '40px',
                            padding: '15px 30px 15px 30px',
                        } }
                    >
                        Learn More
                    </Button>
                </Grid>
                <Grid item>
                    <img src='/big-screen-hero.svg' alt="Illustration" style={ { height: '85vh' } } />
                </Grid>
            </Grid>
        </section>
        <section className='section-min-100vh'>
            <Grid
                container
                sx={ { height: '100%', padding: '125px 150px 125px 150px' } }
                alignItems='center'
                justifyContent='center'
            >
                <center>
                    <Typography
                        variant='h2'
                        style={ {
                            fontFamily: 'Poppins',
                            fontWeight: 600,
                        } }
                    >
                        Has never been possible before
                    </Typography>
                    <br />
                    <Typography
                        sx={ {
                            fontFamily: 'Poppins',
                            color: '#6E7387',
                            maxWidth: '1200px',
                            lineHeight: '51px',
                            fontSize: ' 30px'
                        } }
                    >
                        The Ed-Phone is an innovative product with the sole purpose of revolutionizing technical education.
                        The flexibility and features of this product enables users to learn cutting-edge technology through
                        exciting and fun-filled experience.
                    </Typography>
                    <img src="/floating ed.png" alt="Floating Ed" style={ { width: '75vh', height: 'auto', marginTop: 150 } } />
                </center>
            </Grid>
        </section>
        <section className='section-min-100vh'>
            <Grid
                container
                sx={ { height: '100%', padding: '125px 150px 125px 150px' } }
                alignItems='center'
                justifyContent='center'
            >
                <center>
                    <Typography
                        variant='h2'
                        style={ {
                            fontFamily: 'Poppins',
                            fontWeight: 600,
                        } }
                    >
                        Explore what can you do
                    </Typography>
                    <br />
                    <Typography
                        sx={ {
                            fontFamily: 'Poppins',
                            color: '#6E7387',
                            maxWidth: '600px',
                            lineHeight: '51px',
                            fontSize: ' 30px'
                        } }
                    >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam
                    </Typography>
                </center>
                <Grid item xs={ 12 }>&nbsp;</Grid>
                <Grid item xs={ 12 }>&nbsp;</Grid>
                <Grid item xs={ 12 }>&nbsp;</Grid>
                <Grid
                    container
                    justifyContent="space-between"
                    flexDirection="row"
                >
                    <Grid
                        item container
                        sx={ {
                            width: '48%',
                        } }
                    >
                        {
                            [
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
                            ].map(({
                                title,
                                text,
                                color,
                                number,
                            }) =>
                                <Grid
                                    item
                                    xs={ 12 }
                                    key={ title }
                                >
                                    <WhatCanItDo
                                        { ...{
                                            title,
                                            text,
                                            color,
                                            number,
                                        } }
                                    />
                                </Grid>
                            )
                        }
                    </Grid>
                    <Grid
                        item container
                        sx={ {
                            width: '48%',
                            backgroundColor: '#BEBDFF',
                            height: '100%',
                            borderRadius: '50px'
                        } }
                        justifyContent='center'
                        alignItems='center'
                    >
                        <img src='https://images.ctfassets.net/tbduj203nkkk/2U2uWY7lYIsWMSyaw4MaOS/ce3790e1a12784d988bfc0dd0ca7a000/Night2.png' alt="The Ed Phone" style={ { width: '75%', height: 'auto' } } />
                    </Grid>
                </Grid>
            </Grid>
        </section>
        <section className='section-100vh'>
            <Grid
                container
                sx={ { height: '100%', padding: '125px 150px 125px 150px' } }
                alignItems='center'
                justifyContent='center'
            >
                <center>
                    <Typography
                        variant='h2'
                        style={ {
                            fontFamily: 'Poppins',
                            fontWeight: 600,
                        } }
                    >
                        What can ed do?
                    </Typography>
                    <br />
                    <Typography
                        sx={ {
                            fontFamily: 'Poppins',
                            color: '#6E7387',
                            maxWidth: '600px',
                            lineHeight: '51px',
                            fontSize: ' 30px'
                        } }
                    >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam
                    </Typography>
                    <br /><br />
                    <img src='/What can ed do.svg' alt="What can ed do?" style={ { width: '70%', heihgt: 'auto' } } />
                    <br /><br />
                    <Button
                        sx={ {
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
                        } }
                    >
                        Explore
                    </Button>
                </center>
            </Grid>
        </section>
        <section className='section-100vh'>
            <Grid
                container
                sx={ { height: '100%', padding: '125px 150px 125px 150px' } }
                alignItems='center'
                justifyContent='center'
            >
                <Grid
                    container
                    justifyContent="space-evenly"
                    alignItems="center"
                    flexDirection="row"
                >
                    <Grid
                        item container
                        sx={ { width: '35%' } }
                    >
                        <img src='/our vision.svg' alt="Our Vision" style={ { width: '100%', height: 'auto' } } />
                    </Grid>
                    <Grid
                        item
                        sx={ { width: '35%' } }
                    >
                        <Typography
                            variant='h2'
                            style={ {
                                fontFamily: 'Poppins',
                                fontWeight: 600,
                            } }
                        >
                            Our Vision
                        </Typography>
                        <br />
                        <Typography
                            sx={ {
                                fontFamily: 'Poppins',
                                color: '#6E7387',
                                maxWidth: '600px',
                                lineHeight: '51px',
                                fontSize: ' 30px'
                            } }
                        >
                            To develop cutting edge ED-Tech products and career building courses to make a difference in the education sector.
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
        </section>
        <section className='section-100vh'>
            <Grid
                container
                sx={ { height: '100%', padding: '125px 150px 125px 150px' } }
                alignItems='center'
                justifyContent='center'
            >
                <Grid
                    item
                >
                    <center>
                        <Typography
                            variant='h2'
                            style={ {
                                fontFamily: 'Poppins',
                                fontWeight: 600,
                            } }
                        >
                            Our Mission
                        </Typography>
                        <br /><br />
                        <Typography
                            sx={ {
                                fontFamily: 'Poppins',
                                color: '#6E7387',
                                maxWidth: '1200px',
                                lineHeight: '67px',
                                fontSize: ' 40px'
                            } }
                        >
                            A futuristic product like ED-Phone and other services like the LMS platform, faculty Development Programs and Student workshops are the steps taken to realize our vision.
                        </Typography>
                    </center>
                </Grid>
            </Grid>
        </section>
        <section className='section-min-100vh' style={ { backgroundColor: '#F8F8F8' } }>
            <Grid
                container
                sx={ { height: '100%', padding: '125px 150px 125px 150px' } }
                alignItems='center'
                justifyContent='center'
            >
                <Grid
                    container item
                >
                    <Grid
                        item
                        xs={ 12 }
                    >
                        <center>
                            <Typography
                                variant='h2'
                                style={ {
                                    fontFamily: 'Poppins',
                                    fontWeight: 600,
                                } }
                            >
                                Testimonials
                            </Typography>
                            <br />
                            <Typography
                                sx={ {
                                    fontFamily: 'Poppins',
                                    color: '#6E7387',
                                    maxWidth: '1000px',
                                    lineHeight: '51px',
                                    fontSize: ' 25px'
                                } }
                            >
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisi mi convallis tempor, pellentesque elit vitae aliquet vitae.
                            </Typography>
                        </center>
                    </Grid>
                </Grid>
                <Grid item xs={ 12 }>&nbsp;</Grid>
                <Grid item xs={ 12 }>&nbsp;</Grid>
                <Grid item xs={ 12 }>&nbsp;</Grid>
                <Grid
                    item container
                    spacing={ 10 }
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
                                    key={ user }
                                    item
                                    xs={ 12 } sm={ 6 } md={ 6 } lg={ 4 } xl={ 4 }
                                >
                                    <TestimonialCard
                                        { ...{
                                            title,
                                            user,
                                            rating,
                                            image,
                                            text,
                                        } }
                                    />
                                </Grid>
                            )
                    }
                </Grid>
                <Grid item xs={ 12 }>&nbsp;</Grid>
                <Grid item xs={ 12 }>&nbsp;</Grid>
                <Grid item xs={ 12 }>&nbsp;</Grid>
            </Grid>
        </section>
        <section className='section-100vh'>
            <Grid
                container
                sx={ { height: '100%', padding: '125px 150px 125px 150px' } }
                alignItems='center'
                justifyContent='center'
            >
                <Grid
                    container item
                    spacing={ 10 }
                >
                    <Grid
                        item
                        xs={ 12 } sm={ 12 } md={ 6 } lg={ 6 } xl={ 6 }
                    >
                        <Typography
                            variant='h2'
                            sx={ {
                                fontFamily: 'Poppins',
                                fontWeight: 600,
                                fontSize: '64px',
                                lineHeight: '90px',
                            } }
                        >
                            Any questions?
                            <br />
                            We got you.
                        </Typography>
                        <br /><br /><br />
                        <Typography
                            sx={ {
                                fontFamily: 'Poppins',
                                fontWeight: 500,
                                fontSize: '28px',
                                lineHeight: '52px',
                                color: '#6E7387',
                            } }
                        >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ante nullam donec orci, pharetra ullamcorper tristique tempus sit.
                        </Typography>
                    </Grid>
                    <Grid
                        item
                        xs={ 12 } sm={ 12 } md={ 6 } lg={ 6 } xl={ 6 }
                    >
                        {
                            [
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
                                .map(({ question, answer }, index, arr) => <Fragment key={ question }>
                                    <Accordion>
                                        <AccordionSummary
                                            expandIcon={ <ExpandMoreIcon /> }
                                        >
                                            <Typography
                                                sx={ {
                                                    fontFamily: 'Poppins',
                                                    fontWeight: 500,
                                                    fontSize: '32px',
                                                    lineHeight: '45px',
                                                } }
                                            >
                                                { question }
                                            </Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography
                                                sx={ {
                                                    fontFamily: 'Poppins',
                                                    fontWeight: 500,
                                                    fontSize: '24px',
                                                    lineHeight: '35px',
                                                    color: '#6E7387',
                                                } }
                                            >
                                                { answer }
                                            </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                    { index === arr.length - 1 ? <></> : <Divider /> }
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