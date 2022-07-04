import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import { FullPage, Slide } from 'react-full-page'
import { useResponsiveFontSize } from '../../util/responsive'
import Chip from '@mui/material/Chip'

const getColor = index => {
    return (index + 1) % 3 === 0
        ?
        '#AAA7FF'
        :
        (index + 1) % 2 === 0
            ?
            '#FFB78D'
            :
            '#86E195'
}

const Project = ({
    index,
    projectName,
    projectCategory,
    animation,
    features,
    learning,
    aboutProject,
    small
}) => {

    const { h3, h5, h6, body, helper } = useResponsiveFontSize()

    return <Grid
        container
        sx={ {
            height: small ? 'auto' : '100vh',
            padding: small ? '50px 20px 50px 20px' : '100px',
        } }
        justifyContent='center'
        alignItems='center'
    >
        <Grid
            container item
        >
            <Grid
                item
                xs={ 12 }
            >
                <Typography
                    sx={ {
                        fontSize: h3,
                        fontWeight: 700
                    } }
                >
                    { projectCategory }
                </Typography>
                { small ? <><br /><br /><br /></> : <><br /><br /></> }
            </Grid>
            <Grid
                container item
                xs={ 12 } sm={ 12 } md={ 12 } lg={ 7 } xl={ 7 }
            >
                {
                    !small ? <>
                        <Grid item xs={ 12 } />
                        <Grid item xs={ 12 } />
                        <Grid item xs={ 12 } />
                    </> : <></>
                }
                <Grid
                    item
                    xs={ 12 }
                >
                    <Typography
                        sx={ {
                            fontWeight: 600,
                            fontSize: h5,
                        } }
                    >
                        { projectName }
                    </Typography>
                    { small ? <br /> : <></> }
                    {
                        aboutProject ?
                            <>
                                <Typography
                                    sx={ {
                                        fontSize: body,
                                        color: '#686F84'
                                    } }
                                    dangerouslySetInnerHTML={ { __html: aboutProject } }
                                />
                                { small ? <br /> : <></> }
                            </> : <></>
                    }
                </Grid>
                <Grid item xs={ 12 } />
                <Grid item xs={ 12 } />
                <Grid
                    item
                    xs={ 12 }
                    sx={ {
                        margin: '5px 0px 5px 0px',
                    } }
                >
                    <Paper
                        elevation={ 0 }
                        sx={ {
                            borderRadius: small ? '10px' : '20px',
                            padding: small ? '10px' : '20px',
                            overflowY: 'auto'
                        } }
                    >
                        <div>
                            <Chip
                                label={ '01' }
                                sx={ {
                                    backgroundColor: getColor(index),
                                    color: 'white',
                                } }
                            />
                            <br />
                            <Typography
                                sx={ {
                                    fontSize: h6,
                                    fontWeight: 600
                                } }
                            >
                                Features
                            </Typography>
                        </div>
                        <Typography
                            sx={ {
                                fontSize: helper,
                                color: '#686F84'
                            } }
                            dangerouslySetInnerHTML={ { __html: features } }
                        />
                    </Paper>
                </Grid>
                <Grid
                    item
                    xs={ 12 }
                    sx={ {
                        margin: '5px 0px 5px 0px'
                    } }
                >
                    <Paper
                        elevation={ 0 }
                        sx={ {
                            borderRadius: small ? '10px' : '20px',
                            padding: small ? '10px' : '20px',
                            overflowY: 'auto'
                        } }
                    >
                        <div>
                            <Chip
                                label={ '02' }
                                sx={ {
                                    backgroundColor: getColor(index),
                                    color: 'white',
                                } }
                            />
                            <br />
                            <Typography
                                sx={ {
                                    fontSize: h6,
                                    fontWeight: 600
                                } }
                            >
                                Learning
                            </Typography>
                        </div>
                        <Typography
                            sx={ {
                                fontSize: helper,
                                color: '#686F84'
                            } }
                            dangerouslySetInnerHTML={ { __html: learning } }
                        />
                    </Paper>
                </Grid>
            </Grid>
            <Grid
                container item
                xs={ 12 } sm={ 12 } md={ 12 } lg={ 5 } xl={ 5 }
                alignItems='center'
                justifyContent='center'
                sx={ {
                    height: '100%',
                } }
            >
                <Grid
                    item
                    xs={ 12 }
                    sx={ {
                        width: '100%',
                        height: 'auto',
                    } }
                >
                    <img
                        alt="Animation"
                        src={ animation }
                        style={ {
                            width: '100%',
                            height: 'auto',
                            borderRadius: small ? 20 : 40,
                        } }
                    />
                </Grid>
            </Grid>
        </Grid>
    </Grid>
}

const ProjectView = ({ projects = [], small }) => {

    return small ?
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
                    key={ projectName }
                    { ...{
                        projectName,
                        projectCategory,
                        animation,
                        features,
                        learning,
                        aboutProject,
                        small,
                    } }
                />
            )
        : <FullPage>
            {
                projects
                    .map(({
                        projectName,
                        projectCategory,
                        animation,
                        features,
                        learning,
                        aboutProject,
                    }, index) =>
                        <Slide
                            key={ projectName }
                        >
                            <Project
                                { ...{
                                    index,
                                    projectName,
                                    projectCategory,
                                    animation,
                                    features,
                                    learning,
                                    aboutProject,
                                    small,
                                } }
                            />
                        </Slide>
                    )
            }
        </FullPage>
}

export default ProjectView