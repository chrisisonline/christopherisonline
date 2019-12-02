import React, { useState, useMemo } from 'react'
import { Link, useLocation } from "react-router-dom"
import classnames from 'classnames'
import { makeStyles } from '@material-ui/core/styles'
import { Grid, AppBar, Toolbar, Button, Typography } from '@material-ui/core'
import { useScrollPosition } from '@n8tb1t/use-scroll-position'
import { myTheme, styleVars, colors } from '../theme'

const useStyles = makeStyles(theme => ({
  root: {
    height: styleVars.navBar,
    transition: '0.7s',
  },
  navBarOpaque: {
    backgroundColor: 'rgba(255,255,255,0.9)',
    boxShadow: myTheme.shadows[1],
    height: '5vw',
  },
  navTitle: {
    flexGrow: 1,
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
  const classes = useStyles(navBarOpaque)
  // console.log(pageUrl)
  if (currPath !== pageUrl) setPageUrl(currPath)

  const returnNavTitle = () => {
    if (pageUrl === '/')
      return 'HOME'
    else
      return pageUrl.substr(1).toUpperCase()
  }
  
  useScrollPosition(
    ({ currPos }) => {
      if (currPos.y > -100) {
        setNavBarOpaque(false)
      } else {
        setNavBarOpaque(true)
      }
    },
    [navBarOpaque],
    undefined,
    undefined,
    300
  )

  const navLinks = [
    '/',
    '/projects',
    '/experience',
    '/contact',
  ]

  return (
    <AppBar>
      <Toolbar className={classnames(classes.root, {[classes.navBarOpaque]: navBarOpaque})}>
        <Grid container direction="row" alignItems="center" spacing={2}>
          <Grid className={classes.navTitle} item>
            {
              navBarOpaque ||
              <Typography variant="h1" style={{color: 'white'}}>
                { returnNavTitle() }
              </Typography>
            }
          </Grid>
          {
            navLinks.map((navLink, index) => (
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