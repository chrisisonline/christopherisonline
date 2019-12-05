import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Grid, Typography } from '@material-ui/core'
//components & theme
import { styleVars } from '../theme'
import BgImage from '../components/BgImage'
import ProjectContainer from '../components/ProjectContainer'
//img assets
import longboardImg from '../imgs/longboard.png'
import laptopImg from '../imgs/laptop.png'
import designImg from '../imgs/design.png'
import SkillTags from '../components/SkillTags'

const useStyles = makeStyles(theme => ({
  root: {
    margin: 'auto',
    paddingTop: styleVars.navBar,
  },
}))

const Projects = () => {
  const classes = useStyles()

  return (
    <Grid className={classes.root} container item xs={9}>
      <ProjectContainer />
      <ProjectContainer />
    </Grid>
  )
}

export default Projects