import {createTheme, CssBaseline, ThemeProvider} from "@mui/material";

const theme = createTheme({
  typography: {
    fontFamily: 'Montserrat, sans-serif',
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
      }
    }
  }
})

function MyApp({Component, pageProps}) {
  return <>
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <Component {...pageProps} />
    </ThemeProvider>
  </>
}

export default MyApp
