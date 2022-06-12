/* eslint-disable @next/next/no-img-element */
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import { useEffect, useState } from 'react'
import { useBreakpoint, usePadding, useResponsiveFontSize } from '../../util/responsive'
import { getProjectCategories } from '../../util/cosmic'
import { useTheme } from '@mui/material'
import Link from 'next/link'

const CategoryCard = ({
    title,
    image,
    content,
    small,
    titleSize,
    contentSize,
}) => {

    const theme = useTheme()

    return <Paper
        elevation={ 0 }
        sx={ {
            padding: small ? '20px' : '30px',
            borderRadius: '30px',
            cursor: 'pointer',
            '&:hover': {
                boxShadow: `0px 18px 40px -12px ${ theme.palette.mode === 'light' ? 'rgba(0, 0, 0, 0.5)' : 'rgba(255, 255, 255, 0.1)' }`,
            },
            height: '100%',
        } }
    >
        <img src={ image } alt={ title } style={ { width: '100%', height: 'auto', borderRadius: 30, } } />
        <br /><br /><br />
        <Typography
            sx={ {
                fontFamily: 'Poppins',
                fontWeight: small ? 500 : 600,
                fontSize: titleSize,
            } }
        >
            { title }
        </Typography>
        <Typography
            sx={ {
                fontFamily: 'Poppins',
                fontWeight: small ? 300 : 400,
                fontSize: contentSize,
                lineHeight: small ? '30px' : '40px',
            } }
            dangerouslySetInnerHTML={ { __html: content } }
        >
        </Typography>
    </Paper>
}

const Projects = () => {

    const small = useBreakpoint()
    const containerPadding = usePadding('container')
    const { h4, h6, body, caption } = useResponsiveFontSize()
    const [ categories, setCategories ] = useState([])

    useEffect(() => {
        getProjectCategories()
            .then(result => {
                if (result && Array.isArray(result))
                    setCategories(result)
            })
    }, [])

    return <>
        <section className='section-min-100vh'>
            <Grid
                container
                sx={ { height: '100%', padding: containerPadding } }
                alignItems='center'
                justifyContent='center'
            >
                <Grid
                    item
                >
                    <Typography
                        sx={ {
                            fontFamily: 'Poppins',
                            fontWeight: small ? 600 : 700,
                            fontSize: h4,
                            lineHeight: small ? '70px' : '100px',
                        } }
                    >
                        Explore Projects
                    </Typography>
                    <br /><br /><br />
                    <Typography
                        sx={ {
                            fontFamily: 'Poppins',
                            fontWeight: small ? 400 : 500,
                            fontSize: body,
                            lineHeight: small ? '30px' : '45px',
                            color: '#6E7387',
                        } }
                    >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus quis vulputate ipsum, massa ac suspendisse laoreet amet egestas. Felis iaculis.
                    </Typography>
                    <br /><br /><br /><br /><br />
                    <Grid
                        container
                        spacing={ small ? 5 : 10 }
                    >
                        {
                            categories
                                .map(({ title, image, content, slug }) =>
                                    <Link
                                        key={ title }
                                        href={ `/projects/${ slug }` }
                                        passHref
                                    >
                                        <Grid
                                            item
                                            xs={ 12 } sm={ 12 } md={ 6 } lg={ 6 } xl={ 6 }
                                        >
                                            <CategoryCard
                                                { ...{
                                                    title,
                                                    image,
                                                    content,
                                                    small,
                                                    titleSize: h6,
                                                    contentSize: caption,
                                                } }
                                            />
                                        </Grid>
                                    </Link>
                                )
                        }
                        {
                            categories % 2 !== 0 ?
                                <Grid
                                    item
                                    xs={ 12 } sm={ 12 } md={ 6 } lg={ 6 } xl={ 6 }
                                >
                                    <Paper
                                        elevation={ 0 }
                                        sx={ {
                                            padding: small ? '20px' : '30px',
                                            borderRadius: '30px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            height: '100%'
                                        } }
                                    >
                                        <Typography
                                            sx={ {
                                                fontSize: h6,
                                            } }
                                        >
                                            More Coming Soon
                                        </Typography>
                                    </Paper>
                                </Grid>
                                : <></>
                        }
                    </Grid>
                </Grid>
            </Grid>
        </section>
    </>
}

export default Projects