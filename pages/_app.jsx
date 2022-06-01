import '../styles/globals.css'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import Paper from '@mui/material/Paper'
import HeaderNav from '../components/HeaderNav'
import Footer from '../components/Footer'
import { Toaster } from 'react-hot-toast'
import { ThemeContext } from '../util/theme'
import { useState, useEffect } from 'react'

const ThemeWrapper = ({ children }) => {

    const [ mode, setMode ] = useState('light')

    useEffect(() => {
        if (localStorage.themeMode) {
            setMode(localStorage.themeMode)
        }
    }, [])

    return <ThemeProvider
        theme={createTheme({
            palette: {
                mode,
                ...(
                    mode === 'dark' ?
                        {
                            background: {
                                paper: '#303030',
                                default: '#303030',
                            }
                        }
                        :
                        {}
                )
            },
            typography: {
                fontFamily: [ 'Poppins', 'Inter', 'sans-serif' ].join(', '),
            },
        })}
    >
        <ThemeContext.Provider
            value={{
                toggleTheme: () => {
                    localStorage.themeMode = mode === 'light' ? 'dark' : 'light'
                    setMode(prev => prev === 'light' ? 'dark' : 'light')
                }
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