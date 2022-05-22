/* eslint-disable @next/next/no-img-element */
import { useState } from 'react'
import Grid from '@mui/material/Grid'
import Chip from '@mui/material/Chip'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import Dropzone from 'react-dropzone'
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined'
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined'
import { useBreakpoint, usePadding, vh } from '../util/responsive'

const HeroText = ({ children, small }) => {
    return <Typography
        variant='h1'
        sx={ {
            fontWeight: small ? 600 : 700,
            fontSize: small ? '60px' : '90px',
            lineHeight: small ? '70px' : '100px',
        } }
    >
        { children }
    </Typography>
}

const Input = ({ label = '', small }) => {
    return <TextField
        sx={ { marginBottom: small ? '8px' : '15px' } }
        fullWidth
        label={ label }
        variant='standard'
        inputProps={ {
            sx: {
                fontSize: small ? '14px' : '20px',
            }
        } }
        InputLabelProps={ {
            sx: {
                fontSize: small ? '14px' : '20px',
            }
        } }
    />
}

const ChipButton = ({ label = '', selected = false, onClick = () => { }, small }) => {
    return <Chip
        label={ label }
        sx={ {
            fontWeight: 500,
            fontFamily: 'Inter',
            fontSize: small ? '18px' : '25px',
            lineHeight: small ? '24px' : '30px',
            cursor: 'pointer',
            color: selected ? 'white' : 'black',
            backgroundColor: selected ? 'black' : 'white',
            border: selected ? 'none' : '2px solid lightgrey',
            padding: '20px',
            borderRadius: '50px',
        } }
        onClick={ onClick }
    />
}

const Careers = () => {

    const small = useBreakpoint()
    const containerPadding = usePadding('container')
    const [ jobType, setJobType ] = useState('Full Time')
    const [ files, setFiles ] = useState([])

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
                        <HeroText small={ small }>
                            Lorem ipsum
                        </HeroText>
                        <br />
                        <HeroText small={ small }>
                            dolor sit amet,
                        </HeroText>
                        <br />
                        <HeroText small={ small }>
                            consectetur
                        </HeroText>
                        <Grid item xs={ 12 }>&nbsp;</Grid>
                        <Grid item xs={ 12 }>&nbsp;</Grid>
                        <Typography
                            sx={ {
                                maxWidth: '80%',
                                fontWeight: 500,
                                fontSize: small ? '18px' : '25px',
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
                        src='/careers-hero.svg'
                        alt="Illustration"
                        style={ small ?
                            { width: 'auto', height: vh(45) } :
                            { width: '100%', height: 'auto' }
                        }
                    />
                </Grid>
            </Grid>
        </section>
        <section className="section-min-100vh">
            <center>
                <Typography
                    sx={ {
                        fontFamily: 'Inter',
                        fontSize: small ? '40px' : '65px',
                        fontWeight: 600,
                        lineHeight: small ? '55px' : '80px',
                        color: 'black',
                    } }
                >
                    Apply here for Jobs
                </Typography>
                <br />
                <Typography
                    sx={ {
                        fontWeight: 400,
                        fontSize: small ? '20px' : '30px',
                        lineHeight: small ? '35px' : '50px',
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
                            fontSize: small ? '30px' : '50px',
                            lineHeight: small ? '40px' : '60px',
                            color: 'black',
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
                        small={ small }
                        label='Full Time'
                        selected={ jobType === 'Full Time' }
                        onClick={ () => setJobType('Full Time') }
                    />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <ChipButton
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
                    <Input small={ small } label='Name' />
                </Grid>
                <Grid
                    item
                    xs={ 12 } sm={ 6 }
                >
                    <Input small={ small } label='Email' />
                </Grid>
                <Grid
                    item
                    xs={ 12 } sm={ 6 }
                >
                    <Input small={ small } label='Email' />
                </Grid>
                <Grid
                    item
                    xs={ 12 }
                >
                    <Input small={ small } label='Job Role' />
                </Grid>
                <Grid
                    item
                    xs={ 12 }
                >
                    <Input small={ small } label='Skills' />
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
                                    backgroundColor: '#F3F3F3',
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
                                            fontSize: small ? '25px' : '35px',
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
                            fontSize: small ? '25px' : '30px',
                            fontWeight: small ? 500 : 600,
                            lineHeight: small ? '35px' : '50px',
                            padding: small ? '10px 30px 10px 30px' : '15px 50px 15px 50px',
                            borderRadius: '40px',
                            '&:hover': {
                                color: '#5080FF',
                            },
                        } }
                    >
                        Submit
                    </Button>
                </Grid>
            </Grid>
        </section>
    </>
}

export default Careers