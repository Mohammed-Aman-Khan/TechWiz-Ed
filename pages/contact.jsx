/* eslint-disable @next/next/no-img-element */
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import { useBreakpoint, usePadding, useResponsiveFontSize, } from '../util/responsive'
import FavoriteIcon from '@mui/icons-material/Favorite'
import { IMAGES } from '../util/cdn-urls'
import { showError, showSuccess } from '../util/alerts'
import { useState } from 'react'

const HeroText = ({ children, small, fontSize }) => {
    return <Typography
        sx={ {
            fontWeight: 700,
            fontSize,
            lineHeight: small ? '50px' : '75px',
            fontFamily: 'Inter',
            display: 'flex',
            alignItems: 'center'
        } }
    >
        { children }
    </Typography>
}

const Input = ({ label = '', small, fontSize, multiline = false, ...props }) => {
    return <TextField
        sx={ { marginBottom: small ? '12px' : '20px' } }
        fullWidth
        label={ label }
        variant='standard'
        inputProps={ { sx: { fontSize } } }
        InputLabelProps={ { sx: { fontSize } } }
        multiline={ multiline }
        { ...props }
    />
}

const Contact = () => {

    const small = useBreakpoint()
    const containerPadding = usePadding('container')
    const { h3, h6, body } = useResponsiveFontSize()
    const [ name, setName ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ phone, setPhone ] = useState('')
    const [ querySubject, setQuerySubject ] = useState('')
    const [ queryDescription, setQueryDescription ] = useState('')

    const reset = () => {
        setName('')
        setEmail('')
        setPhone('')
        setQuerySubject('')
        setQueryDescription('')
    }

    const onContact = async () => {
        if (!name) {
            showError('Name required')
            return
        }
        if (!email) {
            showError('Email required')
            return
        }
        if (!phone) {
            showError('Phone required')
            return
        }
        if (!querySubject) {
            showError('Subject required')
            return
        }
        if (!queryDescription) {
            showError('Description required')
            return
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            showError('Invalid Email')
            return
        }

        try {
            fetch(
                '/api/contact',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        name,
                        email,
                        phone,
                        querySubject,
                        queryDescription,
                    }),
                }
            )
                .then(response => response.json())
                .then(response => {
                    if (!response.status) {
                        showError(response.error)
                    }
                    else {
                        showSuccess('Query Submitted')
                        reset()
                    }
                })
        }
        catch (err) {
            showError(err.message)
        }
    }

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
                            Bengaluru remains the top start up hub with a well-developed ecosystem, deep technology talent, and a culture of entrepreneurship.
                            <br />
                            Come visit us to be a part of our young and energetic team right here in Bangalore!
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
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.997171553433!2d77.55733412959377!3d12.907903061783932!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3fd80a58ef61%3A0xda2ad8d9bdec7671!2s944%2C%2016th%20Cross%20Rd%2C%201st%20Stage%2C%20Kumaraswamy%20Layout%2C%20Bengaluru%2C%20Karnataka%20560078!5e0!3m2!1sen!2sin!4v1657213614997!5m2!1sen!2sin"
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
                                    <Input
                                        fontSize={ body }
                                        small={ small }
                                        label='Name'
                                        value={ name }
                                        onChange={ e => setName(e.target.value) }
                                    />
                                </Grid>
                                <Grid
                                    item
                                    xs={ 12 } sm={ 12 } md={ 6 } lg={ 6 } xl={ 6 }
                                >
                                    <Input
                                        fontSize={ body }
                                        small={ small }
                                        label='Email'
                                        value={ email }
                                        onChange={ e => setEmail(e.target.value) }
                                    />
                                </Grid>
                                <Grid
                                    item
                                    xs={ 12 } sm={ 12 } md={ 6 } lg={ 6 } xl={ 6 }
                                >
                                    <Input
                                        fontSize={ body }
                                        small={ small }
                                        label='Phone Number'
                                        value={ phone }
                                        onChange={ e => setPhone(e.target.value) }
                                    />
                                </Grid>
                                <Grid
                                    item
                                    xs={ 12 } sm={ 12 } md={ 12 } lg={ 12 } xl={ 12 }
                                >
                                    <Input
                                        fontSize={ body }
                                        small={ small }
                                        label='Query Subject'
                                        value={ querySubject }
                                        onChange={ e => setQuerySubject(e.target.value) }
                                    />
                                </Grid>
                                <Grid
                                    item
                                    xs={ 12 } sm={ 12 } md={ 12 } lg={ 12 } xl={ 12 }
                                >
                                    <Input
                                        fontSize={ body }
                                        small={ small }
                                        label='Description'
                                        multiline
                                        value={ queryDescription }
                                        onChange={ e => setQueryDescription(e.target.value) }
                                    />
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
                                    lineHeight: small ? '30px' : '45px',
                                    padding: small ? '10px 25px 10px 25px' : '15px 50px 15px 50px',
                                    borderRadius: '40px',
                                    '&:hover': {
                                        color: '#5080FF',
                                    },
                                } }
                                onClick={ onContact }
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
                    <Grid
                        item
                        sx={ {
                            width: small ? '100%' : '90%',
                            height: '100%',
                        } }
                    >
                        <img
                            src={ IMAGES.CONTACT_PAGE.CONTACT }
                            style={ {
                                width: small ? '90vw' : '100%',
                                height: 'auto',
                                borderRadius: 10,
                            } }
                            alt="Illustration"
                        />
                    </Grid>
                </Grid>
            </Grid >
        </section >
    </>
}

export default Contact