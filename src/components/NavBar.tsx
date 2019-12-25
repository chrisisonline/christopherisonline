import React, { useState } from 'react'
import { Link, useLocation } from "react-router-dom"
import classnames from 'classnames'
import { makeStyles } from '@material-ui/core/styles'
import { Grid, AppBar, Toolbar, Button, Typography } from '@material-ui/core'
import { useScrollPosition } from '@n8tb1t/use-scroll-position'
//components
import SideBarMobile from './SideBarMobile'
import { styleVars, colors } from '../theme'
//redux
import { useSelector } from 'react-redux'
import { BrowserSize } from '../redux/actions'

const useStyles = makeStyles(theme => ({
  root: {
    height: styleVars.navBarMobile,
    transition: '0.7s',
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    [theme.breakpoints.only('xs')]: {
      paddingLeft: theme.spacing(4),
      paddingRight: theme.spacing(4),
    },
    [theme.breakpoints.up('sm')]: {
      height: styleVars.navBar,
      paddingLeft: '10vw',
      paddingRight: '10vw',
    },
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
    fontSize: '4.7em',
    [theme.breakpoints.only('xs')]: {
      fontSize: '6em',
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: '7em',
    },
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

const NavList = ({
  navLinks,
  currPageUrl,
  setPageUrl,
}:{
  navLinks: Array<NavLink>,
  currPageUrl: string,
  setPageUrl: (link: string) => void
}) => {
  const classes = useStyles()
  return (
    <>
      { navLinks.map((navLink, index) => (
        <Grid item key={`${navLink.text}-${index}`}>
          <Link
            to={navLink.link}
            onClick={() => setPageUrl(navLink.link)}
          >
            <Button
              className={classnames(
                classes.navBtn,
                {[classes.navBtnSelected]: currPageUrl === navLink.link}
              )}
            >
              {navLink.text}
            </Button>
          </Link>
        </Grid>
      ))}
    </>
  )
}

export interface NavLink {
  text: string,
  link: string,
}

const NavBar = () => {
  //get url from react-router
  const currPath = useLocation().pathname
  //states
  const [navBarOpaque, setNavBarOpaque] = useState(false)
  const [pageUrl, setPageUrl] = useState(currPath)
  //set state url path
  if (currPath !== pageUrl) setPageUrl(currPath)

  const classes = useStyles(navBarOpaque)
  const browserSize = useSelector((state: any) => state.browserSize as BrowserSize)
  //convert url to navBar text
  const returntitleContainer = () => {
    if (pageUrl === '/')
    return 'HOME'
    else
    return pageUrl.substr(1).toUpperCase()
  }

  //navigation links
  const navLinks: Array<NavLink> = [
    {text: 'HOME', link: '/'},
    {text: 'PROJECTS', link: '/projects'},
    {text: 'EXPERIENCE', link: '/experience'},
    {text: 'CONTACT', link: '/contact'},
  ]

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
            browserSize === "sm" || browserSize === "xs" ?
            <SideBarMobile navLinks={navLinks} /> :
            <NavList
              navLinks={navLinks}
              currPageUrl={pageUrl}
              setPageUrl={setPageUrl}
            />
          }
        </Grid>
      </Toolbar>
    </AppBar>
  )
}

export default NavBar