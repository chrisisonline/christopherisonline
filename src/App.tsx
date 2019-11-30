import React from 'react'
import { makeStyles, ThemeProvider } from '@material-ui/core/styles'
import { Grid, AppBar, Toolbar, Button, Typography } from '@material-ui/core'
import Image from 'material-ui-image'
import longboardImg from './imgs/longboard.jpg'
import { myTheme, textColor, textColor30 } from './theme'

const useStyles = makeStyles(theme => ({
  root: {
  },
  body: {
    height: '200vh',
    margin: 'auto',
    paddingTop: 176,
  },
  navBar: {
    display: 'flex',
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
  button: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
  },
  imgContainer: {
    position: 'absolute',
    left: '5vw',
    top: 0,
    height: '55vw',
    width: '50vw',
  },
}))

function App() {
  const classes = useStyles()
  return (
    <ThemeProvider theme={myTheme}>
      <Grid className={classes.root} container>
        <AppBar>
          <Toolbar>
            <Grid container direction="row" alignItems="center">
              <Grid className={classes.navTitle} item>
                <Typography variant="h1" style={{color: 'white'}}>
                  HOME
                </Typography>
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
        <Grid className={classes.body} container xs={9}>
          <div className={classes.imgContainer}>
            <Image
              style={{height: 'inherit', paddingTop: 0}}
              imageStyle={{objectFit: 'cover', objectPosition: '30% 50%'}}
              src={longboardImg}
            />
          </div>
        </Grid>
      </Grid>
    </ThemeProvider>
  )
}

export default App
