/* eslint-disable @next/next/no-img-element */
import { useState } from 'react'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import Dropzone from 'react-dropzone'
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined'
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined'
import { useBreakpoint, usePadding, useResponsiveFontSize } from '../util/responsive'
import { useTheme } from '@mui/material'
import { IMAGES } from '../util/cdn-urls'
import { showError, showSuccess } from '../util/alerts'
import { uploadResume, getLink } from '../util/supabase'

const HeroText = ({ children, small, fontSize }) => {
    return <Typography
        variant='h1'
        sx={ {
            fontWeight: small ? 600 : 700,
            fontSize: fontSize,
            lineHeight: small ? '50px' : '100px',
        } }
    >
        { children }
    </Typography>
}

const Input = ({ label = '', small, fontSize, type, ...props }) => {
    return <TextField
        sx={ { marginBottom: small ? '8px' : '15px' } }
        fullWidth
        label={ label }
        variant='standard'
        type={ type }
        { ...props }
        inputProps={ { sx: { fontSize } } }
        InputLabelProps={ { sx: { fontSize } } }
    />
}

const ChipButton = ({ label = '', selected = false, onClick = () => { }, small, fontSize }) => {
    return <Button
        sx={ {
            fontWeight: 500,
            fontFamily: 'Inter',
            fontSize: fontSize,
            lineHeight: small ? '24px' : '30px',
            cursor: 'pointer',
            padding: '10px 20px 10px 20px',
            borderRadius: '50px',
        } }
        color={ selected ? 'primary' : 'inherit' }
        disableElevation
        variant={ selected ? 'contained' : 'standard' }
        onClick={ onClick }
    >
        { label }
    </Button>
}

const Careers = () => {

    const small = useBreakpoint()
    const theme = useTheme()
    const containerPadding = usePadding('container')
    const { h2, h4, h5, h6, body } = useResponsiveFontSize()
    const [ jobType, setJobType ] = useState('Full Time')
    const [ name, setName ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ jobRole, setJobRole ] = useState('')
    const [ phone, setPhone ] = useState('')
    const [ skills, setSkills ] = useState('')
    const [ files, setFiles ] = useState([])

    const reset = () => {
        setJobType('Full Time')
        setName('')
        setEmail('')
        setJobRole('')
        setPhone('')
        setSkills('')
        setFiles([])
    }

    const onApply = async () => {

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
        if (!jobRole) {
            showError('Job Role required')
            return
        }
        if (!skills) {
            showError('Skills required')
            return
        }
        if (!files.length) {
            showError('Resume PDF File required')
            return
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            showError('Invalid Email')
            return
        }

        try {
            const { fileName } = await uploadResume(files[ 0 ])
            const resume = getLink(fileName)

            fetch(
                '/api/career',
                {
                    method: 'POST',
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        email,
                        jobType,
                        name,
                        phone,
                        jobRole,
                        skills,
                        resume,
                    }),
                }
            )
                .then(response => response.json())
                .then(response => {
                    if (!response.status) {
                        showError(response.error)
                    }
                    else {
                        showSuccess('Application Submitted')
                        reset()
                    }
                })
        }
        catch (error) {
            showError(error.message)
        }
    }

    return <>
        <section className="section-100vh">
            <Grid
                container
                className={ small && 'center' }
                sx={ { height: '100%', padding: containerPadding } }
                alignItems='center'
                justifyContent={ small ? 'space-evenly' : 'space-between' }
                spacing={ small ? 5 : 10 }
            >
                <Grid
                    item container
                    sx={ { height: small ? 'auto' : '100%' } }
                    xs={ 12 } sm={ 12 } md={ 12 } lg={ 6 } xl={ 6 }
                    alignItems='center'
                >
                    <Grid item container className={ small && 'center' }>
                        <HeroText fontSize={ h2 } small={ small }>
                            Lorem ipsum
                        </HeroText>
                        <br />
                        <HeroText fontSize={ h2 } small={ small }>
                            dolor sit amet,
                        </HeroText>
                        <br />
                        <HeroText fontSize={ h2 } small={ small }>
                            consectetur
                        </HeroText>
                        <Grid item xs={ 12 }>&nbsp;</Grid>
                        <Grid item xs={ 12 }>&nbsp;</Grid>
                        <Typography
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
                    item container
                    justifyContent='center'
                    alignItems='center'
                    sx={ { height: small ? 'auto' : '100%' } }
                    xs={ 12 } sm={ 12 } md={ 12 } lg={ 6 } xl={ 6 }
                >
                    <img
                        src={ IMAGES.CAREERS_PAGE.CAREERS }
                        alt="Illustration"
                        style={ {
                            width: '100%',
                            height: 'auto',
                            borderRadius: 10,
                        } }
                    />
                </Grid>
            </Grid>
        </section>
        <section className="section-min-100vh">
            <center>
                <Typography
                    sx={ {
                        fontFamily: 'Inter',
                        fontSize: h4,
                        fontWeight: 600,
                        lineHeight: small ? '50px' : '75px',
                    } }
                >
                    Apply here for Jobs
                </Typography>
                <br />
                <Typography
                    sx={ {
                        fontWeight: 400,
                        fontSize: body,
                        lineHeight: small ? '30px' : '45px',
                        color: '#686F84',
                        letterSpacing: '-0.02em',
                    } }
                >
                    Lorem ipsum dolor sit amet, consectetur<br />adipiscing elit ut aliquam
                </Typography>
            </center>
            <Grid
                container
                className={ small && 'center' }
                sx={ { padding: containerPadding } }
                spacing={ 5 }
            >
                <Grid
                    item
                    xs={ 12 }
                >
                    <Typography
                        sx={ {
                            fontFamily: 'Inter',
                            fontWeight: 600,
                            fontSize: h5,
                            lineHeight: small ? '40px' : '60px',
                        } }
                    >
                        Job Openings
                    </Typography>
                </Grid>
                <Grid
                    item
                    xs={ 12 }
                >
                    <ChipButton
                        fontSize={ h6 }
                        small={ small }
                        label='Full Time'
                        selected={ jobType === 'Full Time' }
                        onClick={ () => setJobType('Full Time') }
                    />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <ChipButton
                        fontSize={ h6 }
                        small={ small }
                        label='Internship'
                        selected={ jobType === 'Internship' }
                        onClick={ () => setJobType('Internship') }
                    />
                </Grid>
                <Grid
                    item
                    xs={ 12 }
                >
                    <Input
                        fontSize={ body }
                        small={ small }
                        label='Name'
                        type='text'
                        value={ name }
                        onChange={ e => setName(e.target.value) }
                    />
                </Grid>
                <Grid
                    item
                    xs={ 12 } sm={ 6 }
                >
                    <Input
                        fontSize={ body }
                        small={ small }
                        label='Email'
                        type='email'
                        value={ email }
                        onChange={ e => setEmail(e.target.value) }
                    />
                </Grid>
                <Grid
                    item
                    xs={ 12 } sm={ 6 }
                >
                    <Input
                        fontSize={ body }
                        small={ small }
                        label='Phone'
                        type='tel'
                        value={ phone }
                        onChange={ e => setPhone(e.target.value) }
                    />
                </Grid>
                <Grid
                    item
                    xs={ 12 }
                >
                    <Input
                        fontSize={ body }
                        small={ small }
                        label='Job Role'
                        type='text'
                        value={ jobRole }
                        onChange={ e => setJobRole(e.target.value) }
                    />
                </Grid>
                <Grid
                    item
                    xs={ 12 }
                >
                    <Input
                        fontSize={ body }
                        small={ small }
                        label='Skills'
                        type='text'
                        value={ skills }
                        onChange={ e => setSkills(e.target.value) }
                    />
                </Grid>
                <Grid
                    item
                    xs={ 12 }
                >
                    <Dropzone
                        maxFiles={ 1 }
                        accept={ [ 'application/pdf' ] }
                        onDrop={ setFiles }
                    >
                        { ({ getRootProps, getInputProps }) => (
                            <Grid
                                container
                                sx={ {
                                    width: '100%',
                                    height: small ? 200 : 300,
                                    backgroundColor: theme.palette.mode === 'light' ? '#F3F3F3' : 'rgb(50, 50, 50)',
                                    borderRadius: '40px',
                                    cursor: 'pointer',
                                } }
                                justifyContent='center'
                                alignItems='center'
                                { ...getRootProps() }
                            >
                                <Grid
                                    item container
                                    alignItems='center'
                                    flexDirection='column'
                                >
                                    <input { ...getInputProps() } />
                                    <Typography
                                        sx={ {
                                            fontWeight: 500,
                                            fontSize: h5,
                                            lineHeight: small ? '30px' : '40px',
                                            fontFamily: 'Inter',
                                        } }
                                    >
                                        Upload your resume
                                    </Typography>
                                    <br /><br />
                                    <FileUploadOutlinedIcon sx={ { fontSize: small ? '50px' : '75px' } } />
                                </Grid>
                            </Grid>
                        ) }
                    </Dropzone>
                </Grid>
                {
                    files.length ? <Grid
                        item
                        xs={ 12 }
                    >
                        <aside>
                            <Typography variant='h6'>
                                Selected File :<br /><em>{ files[ 0 ].path }</em>
                                <IconButton onClick={ () => setFiles([]) } size='small'><ClearOutlinedIcon /></IconButton>
                            </Typography>
                        </aside>
                    </Grid> : <></>
                }
                <Grid
                    item
                    xs={ 12 }
                >
                    <Button
                        size={ small ? 'medium' : 'large' }
                        sx={ {
                            backgroundColor: '#5080FF',
                            color: 'white',
                            fontSize: h6,
                            fontWeight: small ? 500 : 600,
                            lineHeight: small ? '30px' : '45px',
                            padding: small ? '10px 30px 10px 30px' : '15px 50px 15px 50px',
                            borderRadius: '40px',
                            '&:hover': {
                                color: '#5080FF',
                            },
                        } }
                        onClick={ onApply }
                    >
                        Submit
                    </Button>
                </Grid>
            </Grid>
        </section>
    </>
}

export default Careers