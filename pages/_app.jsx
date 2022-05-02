import '../styles/globals.css'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import Paper from '@mui/material/Paper'

const ThemeWrapper = ({ children }) => {
    return <ThemeProvider
        theme={
            createTheme({
                palette: {
                    mode: 'light',
                },
                typography: {
                    fontFamily: [ 'Poppins', 'sans-serif' ].join(', '),
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
            minHeight: '100vh',
        } }
    >
        { children }
    </Paper>
}

const MyApp = ({ Component, pageProps }) => {
    return <ThemeWrapper>
        <BackgroundWrapper>
            <Component { ...pageProps } />
        </BackgroundWrapper>
    </ThemeWrapper>
}

export default MyApp