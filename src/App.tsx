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
import { colors } from './theme'
import NavBar from './components/NavBar'
import Home from './views/Home'
import Projects from './views/Projects'
import Experience from './views/Experience'
import Contact from './views/Contact'
//redux
import { useDispatch } from 'react-redux'
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
    width: '100vw',
    transition: '0.6s',
    opacity: (loading: any) => loading || 0,
    zIndex: (loading: any) => loading ? 9999 : -9999,
  } as any,
  root: {
    fontSize: '0.58rem',
    minHeight: '100vh',
    overflow: 'hidden',
    [theme.breakpoints.up('sm')]: {
      fontSize: '0.75rem',
    },
    [theme.breakpoints.only('xs')]: {
      fontSize: '0.68rem',
    },
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

  //fake timer for loading screen :p
  setTimeout(() => setLoading(false), 100)
  
  //disable scrolling when the loading screen is visible
  useEffect(() => {
    if (loading)
      disableBodyScroll(document.querySelector('#loading')as HTMLElement)
    else
      clearAllBodyScrollLocks()

    //set and update redux with the current browserSize
    dispatch({ type: BROWSERSIZE_UPDATE, payload: window.screen.width })
    window.addEventListener(
      "resize",
      debounce(() => {
        dispatch({ type: BROWSERSIZE_UPDATE, payload: window.screen.width })
      }, 400)
    )
  })

  return (
    <Router basename="/">
      <ScrollToTop />
      <Grid className={classes.loading} id="loading" container justify="center" alignItems="center" xs={12}>
        <FlagSpinner size={80} color={colors.text30} />
      </Grid>
      <Grid className={classes.root} container xs={12}>
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
