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

const HeroText = ({ children, small = false }) => {
    return <Typography
        variant='h1'
        sx={ {
            fontWeight: 700,
            fontSize: small ? '65px' : '90px',
            lineHeight: small ? '80px' : '100px',
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

const ChipButton = ({ label = '', selected = false, onClick = () => { } }) => {
    return <Chip
        label={ label }
        sx={ {
            fontWeight: 500,
            fontFamily: 'Inter',
            fontSize: '30px',
            lineHeight: '40px',
            cursor: 'pointer',
            color: selected ? 'white' : 'black',
            backgroundColor: selected ? 'black' : 'white',
            border: selected ? 'none' : '2px solid lightgrey',
            padding: '30px',
            borderRadius: '50px',
        } }
        onClick={ onClick }
    />
}

const Careers = () => {

    const [ jobType, setJobType ] = useState('Full Time')
    const [ files, setFiles ] = useState([])

    return <>
        <section className="section-min-100vh">
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
                            Lorem ipsum
                        </HeroText>
                        <br />
                        <HeroText>
                            dolor sit amet,
                        </HeroText>
                        <br />
                        <HeroText>
                            consectetur
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
                    item container
                    justifyContent='center'
                    alignItems='center'
                    sx={ { height: '100%', width: '50%' } }
                >
                    <img src='/careers-hero.svg' alt="Illustration" style={ { width: '100%', height: 'auto' } } />
                </Grid>
            </Grid>
        </section>
        <section className="section-min-100vh">
            <center>
                <Typography
                    sx={ {
                        fontFamily: 'Inter',
                        fontSize: '65px',
                        fontWeight: 600,
                        lineHeight: '80px',
                        color: 'black',
                    } }
                >
                    Apply here for Jobs
                </Typography>
                <br />
                <Typography
                    sx={ {
                        fontWeight: 400,
                        fontSize: '30px',
                        lineHeight: '50px',
                        color: '#686F84',
                        letterSpacing: '-0.02em',
                    } }
                >
                    Lorem ipsum dolor sit amet, consectetur<br />adipiscing elit ut aliquam
                </Typography>
            </center>
            <Grid
                container
                sx={ { padding: '125px 250px 125px 250px' } }
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
                            fontSize: '50px',
                            lineHeight: '60px',
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
                        label='Full Time'
                        selected={ jobType === 'Full Time' }
                        onClick={ () => setJobType('Full Time') }
                    />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <ChipButton
                        label='Internship'
                        selected={ jobType === 'Internship' }
                        onClick={ () => setJobType('Internship') }
                    />
                </Grid>
                <Grid
                    item
                    xs={ 12 }
                >
                    <Input label='Name' />
                </Grid>
                <Grid
                    item
                    xs={ 12 } sm={ 6 }
                >
                    <Input label='Email' />
                </Grid>
                <Grid
                    item
                    xs={ 12 } sm={ 6 }
                >
                    <Input label='Email' />
                </Grid>
                <Grid
                    item
                    xs={ 12 }
                >
                    <Input label='Job Role' />
                </Grid>
                <Grid
                    item
                    xs={ 12 }
                >
                    <Input label='Skills' />
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
                                    height: 300,
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
                                            fontSize: '35px',
                                            lineHeight: '40px',
                                            fontFamily: 'Inter',
                                        } }
                                    >
                                        Upload your resume
                                    </Typography>
                                    <br /><br />
                                    <FileUploadOutlinedIcon sx={ { fontSize: '75px' } } />
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
                </Grid>
            </Grid>
        </section>
    </>
}

export default Careers