import '../styles/globals.css'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import Paper from '@mui/material/Paper'
import HeaderNav from '../components/HeaderNav'
import Footer from '../components/Footer'
import { Toaster } from 'react-hot-toast'
import { ThemeContext } from '../util/theme'
import { useState, /* useEffect */ } from 'react'

const ThemeWrapper = ({ children }) => {

    const [ theme, setTheme ] = useState('light')

    // useEffect(() => localStorage.themeMode = theme, [ theme ])

    return <ThemeProvider
        theme={createTheme({
            palette: {
                mode: theme,
            },
            typography: {
                fontFamily: [ 'Poppins', 'Inter', 'sans-serif' ].join(', '),
            },
        })}
    >
        <ThemeContext.Provider
            value={{
                toggleTheme: () => setTheme(prev => prev === 'light' ? 'dark' : 'light')
            }}
        >
            {children}
        </ThemeContext.Provider>
    </ThemeProvider>
}

const BackgroundWrapper = ({ children }) => {
    return <Paper
        square
        elevation={0}
        style={{
            height: 'auto',
            width: '100%',
        }}
    >
        {children}
    </Paper>
}

const HeaderFooterWrapper = ({ children }) => {
    return <>
        <HeaderNav />
        {children}
        <Footer />
    </>
}

const MyApp = ({ Component, pageProps }) => {
    return <ThemeWrapper>
        <BackgroundWrapper>
            <HeaderFooterWrapper>
                <Component {...pageProps} />
            </HeaderFooterWrapper>
        </BackgroundWrapper>
        <Toaster />
    </ThemeWrapper>
}

export default MyApp