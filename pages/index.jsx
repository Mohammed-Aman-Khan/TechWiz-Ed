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
import { useBreakpoint, usePadding, useResponsiveFontSize } from '../util/responsive'
import Link from 'next/link'
import { IMAGES, VIDEO, _3D_MODEL } from '../util/cdn-urls'
import dynamic from 'next/dynamic'
import { QUESTIONS, TESTIMONIALS, WHAT_CAN_ED_DO } from '../content/home-page'

const _3D_Model_Viewer = dynamic(
    () => import('../components/_3D_Model_Viewer'),
    { ssr: false }
)

const HeroText = ({ children, style = {}, small }) => {
    return <Typography
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
    small,
    headingSize,
    bodySize,
}) => {
    return <Paper
        elevation={ 0 }
        sx={ {
            padding: small ? '10px' : '20px',
        } }
    >
        <Chip
            label={ number }
            sx={ {
                backgroundColor: color,
                color: 'white',
            } }
        />
        <br />
        { small ? <br /> : <></> }
        <Typography
            sx={ {
                fontFamily: 'Poppins',
                fontWeight: small ? 600 : 700,
                fontSize: headingSize,
                lineHeight: small ? '35px' : '60px',
            } }
        >
            { title }
        </Typography>
        <br />
        { small ? <br /> : <></> }
        <Typography
            sx={ {
                fontFamily: 'Poppins',
                fontWeight: 400,
                fontSize: bodySize,
                lineHeight: small ? '25px' : '35px',
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

const LandingPage = () => {

    const small = useBreakpoint()
    const containerPadding = usePadding('container')
    const { h1, h4, h5, h6, body, caption } = useResponsiveFontSize()
    const [ expanded, setExpanded ] = useState(QUESTIONS[ 0 ].question)

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false)
    }

    return <>
        <section id='landing' className='section-100vh'>
            <Grid
                container
                className={ small && 'center' }
                sx={ { height: '100%', padding: containerPadding } }
                alignItems='center'
                justifyContent={ small ? 'space-evenly' : 'space-between' }
            >
                <Grid item flexDirection='column'
                    xs={ 12 } sm={ 12 } md={ 12 } lg={ 6 } xl={ 6 }
                    className={ small && 'center' }
                >
                    <HeroText
                        small={ small }
                        style={ {
                            fontSize: h1,
                            background: 'linear-gradient(96.89deg, #5A87FF 3.1%, #8C58FB 36.8%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                        } }
                    >
                        Go on,
                    </HeroText>
                    <br />
                    <HeroText
                        small={ small }
                        style={ {
                            fontSize: h1,
                        } }
                    >
                        Get your
                    </HeroText>
                    <br />
                    <HeroText
                        small={ small }
                        style={ {
                            fontSize: h1,
                            background: 'linear-gradient(96.89deg, #5A87FF 3.1%, #8C58FB 36.8%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                        } }
                    >
                        Techwiz
                    </HeroText>
                    <HeroText
                        small={ small }
                        style={ {
                            fontSize: h1,
                        } }
                    >
                        &nbsp;out.
                    </HeroText>
                    <br />
                    {
                        small ?
                            <center>
                                <Typography
                                    sx={ {
                                        fontFamily: 'Poppins',
                                        color: '#6E7387',
                                        maxWidth: '90%',
                                        lineHeight: '30px',
                                        fontSize: h6
                                    } }
                                >
                                    Transforming students and enthusiasts into a technical wizard, who can find their path in becoming a professional.
                                </Typography>
                            </center> :
                            <Typography
                                sx={ {
                                    fontFamily: 'Poppins',
                                    color: '#6E7387',
                                    maxWidth: '600px',
                                    lineHeight: '45px',
                                    fontSize: h6
                                } }
                            >
                                Transforming students and enthusiasts into a technical wizard, who can find their path in becoming a professional.
                            </Typography>
                    }
                    <br /><br />
                    <Button
                        size={ small ? 'medium' : 'large' }
                        variant="link"
                        href='#has-never-been-possible'
                        sx={ {
                            backgroundColor: '#5080FF',
                            color: 'white',
                            fontWeight: small ? 500 : 600,
                            fontSize: h6,
                            height: small ? '40px' : '70px',
                            borderRadius: '40px',
                            padding: small ? '10px 15px 10px 15px' : '15px 30px 15px 30px',
                            '&:hover': {
                                color: '#5080FF',
                            }
                        } }
                    >
                        Watch Demo
                    </Button>
                    &nbsp;&nbsp;&nbsp;
                    <Button
                        size={ small ? 'medium' : 'large' }
                        variant="link"
                        href='#what-you-can-do'
                        sx={ {
                            fontWeight: small ? 500 : 600,
                            fontSize: h6,
                            height: small ? '40px' : '70px',
                            borderRadius: '40px',
                            padding: small ? '10px 15px 10px 15px' : '15px 30px 15px 30px',
                        } }
                    >
                        Learn More
                    </Button>
                </Grid>
                <Grid
                    item
                    xs={ 12 } sm={ 12 } md={ 12 } lg={ 6 } xl={ 6 }
                >
                    { small ? <><br /><br /><br /></> : <></> }
                    <center>
                        <img
                            src={ IMAGES.HOME_PAGE.LANDING }
                            alt="Illustration"
                            style={ {
                                width: '100%',
                                maxWidth: '400px',
                                height: 'auto',
                                borderRadius: 10,
                            } }
                        />
                    </center>
                </Grid>
            </Grid>
        </section>
        <section id='has-never-been-possible' className='section-min-100vh'>
            <Grid
                container
                className={ small && 'center' }
                sx={ { height: '100%', padding: containerPadding } }
                alignItems='center'
                justifyContent='center'
            >
                <center>
                    <Typography
                        style={ {
                            fontSize: h4,
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
                            maxWidth: small ? '90%' : '1200px',
                            lineHeight: small ? '30px' : '45px',
                            fontSize: h6
                        } }
                    >
                        The Ed-Phone is an innovative product with the sole purpose of revolutionizing technical education.
                        The flexibility and features of this product enables users to learn cutting-edge technology through
                        exciting and fun-filled experience.
                    </Typography>
                    <div
                        style={ {
                            width: '100%',
                            height: small ? '50vh' : '75vh',
                        } }
                    >
                        <_3D_Model_Viewer
                            link={ _3D_MODEL }
                        />
                    </div>
                </center>
            </Grid>
        </section>
        <section id='what-you-can-do' className='section-min-100vh'>
            <Grid
                container
                sx={ { height: '100%', padding: containerPadding } }
                alignItems={ small && 'center' }
                justifyContent='center'
            >
                <center>
                    <Typography
                        style={ {
                            fontSize: h4,
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
                            maxWidth: small ? '90%' : '1200px',
                            lineHeight: small ? '30px' : '45px',
                            fontSize: h6
                        } }
                    >
                        The features of ED-phone that can be used to develop and learn trending technologies.
                    </Typography>
                </center>
                <Grid item xs={ 12 }>&nbsp;</Grid>
                <Grid item xs={ 12 }>&nbsp;</Grid>
                <Grid item xs={ 12 }>&nbsp;</Grid>
                <Grid item xs={ 12 }>&nbsp;</Grid>
                <Grid item xs={ 12 }>&nbsp;</Grid>
                <Grid item xs={ 12 }>&nbsp;</Grid>
                <Grid
                    container item
                    spacing={ small ? 5 : 10 }
                >
                    <Grid
                        item
                        xs={ 12 } sm={ 12 } md={ 6 } lg={ 6 } xl={ 6 }
                    >
                        {
                            WHAT_CAN_ED_DO
                                .map(({
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
                                                small,
                                                headingSize: h5,
                                                bodySize: body,
                                            } }
                                        />
                                    </Grid>
                                )
                        }
                    </Grid>
                    <Grid
                        item
                        xs={ 12 } sm={ 12 } md={ 6 } lg={ 6 } xl={ 6 }
                    >
                        <div
                            style={ {
                                height: '100%',
                                width: '100%',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                // backgroundColor: '#BEBDFF',
                                borderRadius: '50px',
                                padding: '20px'
                            } }
                        >
                            <img
                                src={ IMAGES.HOME_PAGE.EXPLORE }
                                alt="The Ed Phone"
                                style={ {
                                    width: '100%',
                                    height: 'auto',
                                    borderRadius: 10,
                                } }
                            />
                        </div>
                    </Grid>
                </Grid>
            </Grid>
        </section>
        <section id='what-can-ed-do' className='section-100vh'>
            <Grid
                container
                className={ small && 'center' }
                sx={ { height: '100%', padding: containerPadding } }
                alignItems='center'
                justifyContent='center'
            >
                <center>
                    <Typography
                        style={ {
                            fontSize: h4,
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
                            maxWidth: small ? '100%' : '1200px',
                            lineHeight: small ? '30px' : '45px',
                            fontSize: h6,
                        } }
                    >
                        The various projects that can be achieved using ED-Phone.
                    </Typography>
                    <br /><br />
                    <video controls style={ { width: small ? '100%' : '80%', height: 'auto', outline: 'none', borderRadius: 10 } }>
                        <source src={ VIDEO } type='video/mp4' />
                    </video>
                    <br /><br />
                    <Link
                        href='/projects'
                        passHref
                    >
                        <Button
                            sx={ {
                                backgroundColor: '#5080FF',
                                color: 'white',
                                fontSize: body,
                                fontWeight: 600,
                                lineHeight: small ? '35px' : '50px',
                                padding: '5px 50px 5px 50px',
                                borderRadius: '40px',
                                '&:hover': {
                                    color: '#5080FF',
                                },
                            } }
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
                className={ small && 'center' }
                sx={ { height: '100%', padding: containerPadding } }
                alignItems='center'
                justifyContent='center'
            >
                <Grid
                    container
                    alignItems='center'
                    justifyContent="space-evenly"
                    spacing={ 10 }
                >
                    <Grid
                        item container
                        className={ small && 'center' }
                        xs={ 12 } sm={ 12 } md={ 12 } lg={ 6 } xl={ 6 }
                    >
                        <img
                            src={ IMAGES.HOME_PAGE.VISION }
                            alt="Our Vision"
                            style={ {
                                width: '100%',
                                height: 'auto',
                                borderRadius: 10,
                            } }
                        />
                    </Grid>
                    <Grid
                        item
                        xs={ 12 } sm={ 12 } md={ 12 } lg={ 6 } xl={ 6 }
                    >
                        <Typography
                            style={ {
                                fontSize: h4,
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
                                maxWidth: small ? '100%' : '600px',
                                lineHeight: small ? '30px' : '45px',
                                fontSize: h6,
                            } }
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
                className={ small && 'center' }
                sx={ { height: '100%', padding: containerPadding } }
                alignItems='center'
                justifyContent='center'
            >
                <Grid
                    item
                >
                    <center>
                        <Typography
                            style={ {
                                fontSize: h4,
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
                                maxWidth: small ? '100%' : '1200px',
                                lineHeight: small ? '30px' : '45px',
                                fontSize: h6
                            } }
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
                elevation={ 24 }
                sx={ { boxShadow: 'none' } }
            >
                <Grid
                    container
                    sx={ { height: '100%', padding: containerPadding } }
                    alignItems='center'
                    justifyContent='center'
                >
                    <Grid
                        container item
                    >
                        <Grid
                            item
                            xs={ 12 }
                            className={ small && 'center' }
                        >
                            <center>
                                <br /><br />
                                <Typography
                                    style={ {
                                        fontSize: h4,
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
                                        maxWidth: small ? '100%' : '1000px',
                                        lineHeight: small ? '30px' : '45px',
                                        fontSize: h6,
                                    } }
                                >
                                    Check out what our customers think about us!
                                </Typography>
                            </center>
                        </Grid>
                    </Grid>
                    <Grid item xs={ 12 }>&nbsp;</Grid>
                    <Grid item xs={ 12 }>&nbsp;</Grid>
                    <Grid item xs={ 12 }>&nbsp;</Grid>
                    <Grid
                        item container
                        spacing={ small ? 5 : 10 }
                    >
                        {
                            TESTIMONIALS
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
                                                small,
                                                titleSize: h6,
                                                bodySize: caption,
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
            </Paper>
        </section>
        <section id='any-questions' className='section-100vh'>
            <Grid
                container
                sx={ { height: '100%', padding: containerPadding } }
                alignItems='center'
                justifyContent='center'
            >
                <Grid
                    container item
                    spacing={ small ? 5 : 10 }
                >
                    <Grid
                        item
                        className={ small && 'center' }
                        xs={ 12 } sm={ 12 } md={ 12 } lg={ 6 } xl={ 6 }
                    >
                        <Typography
                            variant={ small ? 'h4' : 'h2' }
                            sx={ {
                                fontFamily: 'Poppins',
                                fontWeight: 600,
                                fontSize: h4,
                                lineHeight: small ? '50px' : '75px',
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
                                fontSize: body,
                                lineHeight: small ? '30px' : '45px',
                                color: '#6E7387',
                            } }
                        >
                            List of FAQs to keep you hustle free
                        </Typography>
                    </Grid>
                    <Grid
                        item
                        xs={ 12 } sm={ 12 } md={ 12 } lg={ 6 } xl={ 6 }
                    >
                        {
                            QUESTIONS
                                .map(({ question, answer }, index, arr) => <Fragment key={ question }>
                                    <Accordion
                                        expanded={ expanded === question }
                                        onChange={ handleChange(question) }
                                    >
                                        <AccordionSummary
                                            expandIcon={ <ExpandMoreIcon /> }
                                        >
                                            <Typography
                                                sx={ {
                                                    fontFamily: 'Poppins',
                                                    fontWeight: 500,
                                                    fontSize: h6,
                                                    lineHeight: small ? '30px' : '45px',
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
                                                    fontSize: caption,
                                                    lineHeight: small ? '25px' : '35px',
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