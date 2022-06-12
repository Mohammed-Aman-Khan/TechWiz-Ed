/* eslint-disable @next/next/no-img-element */
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import { useBreakpoint, usePadding, useResponsiveFontSize, } from '../util/responsive'
import FavoriteIcon from '@mui/icons-material/Favorite'

const HeroText = ({ children, small, fontSize }) => {
    return <Typography
        sx={ {
            fontWeight: 700,
            fontSize,
            lineHeight: small ? '60px' : '100px',
            fontFamily: 'Inter',
            display: 'flex',
            alignItems: 'center'
        } }
    >
        { children }
    </Typography>
}

const Input = ({ label = '', small, fontSize }) => {
    return <TextField
        sx={ { marginBottom: small ? '12px' : '20px' } }
        fullWidth
        label={ label }
        variant='standard'
        inputProps={ { sx: { fontSize } } }
        InputLabelProps={ { sx: { fontSize } } }
    />
}

const Contact = () => {

    const small = useBreakpoint()
    const containerPadding = usePadding('container')
    const { h3, h6, body } = useResponsiveFontSize()

    return <>
        <section className='section-100vh'>
            <Grid
                container
                className={ small && 'center' }
                sx={ { height: small ? 'auto' : '100%', padding: containerPadding } }
                alignItems='center'
                justifyContent={ small ? 'space-evenly' : 'space-between' }
            >
                <Grid
                    item container
                    xs={ 12 } sm={ 12 } md={ 12 } lg={ 6 } xl={ 6 }
                    alignItems='center'
                >
                    <Grid item className={ small && 'center' } container>
                        <HeroText
                            fontSize={ h3 }
                            small={ small }
                        >
                            Made with love,
                        </HeroText>
                        <Grid item xs={ 12 }>&nbsp;</Grid>
                        <HeroText
                            fontSize={ h3 }
                            small={ small }
                        >
                            right here in
                        </HeroText>
                        <Grid item xs={ 12 }>&nbsp;</Grid>
                        <HeroText
                            fontSize={ h3 }
                            small={ small }
                        >
                            India&nbsp;
                            <FavoriteIcon fontSize='20px' sx={ { color: 'red' } } />
                        </HeroText>
                        <Grid item xs={ 12 }>&nbsp;</Grid>
                        <Grid item xs={ 12 }>&nbsp;</Grid>
                        <Typography
                            className={ small && 'center' }
                            sx={ {
                                maxWidth: '80%',
                                fontWeight: 500,
                                fontSize: body,
                                lineHeight: small ? '30px' : '45px',
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
                    xs={ 12 } sm={ 12 } md={ 12 } lg={ 6 } xl={ 6 }
                    sx={ { height: small ? '40vh' : '75vh' } }
                >
                    { small ? <><br /><br /></> : <></> }
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.995799101861!2d77.55993461482132!3d12.90799129089761!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1562a0e35733%3A0x52f0774be1144a97!2s940%2C%2016th%20Cross%20Rd%2C%201st%20Stage%2C%20Kumaraswamy%20Layout%2C%20Bengaluru%2C%20Karnataka%20560078!5e0!3m2!1sen!2sin!4v1652617863244!5m2!1sen!2sin"
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        style={ {
                            height: small ? '40vh' : '75vh',
                            width: '100%',
                            borderRadius: 50,
                            border: 'none'
                        } }
                    />
                </Grid>
            </Grid>
        </section>
        { small ? <><br /><br /></> : <></> }
        <section className={ small ? 'section-min-100vh' : 'section-100vh' }>
            <Grid
                container
                className={ small && 'center' }
                sx={ { height: small ? 'auto' : '100%', padding: containerPadding } }
                alignItems='center'
                justifyContent={ small ? 'space-evenly' : 'space-between' }
            >
                <Grid
                    item container
                    xs={ 12 } sm={ 12 } md={ 12 } lg={ 6 } xl={ 6 }
                    alignItems='center'
                >
                    <Grid item>
                        <HeroText fontSize={ h3 } small={ small }>
                            Have a query?
                        </HeroText>
                        <br />
                        <HeroText fontSize={ h3 } small={ small }>
                            Tell us about it.
                        </HeroText>
                        <br /><br /><br />
                        <form>
                            <Grid container spacing={ 5 }>
                                <Grid
                                    item
                                    xs={ 12 } sm={ 12 } md={ 12 } lg={ 12 } xl={ 12 }
                                >
                                    <Input fontSize={ body } small={ small } label='Name' />
                                </Grid>
                                <Grid
                                    item
                                    xs={ 12 } sm={ 12 } md={ 6 } lg={ 6 } xl={ 6 }
                                >
                                    <Input fontSize={ body } small={ small } label='Email' />
                                </Grid>
                                <Grid
                                    item
                                    xs={ 12 } sm={ 12 } md={ 6 } lg={ 6 } xl={ 6 }
                                >
                                    <Input fontSize={ body } small={ small } label='Phone Number' />
                                </Grid>
                                <Grid
                                    item
                                    xs={ 12 } sm={ 12 } md={ 12 } lg={ 12 } xl={ 12 }
                                >
                                    <Input fontSize={ body } small={ small } label='Query Subject' />
                                </Grid>
                                <Grid
                                    item
                                    xs={ 12 } sm={ 12 } md={ 12 } lg={ 12 } xl={ 12 }
                                >
                                    <Input fontSize={ body } small={ small } label='Description' />
                                </Grid>
                            </Grid>
                            <br />
                            <Button
                                size={ small ? 'medium' : 'large' }
                                sx={ {
                                    backgroundColor: '#5080FF',
                                    color: 'white',
                                    fontSize: h6,
                                    fontWeight: 600,
                                    lineHeight: small ? '35px' : '50px',
                                    padding: small ? '10px 25px 10px 25px' : '15px 50px 15px 50px',
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
                    xs={ 12 } sm={ 12 } md={ 12 } lg={ 6 } xl={ 6 }
                >
                    <Grid item>
                        <img
                            src='https://img.freepik.com/free-vector/get-touch-concept-illustration_114360-2586.jpg'
                            style={ small ?
                                { width: '90vw', height: 'auto' } :
                                { width: '100%', height: 'auto' }
                            }
                            alt="Illustration"
                        />
                    </Grid>
                </Grid>
            </Grid >
        </section >
    </>
}

export default Contact