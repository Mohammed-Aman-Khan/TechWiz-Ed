import '../styles/globals.css'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import Paper from '@mui/material/Paper'
import HeaderNav from '../components/HeaderNav'
import Footer from '../components/Footer'

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
            height: '100vh',
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
    return <ThemeWrapper>
        <BackgroundWrapper>
            <HeaderFooterWrapper>
                <Component { ...pageProps } />
            </HeaderFooterWrapper>
        </BackgroundWrapper>
    </ThemeWrapper>
}

export default MyApp