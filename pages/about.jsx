/* eslint-disable @next/next/no-img-element */
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

const About = () => {
    return <>
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
                            sx={ {
                                fontFamily: 'Inter',
                                fontWeight: 700,
                                fontSize: '70px',
                                lineHeight: '100px',
                            } }
                        >
                            Meet our team
                        </Typography>
                        <br />
                        <Typography
                            sx={ {
                                fontFamily: 'Inter',
                                fontWeight: 600,
                                fontSize: '30px',
                                lineHeight: '40px',
                                color: '#6E7387',
                            } }
                        >
                            Come visit our friendly team
                        </Typography>
                        <br /><br /><br />
                        <img src='/meet our team.svg' alt="Meet our team" style={ { width: '80%', height: 'auto' } } />
                    </center>
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
                    container item
                    spacing={ 10 }
                    alignItems='center'
                >
                    <Grid
                        item
                        xs={ 12 } sm={ 12 } md={ 6 } lg={ 6 } xl={ 6 }
                    >
                        <Typography
                            sx={ {
                                fontFamily: 'Inter',
                                fontWeight: 700,
                                fontSize: '60px',
                                lineHeight: '70px',
                            } }
                        >
                            What products are we into?
                        </Typography>
                        <br /><br /><br />
                        <Typography
                            sx={ {
                                fontFamily: 'Poppins',
                                fontWeight: 600,
                                fontSize: '25px',
                                lineHeight: '45px',
                                color: '#6E7387'
                            } }
                        >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non amet, adipiscing quis sit et, rutrum sit cras.
                        </Typography>
                    </Grid>
                    <Grid
                        item
                        xs={ 12 } sm={ 12 } md={ 6 } lg={ 6 } xl={ 6 }
                    >
                        <img src='/what products.svg' alt='What products are we into' style={ { borderRadius: 20, width: '100%', height: 'auto' } } />
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
                    container item
                    spacing={ 10 }
                    alignItems='center'
                >
                    <Grid
                        item
                        xs={ 12 } sm={ 12 } md={ 6 } lg={ 6 } xl={ 6 }
                    >
                        <img src='/future scope.svg' alt='Future Scope' style={ { borderRadius: 20, width: '100%', height: 'auto' } } />
                    </Grid>
                    <Grid
                        item
                        xs={ 12 } sm={ 12 } md={ 6 } lg={ 6 } xl={ 6 }
                    >
                        <Typography
                            sx={ {
                                fontFamily: 'Inter',
                                fontWeight: 700,
                                fontSize: '60px',
                                lineHeight: '70px',
                            } }
                        >
                            Future Scope
                        </Typography>
                        <br /><br /><br />
                        <Typography
                            sx={ {
                                fontFamily: 'Poppins',
                                fontWeight: 600,
                                fontSize: '25px',
                                lineHeight: '45px',
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
                sx={ { height: '100%', padding: '125px 150px 125px 150px' } }
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
                                fontWeight: 700,
                                fontSize: '75px',
                                lineHeight: '150px',
                            } }
                        >
                            Our Ethics
                        </Typography>
                        <br /><br />
                        <Typography
                            sx={ {
                                fontFamily: 'Inter',
                                fontWeight: 500,
                                fontSize: '25px',
                                lineHeight: '30px',
                                color: '#6E7387',
                            } }
                        >
                            Futuristic product like Ed-phone
                        </Typography>
                        <br /><br /><br />
                        <Typography
                            sx={ {
                                fontFamily: 'Inter',
                                fontWeight: 600,
                                fontSize: '50px',
                                lineHeight: '75px',
                                color: '#535A72',
                            } }
                        >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique id mauris velit vulputate lectus libero, est. Sed ultrices malesuada senectus lectus lectus bibendum turpis montes, sit. Dis sagittis amet, pulvinar urna, velit tincidunt turpis nec. Turpis mauris sapien ut id. Sed ullamcorper eu, sed condimentum elit aliquam. Aliquet mauris, est morbi diam quis elit nibh nibh consectetur. Nunc nunc pulvinar donec sed libero cursus.
                        </Typography>
                        <br /><br /><br /><br /><br />
                        <img src='/ethics.svg' alt='Ethics' style={ { width: '80%', height: 'auto' } } />
                    </center>
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
                            sx={ {
                                fontFamily: 'Inter',
                                fontWeight: 700,
                                fontSize: '75px',
                                lineHeight: '150px',
                            } }
                        >
                            Our Mission
                        </Typography>
                        <br /><br /><br /><br /><br />
                        <Typography
                            sx={ {
                                fontFamily: 'Inter',
                                fontWeight: 400,
                                fontSize: '30px',
                                lineHeight: '60px',
                                color: '#535A72',
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
                sx={ { height: '100%', padding: '125px 150px 125px 150px' } }
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
                        xs={ 12 } sm={ 12 } md={ 6 } lg={ 6 } xl={ 6 }
                    >
                        <img src='/vision-about.svg' alt='Future Scope' style={ { borderRadius: 20, width: '100%', height: 'auto' } } />
                    </Grid>
                    <Grid
                        item
                        xs={ 12 } sm={ 12 } md={ 6 } lg={ 6 } xl={ 6 }
                    >
                        <Typography
                            sx={ {
                                fontFamily: 'Inter',
                                fontWeight: 700,
                                fontSize: '60px',
                                lineHeight: '70px',
                            } }
                        >
                            Our Vision
                        </Typography>
                        <br /><br /><br />
                        <Typography
                            sx={ {
                                fontFamily: 'Inter',
                                fontWeight: 500,
                                fontSize: '25px',
                                lineHeight: '45px',
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