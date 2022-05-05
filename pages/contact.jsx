/* eslint-disable @next/next/no-img-element */
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'

const HeroText = ({ children, small = false }) => {
    return <Typography
        variant='h1'
        sx={ {
            fontWeight: 700,
            fontSize: small ? '65px' : '90px',
            lineHeight: small ? '80px' : '100px',
            fontFamily: 'Inter',
        } }
    >
        { children }
    </Typography>
}

const Input = ({ label = '' }) => {
    return <TextField
        sx={ { marginBottom: '20px' } }
        fullWidth
        label={ label }
        variant='standard'
        inputProps={ {
            sx: {
                fontSize: '30px',
            }
        } }
        InputLabelProps={ {
            sx: {
                fontSize: '30px',
            }
        } }
    />
}

const Contact = () => {
    return <>
        <section className='section-100vh'>
            <Grid
                container
                sx={ { height: '100%', padding: '125px 150px 125px 150px' } }
                alignItems='center'
                justifyContent='space-between'
                flexDirection='row'
            >
                <Grid
                    item container
                    sx={ { height: '100%', width: '50%' } }
                    alignItems='center'
                >
                    <Grid item>
                        <HeroText>
                            Made with love,
                        </HeroText>
                        <br />
                        <HeroText>
                            right here in
                        </HeroText>
                        <br />
                        <HeroText>
                            India ❤️
                        </HeroText>
                        <br /><br />
                        <Typography
                            sx={ {
                                maxWidth: '80%',
                                fontWeight: 500,
                                fontSize: '25px',
                                lineHeight: '45px',
                                color: '#6E7387'
                            } }
                        >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus quis vulputate ipsum, massa ac suspendisse laoreet amet egestas. Felis iaculis.
                        </Typography>
                    </Grid>
                </Grid>
                <Grid
                    item
                    justifyContent='center'
                    alignItems='center'
                    sx={ { height: '100%', width: '50%' } }
                >
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248849.5522500068!2d77.49085545800294!3d12.954294593216147!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1651743367139!5m2!1sen!2sin"
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        style={ {
                            height: '100%',
                            width: '100%',
                            borderRadius: 50,
                            border: 'none'
                        } }
                    />
                </Grid>
            </Grid>
        </section >
        <section className='section-100vh'>
            <Grid
                container
                sx={ { height: '100 % ', padding: '0px 150px 125px 150px' } }
                alignItems='center'
                justifyContent='space-between'
                flexDirection='row'
            >
                <Grid
                    item container
                    sx={ { height: '100%', width: '50%' } }
                    alignItems='center'
                >
                    <Grid item>
                        <HeroText small>
                            Have a query?
                        </HeroText>
                        <br />
                        <HeroText small>
                            Tell us about it.
                        </HeroText>
                        <br /><br /><br />
                        <form>
                            <Grid container spacing={ 5 }>
                                <Grid
                                    item
                                    xs={ 12 } sm={ 12 } md={ 12 } lg={ 12 } xl={ 12 }
                                >
                                    <Input label='Name' />
                                </Grid>
                                <Grid
                                    item
                                    xs={ 12 } sm={ 12 } md={ 6 } lg={ 6 } xl={ 6 }
                                >
                                    <Input label='Email' />
                                </Grid>
                                <Grid
                                    item
                                    xs={ 12 } sm={ 12 } md={ 6 } lg={ 6 } xl={ 6 }
                                >
                                    <Input label='Phone Number' />
                                </Grid>
                                <Grid
                                    item
                                    xs={ 12 } sm={ 12 } md={ 12 } lg={ 12 } xl={ 12 }
                                >
                                    <Input label='Query Subject' />
                                </Grid>
                                <Grid
                                    item
                                    xs={ 12 } sm={ 12 } md={ 12 } lg={ 12 } xl={ 12 }
                                >
                                    <Input label='Description' />
                                </Grid>
                            </Grid>
                            <br />
                            <Button
                                size='large'
                                sx={ {
                                    backgroundColor: '#5080FF',
                                    color: 'white',
                                    fontSize: '30px',
                                    fontWeight: 600,
                                    lineHeight: '50px',
                                    padding: '15px 50px 15px 50px',
                                    borderRadius: '40px',
                                    '&:hover': {
                                        color: '#5080FF',
                                    },
                                } }
                            >
                                Submit
                            </Button>
                        </form>
                    </Grid>
                </Grid>
                <Grid
                    container item
                    justifyContent='center'
                    alignItems='center'
                    sx={ { height: '100%', width: '50%' } }
                >
                    <Grid item>
                        <img src='https://img.freepik.com/free-vector/get-touch-concept-illustration_114360-2586.jpg' style={ { width: '100%', height: 'auto' } } alt="Illustration" />
                    </Grid>
                </Grid>
            </Grid >
        </section >
    </>
}

export default Contact