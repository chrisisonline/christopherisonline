import React, { useState } from 'react'
import { Link, useLocation } from "react-router-dom"
import classnames from 'classnames'
import { makeStyles } from '@material-ui/core/styles'
import { Grid, AppBar, Toolbar, Button, Typography } from '@material-ui/core'
import { useScrollPosition } from '@n8tb1t/use-scroll-position'
import { styleVars, colors } from '../theme'
//redux
import { useSelector } from 'react-redux'
import { BrowserSize } from '../redux/actions'

const useStyles = makeStyles(theme => ({
  root: {
    height: styleVars.navBar,
    transition: '0.7s',
  },
  navBarOpaque: {
    backgroundColor: 'rgba(255,255,255,0.95)',
    boxShadow: theme.shadows[1],
    height: '5vw',
  },
  titleContainer: {
    flexGrow: 1,
  },
  title: {
    [theme.breakpoints.down('sm')]: {
      fontSize: '7em',
    }
  },
  whiteTitle: {
    color: 'white',
  },
  navBtn: {
    marginTop: (navBarOpaque: any) => navBarOpaque ? 0 : -theme.spacing(3) as any,
  },
  navBtnSelected: {
    color: colors.text,
    fontWeight: 700,
  },
}))

const NavBar = () => {
  const currPath = useLocation().pathname
  const [navBarOpaque, setNavBarOpaque] = useState(false)
  const [pageUrl, setPageUrl] = useState(currPath)
  if (currPath !== pageUrl) setPageUrl(currPath)

  const classes = useStyles(navBarOpaque)
  
  const browserSize = useSelector((state: any) => state.browserSize as BrowserSize)
  const returntitleContainer = () => {
    if (pageUrl === '/')
    return 'HOME'
    else
    return pageUrl.substr(1).toUpperCase()
  }
  
  useScrollPosition(
    ({ currPos }) => {
      if (currPos.y > -100) {
        //navbar is transparent at the top of the page
        setNavBarOpaque(false)
      } else {
        //navbar is white when scrolling
        setNavBarOpaque(true)
      }
    },
    [navBarOpaque],
    undefined,
    undefined,
    300
  )

  return (
    <AppBar>
      <Toolbar className={classnames(classes.root, {[classes.navBarOpaque]: navBarOpaque})}>
        <Grid container alignItems="center" wrap="nowrap" spacing={1}>
          <Grid className={classes.titleContainer} item>
            {
              navBarOpaque ? null :
              <Typography
                className={classnames(
                  classes.title,
                  {[classes.whiteTitle]: returntitleContainer() === 'HOME'}
                )}
                variant="h1">
                { returntitleContainer() }
              </Typography>
            }
          </Grid>
          {
            ['/', '/projects', '/experience', '/contact'].map((navLink, index) => (
              <Grid item key={`${navLink.substr(1)}-${index}`}>
                <Button
                  onClick={() => setPageUrl(navLink)}
                  className={classnames(
                    classes.navBtn,
                    {[classes.navBtnSelected]: pageUrl === navLink}
                  )}
                >
                  <Link to={navLink}>
                    {navLink === '/' ? 'HOME' : navLink.substr(1).toUpperCase()}
                  </Link>
                </Button>
              </Grid>
            ))
          }
        </Grid>
      </Toolbar>
    </AppBar>
  )
}

export default NavBar