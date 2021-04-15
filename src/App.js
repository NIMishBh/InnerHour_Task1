import React from 'react'
import { makeStyles, createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from './container'

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#a84466',
      main: '#f06292',
      dark: '#f381a7'
    },
    secondary: {
      light: '#b2102f',
      main: '#ff1744',
      dark: '#ff4569'
    },
    background: {
      default: '#ffcccc',
      paper: '#FFFFFF'
    }
  }
});

const useStyles = makeStyles(theme => ({
  main: {
    padding: theme.spacing(2),
    width: '100%',
    flexGrow: 1
  }
}));

function App() {

  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className={classes.main}>
        <Container />
      </div>
    </ThemeProvider>

  )
}

export default App
