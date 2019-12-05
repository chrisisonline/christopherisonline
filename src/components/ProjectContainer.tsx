import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Grid, Typography } from '@material-ui/core'
import Image from 'material-ui-image'
//components & theme
import { styleVars, colors } from '../theme'
import SkillTags from './SkillTags'
import BgImage from '../components/BgImage'
import TextContainer, { StatContainer } from '../components/TextContainer'
//img assets
import pokemonImg from '../imgs/pokemon.png'

const useStyles = makeStyles(theme => ({
  root: {
    height: '28vw',
    margin: theme.spacing(6, 0),
  },
  grow: {
    flexGrow: 1,
  },
  imgContainer: {
    position: 'relative',
  },
  bgBox: {
    backgroundColor: colors.text,
    position: 'absolute',
    top: 16,
    left: 16,
    right: 32,
    bottom: 16,
  },
  textContainer: {
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(9),
  },
  subtitle: {
    marginTop: -theme.spacing(1),
  },
}))
const imgStyles = {
  position: 'absolute',
  top: -16,
  left: -16,
  right: 0,
  bottom: -16,
  paddingTop: 0,
}

const ProjectContainer = () => {
  const classes = useStyles()

  return (
    <Grid className={classes.root} container item>
      <Grid className={classes.imgContainer} container item xs={6}>
        <Grid className={classes.bgBox} item></Grid>
        <Image
          color="transparent"
          style={imgStyles}
          imageStyle={{objectFit: 'contain'}}
          src={pokemonImg}
        />
      </Grid>
      {/* <Grid className={classes.grow} item /> */}
      <Grid className={classes.textContainer} container item direction="column" justify="center" xs={6}>
        <Typography variant="h2">
          Pokémon
        </Typography>
        <Typography className={classes.subtitle} variant="subtitle1">
          Web App
        </Typography>
        <Typography variant="body1">
          An intuitive & modern design for a comprehensive & featured packed application
        </Typography>
        <SkillTags
          labels={['jQuery','Gulp.js','Node.js','Sass','InVision','Illustrator']}
        />
      </Grid>
    </Grid>
  )
}

export default ProjectContainer