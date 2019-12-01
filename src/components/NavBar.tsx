import React, { useState, useMemo } from 'react'
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
    marginTop: (navBarOpaque: any) => navBarOpaque ? 0 : -theme.spacing(3),
  },
  navBtnSelected: {
    color: colors.text,
    fontWeight: 700,
  },
}))

const NavBar = () => {
  const [navBarOpaque, setNavBarOpaque] = useState(false)
  const classes = useStyles(navBarOpaque)

  useScrollPosition(
    ({ currPos }) => {
      console.log('ran scrollpos', currPos.y)
      const isTop = currPos.y > -100
      if (isTop)
        setNavBarOpaque(false)
      else
        setNavBarOpaque(true)
    },
    [navBarOpaque],
    undefined,
    false,
    300
  )

  return useMemo(
    () => (
      <AppBar>
        <Toolbar className={classnames(classes.root, {[classes.navBarOpaque]: navBarOpaque})}>
          <Grid container direction="row" alignItems="center" spacing={2}>
            <Grid className={classes.navTitle} item>
              {
                navBarOpaque ||
                <Typography variant="h1" style={{color: 'white'}}>
                  HOME
                </Typography>
              }
            </Grid>
            <Grid item>
              <Button className={classnames(classes.navBtn, classes.navBtnSelected)}> HOME </Button> 
            </Grid>
            <Grid item>
              <Button className={classes.navBtn}>
                PROJECTS
              </Button> 
            </Grid>
            <Grid item>
              <Button className={classes.navBtn}>
                EXPERIENCE
              </Button> 
            </Grid>
            <Grid item>
              <Button className={classes.navBtn}>
                CONTACT
              </Button> 
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    ),
    [navBarOpaque]
  )
}

export default NavBar