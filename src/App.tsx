import React, { useEffect } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  useLocation,
  Route
} from "react-router-dom"
import { makeStyles, ThemeProvider } from '@material-ui/core/styles'
import { Grid } from '@material-ui/core'
import { FlagSpinner } from 'react-spinners-kit'
import { disableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';
//components, views & theme
import { myTheme, colors, styleVars } from './theme'
import NavBar from './components/NavBar'
import Home from './views/Home'
import Projects from './views/Projects'
import Experience from './views/Experience'
import Contact from './views/Contact'

//site routing
export const routes = [
  {
    path: "/",
    exact: true,
    render: () => <Home />
  },
  {
    path: "/projects",
    render: () => <Projects />
  },
  {
    path: "/experience",
    render: () => <Experience />
  },
  {
    path: "/contact",
    render: () => <Contact />
  },
]

const useStyles = makeStyles(theme => ({
  loading: {
    position: 'fixed',
    backgroundColor: 'white',
    top: 0,
    left: 0,
    right: 0,
    height: '100vh',
    transition: '0.6s',
    opacity: (loading: any) => loading || 0,
    zIndex: (loading: any) => loading ? 9999 : -9999,
  } as any,
  root: {
    fontSize: '0.75rem',
    minHeight: '100vh',
  },
  body: {
    margin: 'auto',
    paddingTop: styleVars.navBar,
  },
  contentContainer: {
    height: styleVars.contentContainer,
  },
  textContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    width: '75%',
    padding: theme.spacing(6, 9),
  },
  subtitle: {
    marginTop: '-0.35em',
  },
}))

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

const App = () => {
  const [loading, setLoading] = React.useState(true)
  const classes = useStyles(loading)
  setTimeout(() => setLoading(false), 2000)
  
  useEffect(() => {
    if (loading)
      disableBodyScroll(document.querySelector('#loading')as HTMLElement)
    else
      clearAllBodyScrollLocks()
  })

  return (
    <ThemeProvider theme={myTheme}>
      {/* <Router> */}
      <Router basename="/test/">
        <ScrollToTop />
        <Grid className={classes.loading} id="loading" container justify="center" alignItems="center">
          <FlagSpinner size={80} color={colors.text30} />
        </Grid>
        <Grid className={classes.root} container>
          <NavBar />
          <Switch>
            {
              routes.map((route, index) => (
                <Route
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  children={<route.render />}
                />
              ))
            }
          </Switch>
        </Grid>
      </Router>
    </ThemeProvider>
  )
}

export default App
