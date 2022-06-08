import Fullpage from 'fullpage.js'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import { useEffect, useRef } from 'react'

const Project = ({
    projectName,
    projectCategory,
    animation,
    features,
    learning,
    aboutProject,
    small
}) => {
    return <Grid
        container
        className="section"
        sx={{
            height: '100vh',
            padding: small ? '50px 20px 50px 20px' : '100px',
            marginTop: '0px',
            marginRight: '0px',
            marginLeft: '0px',
            marginBottom: '0px',
        }}
        justifyContent='center'
        alignItems='center'
    >
        <Grid
            container item
        >
            <Grid
                item
                xs={12}
            >
                <Typography
                    variant={small ? 'h4' : 'h3'}
                >
                    {projectCategory}
                </Typography>
                {small ? <br /> : <></>}
            </Grid>
            <Grid
                container item
                xs={12} sm={12} md={12} lg={8} xl={8}
            >
                {
                    !small ? <>
                        <Grid item xs={12} />
                        <Grid item xs={12} />
                        <Grid item xs={12} />
                    </> : <></>
                }
                <Grid
                    item
                    xs={12}
                >
                    <Typography
                        variant={small ? 'h5' : 'h4'}
                    >
                        {projectName}
                    </Typography>
                    {small ? <br /> : <></>}
                    {
                        aboutProject ?
                            <>
                                <Typography
                                    dangerouslySetInnerHTML={{ __html: aboutProject }}
                                />
                                {small ? <br /> : <></>}
                            </> : <></>
                    }
                </Grid>
                <Grid item xs={12} />
                <Grid item xs={12} />
                <Grid
                    item
                    xs={12}
                    sx={{
                        margin: '5px 0px 5px 0px',
                    }}
                >
                    <Paper
                        elevation={0}
                        sx={{
                            borderRadius: small ? '10px' : '20px',
                            padding: small ? '10px' : '20px',
                            overflowY: 'auto'
                        }}
                    >
                        <Typography
                            variant={small ? 'h6' : 'h4'}
                        >
                            Features
                        </Typography>
                        <Typography
                            dangerouslySetInnerHTML={{ __html: features }}
                        />
                    </Paper>
                </Grid>
                <Grid
                    item
                    xs={12}
                    sx={{
                        margin: '5px 0px 5px 0px'
                    }}
                >
                    <Paper
                        elevation={0}
                        sx={{
                            borderRadius: small ? '10px' : '20px',
                            padding: small ? '10px' : '20px',
                            overflowY: 'auto'
                        }}
                    >
                        <Typography
                            variant={small ? 'h6' : 'h4'}
                        >
                            Learning
                        </Typography>
                        <Typography
                            dangerouslySetInnerHTML={{ __html: learning }}
                        />
                    </Paper>
                </Grid>
            </Grid>
            <Grid
                container item
                xs={12} sm={12} md={12} lg={4} xl={4}
                alignItems='center'
                justifyContent='center'
                sx={{
                    height: '100%',
                }}
            >
                <Grid
                    item
                    xs={12}
                    sx={{
                        width: '100%',
                        height: 'auto',
                    }}
                >
                    <img
                        alt="Animation"
                        src={animation}
                        style={{
                            width: '100%',
                            height: 'auto',
                        }}
                    />
                </Grid>
            </Grid>
        </Grid>
    </Grid >
}

const ProjectView = ({ projects = [], small }) => {

    const containerRef = useRef()

    useEffect(() => {
        if (containerRef.current)
            setTimeout(() => {
                new Fullpage('#fullpage', {
                    autoScrolling: true,
                    scrollHorizontally: true,
                    credits: { enabled: false }
                })
            }, 2000)
    }, [])

    return <div className='fullpage' id='fullpage' ref={containerRef} style={{ height: '100vh', }}>
        {
            projects
                .map(({
                    projectName,
                    projectCategory,
                    animation,
                    features,
                    learning,
                    aboutProject,
                }) =>
                    <Project
                        key={projectName}
                        {
                        ...{
                            projectName,
                            projectCategory,
                            animation,
                            features,
                            learning,
                            aboutProject,
                            small,
                        }
                        }
                    />
                )
        }
    </div>
}

export default ProjectView