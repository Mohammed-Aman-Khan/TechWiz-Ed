/* eslint-disable @next/next/no-img-element */
import { Category } from '@mui/icons-material'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'

const projectsCategories = [
    {
        title: 'Embedded System & IoT',
        image: '/iot.svg',
        text: 'Embedded System is a microcontroller-based system of hardware and software designed to perform dedicated functions within a larger mechanical or electrical system.',
    },
    {
        title: 'Machine Learning & Artificial Intelligence',
        image: '/ai.svg',
        text: 'Machine learning is broadly defined as the capability of a machine to imitate intelligent human behavior. ',
    },
    {
        title: 'Ethical Hacking',
        image: '/hacking.svg',
        text: 'Ethical hacking is a process of detecting vulnerabilities in an application, system, or organization\'s infrastructure that an attacker can use to exploit an individual or organization.',
    },
    {
        title: 'Robotics',
        image: '/blockchain.svg',
        text: 'Robotic is the design, construction, and use of machines  to perform tasks done traditionally by human beings.',
    },
    {
        title: 'Blockchain',
        image: '/robotics.svg',
        text: 'Blockchain is a shared, immutable ledger that facilitates the process of recording transactions and tracking assets in a business network.',
    },
]

const CategoryCard = ({
    title,
    image,
    text,
}) => {
    return <Paper
        elevation={ 0 }
    >
        <img src={ image } alt={ title } style={ { width: '100%', height: 'auto', borderRadius: 30, } } />
        <br /><br />
        <Typography
            sx={ {
                fontFamily: 'Poppins',
                fontWeight: 700,
                fontSize: '40px',
                lineHeight: '50px'
            } }
        >
            { title }
        </Typography>
        <br /><br />
        <Typography
            sx={ {
                fontFamily: 'Poppins',
                fontWeight: 500,
                fontSize: '25px',
                lineHeight: '45px',
            } }
        >
            { text }
        </Typography>
    </Paper>
}

const Projects = () => {
    return <>
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
                    <Typography
                        sx={ {
                            fontFamily: 'Poppins',
                            fontWeight: 700,
                            fontSize: '80px',
                            lineHeight: '100px',
                        } }
                    >
                        Explore Projects
                    </Typography>
                    <br /><br /><br />
                    <Typography
                        sx={ {
                            fontFamily: 'Poppins',
                            fontWeight: 500,
                            fontSize: '25px',
                            lineHeight: '45px',
                            color: '#6E7387',
                        } }
                    >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus quis vulputate ipsum, massa ac suspendisse laoreet amet egestas. Felis iaculis.
                    </Typography>
                    <br /><br /><br /><br /><br />
                    <Grid
                        container
                        spacing={ 10 }
                    >
                        {
                            projectsCategories
                                .map(({ title, image, text }) =>
                                    <Grid
                                        item
                                        key={ title }
                                        xs={ 12 } sm={ 12 } md={ 6 } lg={ 6 } xl={ 6 }
                                    >
                                        <CategoryCard
                                            {
                                            ...{
                                                title,
                                                image,
                                                text,
                                            }
                                            }
                                        />
                                    </Grid>
                                )
                        }
                    </Grid>
                </Grid>
            </Grid>
        </section>
    </>
}

export default Projects