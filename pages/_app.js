import {createTheme, CssBaseline, ThemeProvider} from "@mui/material";
import createCache from '@emotion/cache';
import {CacheProvider} from "@emotion/react";

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

const cache = createCache({
  key: 'css',
  prepend: true,
});

function MyApp({Component, pageProps}) {
  return <>
      <CacheProvider value={cache}>
        <ThemeProvider theme={theme}>
          <CssBaseline/>
          <Component {...pageProps} />
        </ThemeProvider>
      </CacheProvider>
  </>
}

export default MyApp
