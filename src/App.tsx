import React, { useState, useMemo } from 'react'
import classnames from 'classnames'
import { makeStyles, ThemeProvider } from '@material-ui/core/styles'
import { Grid, AppBar, Toolbar, Button, Typography } from '@material-ui/core'
import Image from 'material-ui-image'
import { useScrollPosition } from '@n8tb1t/use-scroll-position'
import longboardImg from './imgs/longboard.png'
import { myTheme, textColor, textColor30 } from './theme'

const useStyles = makeStyles(theme => {
  console.log(theme.shadows)
  return ({
  root: {
    fontSize: '0.75rem',
  },
  body: {
    height: '200vh',
    margin: 'auto',
    paddingTop: '14vw',
  },
  navBar: {
    height: '14vw',
    transition: '0.4s',
  },
  navBarOpaque: {
    backgroundColor: 'white',
    boxShadow: myTheme.shadows[1],
    height: '6vw',
  },
  navTitle: {
    flexGrow: 1,
  },
  navBtnSelected: {
    color: textColor,
    fontWeight: 700,
  },
  navBtn: {
    color: textColor30,
  },
  landingImgContainer: {
    position: 'absolute',
    left: '7vw',
    top: 0,
    height: '55vw',
    width: '43vw',
    zIndex: -5,
  },
  contentContainer: {
    height: '41vw',
  },
  textContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    width: '75%',
    padding: theme.spacing(6, 9),
  },
  subtitle: {
    marginTop: '-0.35em',
  },
})})

const App = () => {
  const classes = useStyles()
  const [navBarOpaque, setNavBarOpaque] = useState(false)

  useScrollPosition(
    ({ currPos }) => {
      console.log('ran scrollpos', currPos.y)
      const isTop = currPos.y > -120
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
      <ThemeProvider theme={myTheme}>
        <Grid className={classes.root} container>
          <AppBar>
            <Toolbar className={classnames(classes.navBar, {[classes.navBarOpaque]: navBarOpaque})}>
              <Grid container direction="row" alignItems="center">
                <Grid className={classes.navTitle} item>
                  {
                    navBarOpaque ||
                    <Typography variant="h1" style={{color: 'white'}}>
                      HOME
                    </Typography>
                  }
                </Grid>
                <Grid item>
                  <Button className={classes.navBtnSelected}> HOME </Button> 
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
          <Grid className={classes.body} container item xs={9}>
            <div className={classes.landingImgContainer}>
              <Image
                style={{height: 'inherit', paddingTop: 0}}
                imageStyle={{objectFit: 'cover', objectPosition: '30% 50%'}}
                src={longboardImg}
              />
            </div>
            <Grid className={classes.contentContainer} container item justify="center" alignContent="center">
              <Grid className={classes.textContainer} item>
                <Typography variant="h2">
                  TL;DR
                </Typography>
                <Typography className={classes.subtitle} variant="subtitle1">
                  In case you're in a hurry
                </Typography>
                <Typography variant="body1">
                  I’m a self-taught <b>UI/UX Designer</b> & Front-End Developer. Curiosity has driven me become a jack-of-all traits with experience as a Product Manager, Product Designer,  Music Instructor, Lifeguard, and Sub-Par Longboarder.
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </ThemeProvider>
    ),
    [navBarOpaque]
  )
}

export default App
