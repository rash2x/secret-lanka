import '../styles/globals.css';
import {createTheme, CssBaseline, ThemeProvider} from "@mui/material";

const theme = createTheme({
  typography: {
    button: {
      fontFamily: '"Alumni Sans", sans-serif',
      fontSize: '2rem'
    },
  },
  palette: {
    mode: 'dark',
    primary: {
      main: '#fff'
    }
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '32px'
        },
        sizeLarge: {
          fontSize: '2rem',
          lineHeight: 1.25,
          paddingLeft: 32,
          paddingRight: 32
        }
      }
    }
  }
})

function MyApp({ Component, pageProps }) {
  return <>
    <ThemeProvider theme={theme}>
    <CssBaseline />
    <Component {...pageProps} />
    </ThemeProvider>
  </>
}

export default MyApp
