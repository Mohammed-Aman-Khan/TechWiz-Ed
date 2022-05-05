import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

const HeroText = ({ children, style={} }) => {
    return <Typography
        variant='h1'
        sx={{
            fontWeight: 700,
            display:'inline-block',
            ...style,
        }}
    >
        { children }
    </Typography>
}

const LandingPage = () => {
    return <>
        <section>
            <Grid
                container
                sx={{ height: '100%', padding: '125px 150px 125px 150px' }}
                alignItems='center'
                justifyContent='space-between'
                flexDirection='row'
            >
                <Grid item flexDirection='column'>
                    <HeroText
                        style={{
                            background: 'linear-gradient(96.89deg, #5A87FF 3.1%, #8C58FB 36.8%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                        }}
                    >
                        Go on,
                    </HeroText>
                    <br />
                    <HeroText>
                        Get your
                    </HeroText>
                    <br />
                    <HeroText
                        style={{
                            background: 'linear-gradient(96.89deg, #5A87FF 3.1%, #8C58FB 36.8%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                        }}
                    >
                        Techwiz
                    </HeroText>
                    <HeroText>&nbsp;out.</HeroText>
                    <br />
                    <Typography
                        sx={{
                            color: '#6E7387',
                            maxWidth: '600px',
                            lineHeight: '45px',
                            fontSize:' 24px'
                        }}
                    >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus quis vulputate ipsum, massa ac suspendisse laoreet amet egestas. Felis iaculis.
                    </Typography>
                    <br /><br />
                    <Button
                        size='large'
                        sx={{
                            backgroundColor: '#5080FF',
                            color:'white',
                            fontWeight:600,
                            fontSize: '25px',
                            height: '70px',
                            borderRadius: '40px',
                            padding: '15px 30px 15px 30px',
                            '&:hover' : {
                                color: '#5080FF',
                            }
                        }}
                    >
                        Watch Demo
                    </Button>
                    &nbsp;&nbsp;&nbsp;
                    <Button
                        size='large'
                        variant="link"
                        sx={{
                            fontWeight:600,
                            fontSize: '25px',
                            height: '70px',
                            borderRadius: '40px',
                            padding: '15px 30px 15px 30px',
                        }}
                    >
                        Learn More
                    </Button>
                </Grid>
                <Grid item>
                    <img src='/big-screen-hero.svg' alt="Illustration" style={{ height: '85vh' }} />
                </Grid>
            </Grid>
        </section>
    </>
}

export default LandingPage