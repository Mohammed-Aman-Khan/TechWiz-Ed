/* eslint-disable @next/next/no-img-element */
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import { IMAGES } from '../util/cdn-urls'
import { usePadding, useBreakpoint, useResponsiveFontSize } from '../util/responsive'

const About = () => {

    const small = useBreakpoint()
    const containerPadding = usePadding('container')
    const { h4, body, caption } = useResponsiveFontSize()

    return <>
        <section className='section-100vh'>
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
                            sx={ {
                                fontFamily: 'Inter',
                                fontWeight: small ? 600 : 700,
                                fontSize: h4,
                                lineHeight: small ? '40px' : '60px',
                            } }
                        >
                            Meet our team
                        </Typography>
                        <br />
                        <Typography
                            sx={ {
                                fontFamily: 'Inter',
                                fontWeight: 600,
                                fontSize: body,
                                lineHeight: small ? '30px' : '40px',
                                color: '#6E7387',
                            } }
                        >
                            Come visit our friendly team
                        </Typography>
                        <br /><br /><br />
                        <img
                            src={ IMAGES.ABOUT_PAGE.TEAM }
                            alt="Meet our team"
                            style={ {
                                width: '100%',
                                height: 'auto',
                                borderRadius: 10,
                            } }
                        />
                    </center>
                </Grid>
            </Grid>
        </section>
        <section className='section-100vh'>
            <Grid
                container
                className={ small && 'center' }
                sx={ { height: '100%', padding: containerPadding } }
                alignItems='center'
                justifyContent='center'
            >
                <Grid
                    container item
                    spacing={ 10 }
                    alignItems='center'
                >
                    <Grid
                        item
                        xs={ 12 } sm={ 12 } md={ 12 } lg={ 6 } xl={ 6 }
                    >
                        <Typography
                            sx={ {
                                fontFamily: 'Inter',
                                fontWeight: small ? 600 : 700,
                                fontSize: h4,
                                lineHeight: small ? '40px' : '60px',
                            } }
                        >
                            What products are we into?
                        </Typography>
                        <br /><br /><br />
                        <Typography
                            sx={ {
                                fontFamily: 'Poppins',
                                fontWeight: 600,
                                fontSize: body,
                                lineHeight: small ? '30px' : '45px',
                                color: '#6E7387'
                            } }
                        >
                            We aim to provide Ed-Tech based products and services to make technology more reachable, teachable and learn-able. We want to stand together with enthusiasts, learners and dreamers to help them understand technical concepts with hands-on experience.
                        </Typography>
                    </Grid>
                    <Grid
                        item
                        xs={ 12 } sm={ 12 } md={ 12 } lg={ 6 } xl={ 6 }
                    >
                        <img
                            src={ IMAGES.ABOUT_PAGE.PRODUCTS }
                            alt='What products are we into'
                            style={ {
                                width: '100%',
                                height: 'auto',
                                borderRadius: 10,
                            } }
                        />
                    </Grid>
                </Grid>
            </Grid>
        </section>
        <section className='section-100vh'>
            <Grid
                container
                className={ small && 'center' }
                sx={ { height: '100%', padding: containerPadding } }
                alignItems='center'
                justifyContent='center'
            >
                <Grid
                    container item
                    spacing={ 10 }
                    alignItems='center'
                >
                    {
                        !small
                            ?
                            <Grid
                                item
                                xs={ 12 } sm={ 12 } md={ 12 } lg={ 6 } xl={ 6 }
                            >
                                <img
                                    src={ IMAGES.ABOUT_PAGE.SCOPE }
                                    alt='Future Scope'
                                    style={ {
                                        width: '100%',
                                        height: 'auto',
                                        borderRadius: 10,
                                    } }
                                />
                            </Grid>
                            :
                            <></>
                    }
                    <Grid
                        item
                        xs={ 12 } sm={ 12 } md={ 12 } lg={ 6 } xl={ 6 }
                    >
                        <Typography
                            sx={ {
                                fontFamily: 'Inter',
                                fontWeight: small ? 600 : 700,
                                fontSize: h4,
                                lineHeight: small ? '40px' : '60px',
                            } }
                        >
                            Future Scope
                        </Typography>
                        <br /><br /><br />
                        <Typography
                            sx={ {
                                fontFamily: 'Poppins',
                                fontWeight: 600,
                                fontSize: body,
                                lineHeight: small ? '30px' : '45px',
                                color: '#6E7387'
                            } }
                        >
                            We&apos;re one among the handful trying to make advanced technical concepts reach every nook and corner of India, with a dream to make it worldwide.
                        </Typography>
                    </Grid>
                    {
                        small
                            ?
                            <Grid
                                item
                                xs={ 12 } sm={ 12 } md={ 12 } lg={ 6 } xl={ 6 }
                            >
                                <img
                                    src={ IMAGES.ABOUT_PAGE.SCOPE }
                                    alt='Future Scope'
                                    style={ {
                                        width: '100%',
                                        height: 'auto',
                                        borderRadius: 10,
                                    } }
                                />
                            </Grid>
                            :
                            <></>
                    }
                </Grid>
            </Grid>
        </section>
        <section className='section-min-100vh'>
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
                            sx={ {
                                fontFamily: 'Inter',
                                fontWeight: small ? 600 : 700,
                                fontSize: h4,
                                lineHeight: small ? '40px' : '60px',
                            } }
                        >
                            Our Ethics
                        </Typography>
                        <br /><br />
                        <Typography
                            sx={ {
                                fontFamily: 'Inter',
                                fontWeight: 500,
                                fontSize: caption,
                                lineHeight: small ? '25px' : '30px',
                                color: '#6E7387',
                            } }
                        >
                            Futuristic product like Ed-phone
                        </Typography>
                        <br /><br />
                        <Typography
                            sx={ {
                                fontFamily: 'Inter',
                                fontWeight: 600,
                                fontSize: body,
                                lineHeight: small ? '30px' : '40px',
                                color: '#6E7387',
                            } }
                        >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique id mauris velit vulputate lectus libero, est. Sed ultrices malesuada senectus lectus lectus bibendum turpis montes, sit. Dis sagittis amet, pulvinar urna, velit tincidunt turpis nec. Turpis mauris sapien ut id. Sed ullamcorper eu, sed condimentum elit aliquam. Aliquet mauris, est morbi diam quis elit nibh nibh consectetur. Nunc nunc pulvinar donec sed libero cursus.
                        </Typography>
                        <br /><br /><br /><br /><br />
                        <img
                            src={ IMAGES.ABOUT_PAGE.ETHICS }
                            alt='Ethics'
                            style={ {
                                width: '80%',
                                height: 'auto',
                                borderRadius: 10
                            } }
                        />
                    </center>
                </Grid>
            </Grid>
        </section>
        <section className='section-100vh'>
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
                            sx={ {
                                fontFamily: 'Inter',
                                fontWeight: small ? 600 : 700,
                                fontSize: h4,
                                lineHeight: small ? '40px' : '60px',
                            } }
                        >
                            Our Mission
                        </Typography>
                        <br /><br />
                        <Typography
                            sx={ {
                                fontFamily: 'Inter',
                                fontWeight: 600,
                                fontSize: body,
                                lineHeight: small ? '30px' : '45px',
                                color: '#6E7387',
                            } }
                        >
                            Developing futuristic Ed-Tech products; Ed-phone is our first step towards achieving this goal.
                            <br />
                            Working with schools and colleges to set up better curriculum through Faculty Development Programs and Student Workshops.
                            <br />
                            Developing Learning Management System for enthusiasts to take up online courses which cover various technical domains with unlimited access to the content.
                        </Typography>
                    </center>
                </Grid>
            </Grid>
        </section>
        <section className='section-100vh'>
            <Grid
                container
                className={ small && 'center' }
                sx={ { height: '100%', padding: containerPadding } }
                alignItems='center'
                justifyContent='center'
            >
                <Grid
                    container item
                    spacing={ 10 }
                    alignItems='center'
                >
                    <Grid
                        item
                        xs={ 12 } sm={ 12 } md={ 12 } lg={ 6 } xl={ 6 }
                    >
                        <img
                            src={ IMAGES.ABOUT_PAGE.VISION }
                            alt='Our Vision'
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
                            sx={ {
                                fontFamily: 'Inter',
                                fontWeight: small ? 600 : 700,
                                fontSize: h4,
                                lineHeight: small ? '40px' : '60px',
                            } }
                        >
                            Our Vision
                        </Typography>
                        <br /><br /><br />
                        <Typography
                            sx={ {
                                fontFamily: 'Inter',
                                fontWeight: 500,
                                fontSize: body,
                                lineHeight: small ? '30px' : '45px',
                                color: '#6E7387'
                            } }
                        >
                            To develop Ed-Tech based products to help students, enthusiasts learn advanced technical concepts with hands-on experience.
                            <br /><br />
                            To provide most earnest consultancy services to upgrade technology in education field by teaching students, lecturers and corporate professionals, about technical concepts using modern, intuitive, simple and hands-on method.
                            <br /><br />
                            To conduct online/offline cutting edge technological career building courses, such as Embedded systems, AI/ML, Blockchain, IoT, Networking and Ethical hacking.
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
        </section>
    </>
}

export default About