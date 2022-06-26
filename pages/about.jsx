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
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non amet, adipiscing quis sit et, rutrum sit cras.
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
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non amet, adipiscing quis sit et, rutrum sit cras.
                        </Typography>
                    </Grid>
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
                            src='/ethics.jpg'
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
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique id mauris velit vulputate lectus libero, est. Sed ultrices malesuada senectus lectus lectus bibendum turpis montes, sit. Dis sagittis amet, pulvinar urna, velit tincidunt turpis nec. Turpis mauris sapien ut id. Sed ullamcorper eu, sed condimentum elit aliquam. Aliquet mauris, est morbi diam quis elit nibh nibh consectetur. Nunc nunc pulvinar donec sed libero cursus.
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
                            Futuristic product like Ed-Phone and other services like LMS platform, Faculty Development Programs and Student workshops are the steps taken to realize our vision.
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
        </section>
    </>
}

export default About