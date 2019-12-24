import { debounce } from 'lodash'
import React, { useEffect } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  useLocation,
  Route
} from "react-router-dom"
import { makeStyles } from '@material-ui/core'
import { Grid } from '@material-ui/core'
import { FlagSpinner } from 'react-spinners-kit'
import { disableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';
//components, views & theme
import { colors, styleVars } from './theme'
import NavBar from './components/NavBar'
import Home from './views/Home'
import Projects from './views/Projects'
import Experience from './views/Experience'
import Contact from './views/Contact'
//redux
import { useDispatch, useSelector } from 'react-redux'
import { BROWSERSIZE_UPDATE } from './redux/actionTypes'

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
    [theme.breakpoints.down('md')]: {
      fontSize: '0.68rem',
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '0.57rem',
    },
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
  //redux
  const dispatch = useDispatch()
  const browserSize = useSelector((state: any) => state.browserSize)

  //fake timer for loading screen :p
  setTimeout(() => setLoading(false), 100)
  
  //disable scrolling when the loading screen is visible
  useEffect(() => {
    if (loading)
      disableBodyScroll(document.querySelector('#loading')as HTMLElement)
    else
      clearAllBodyScrollLocks()

    //set and update redux with the current browserSize
    window.addEventListener(
      "resize",
      debounce(() => {
        if (window.screen.width !== browserSize)
          dispatch({ type: BROWSERSIZE_UPDATE, payload: window.screen.width })
      }, 400)
    )
  })

  return (
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
  )
}

export default App
