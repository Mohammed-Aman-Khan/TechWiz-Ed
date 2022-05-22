import '../styles/globals.css'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import Paper from '@mui/material/Paper'
import HeaderNav from '../components/HeaderNav'
import Footer from '../components/Footer'
import { vh, vw, initializeFrame } from '../util/responsive'
import dynamic from 'next/dynamic'
import { useEffect } from 'react'
import { Toaster } from 'react-hot-toast'

const ThemeWrapper = ({ children }) => {
    return <ThemeProvider
        theme={
            createTheme({
                palette: {
                    mode: 'light',
                },
                typography: {
                    fontFamily: [ 'Poppins', 'Inter', 'sans-serif' ].join(', '),
                },
            })
        }
    >
        { children }
    </ThemeProvider>
}

const BackgroundWrapper = ({ children }) => {
    return <Paper
        square
        elevation={ 0 }
        style={ {
            height: vh(100),
        } }
    >
        { children }
    </Paper>
}

const HeaderFooterWrapper = ({ children }) => {
    return <>
        <HeaderNav />
        { children }
        <Footer />
    </>
}

const MyApp = ({ Component, pageProps }) => {

    useEffect(initializeFrame, [])

    return <ThemeWrapper>
        <BackgroundWrapper>
            <HeaderFooterWrapper>
                <Component { ...pageProps } />
            </HeaderFooterWrapper>
        </BackgroundWrapper>
        <Toaster />
    </ThemeWrapper>
}

export default MyApp