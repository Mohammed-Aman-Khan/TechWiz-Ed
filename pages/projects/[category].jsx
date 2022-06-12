import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { getProjectCategories, getProjectsForCategory } from '../../util/cosmic'
import { useBreakpoint } from '../../util/responsive'
import dynamic from 'next/dynamic'
import Fab from '@mui/material/Fab'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import { useTheme } from '@mui/material'

const ProjectView = dynamic(
    () => import('../../components/Projects'),
    { ssr: false }
)

const Projects = () => {

    const router = useRouter()
    const theme = useTheme()
    const small = useBreakpoint()
    const { category } = router.query
    const [ categories, setCategories ] = useState([])
    const [ projects, setProjects ] = useState([])

    useEffect(() => {
        getProjectCategories()
            .then(result => {
                if (result && Array.isArray(result))
                    setCategories(result.map(({ title, slug }) => ({ title, slug })))
            })
    }, [])

    useEffect(() => {
        if (categories.length) {
            if (categories.map(({ slug }) => slug).includes(category)) {
                getProjectsForCategory(categories.find(({ slug }) => slug === category).title)
                    .then(result => {
                        if (result && Array.isArray(result))
                            setProjects(result)
                    })
            }
        }
    }, [ categories ])

    return <>
        <Head>
            <title>{ categories.find(({ slug }) => slug === category)?.title } Projects</title>
        </Head>
        {
            projects.length ?
                <ProjectView
                    small={ small }
                    projects={ projects }
                />
                : <></>
        }
        <Fab
            size="small"
            aria-label="Go Back"
            sx={ {
                position: 'fixed',
                left: small ? '5px' : '10px',
                top: small ? '5px' : '10px',
                backgroundColor: theme.palette.mode === 'light' ? 'black' : 'white',
                color: theme.palette.mode === 'light' ? 'white' : 'black',
                '&:hover': {
                    backgroundColor: theme.palette.mode === 'dark' ? 'black' : 'white',
                    color: theme.palette.mode === 'dark' ? 'white' : 'black',
                }
            } }
            onClick={ () => router.push('/projects') }
        >
            <ArrowBackIcon />
        </Fab>
    </>
}

export default Projects