import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Grid } from '@material-ui/core'
//components & theme
import { colors, rootStyles } from '../theme'
import ProjectContainer from '../components/ProjectContainer'
//img assets
import pokemonImg from '../imgs/pokemon.png'
import upverterImg from '../imgs/upverter.png'
import websiteImg from '../imgs/website.png'
import resumesImg from '../imgs/resumes.png'

const useStyles = makeStyles(theme => ({
  root: {
    paddingTop: '20vw',
    ...rootStyles
  },
}))

const Projects = () => {
  const classes = useStyles()

  return (
    <Grid className={classes.root} container item xs={11} sm={9}>
      <ProjectContainer
        title="Pokémon"
        subTitle="Web App"
        body="An intuitive & modern design for a comprehensive & featured packed application"
        labels={['jQuery','Gulp.js','Node.js','Sass','InVision','Illustrator']}
        img={pokemonImg}
        color={{primary: colors.blue, secondary: colors.blueLight}}
      />
      <ProjectContainer
        title="Upverter"
        subTitle="UI Redesign"
        body="Created over 60 Wireframes, Mockups, and Prototypes to enhance user experience"
        labels={['Adobe XD','Figma','Illustrator','Google Closure','Flask','Jinja','Phabricator']}
        img={upverterImg}
        color={{primary: colors.yellow, secondary: colors.yellowLight}}
        right
      />
      <ProjectContainer
        title="Portfolio"
        subTitle="Website"
        body="Uniquely designed from the ground up, every element you see was custom made!"
        labels={['React','React-router','Material UI','Node.js','Yarn','Git','Figma']}
        img={websiteImg}
        color={{primary: colors.red, secondary: colors.redLight}}
      />
      <ProjectContainer
        title="Resume"
        subTitle="Design Service"
        body="3 Custom designed templates to help organize & format resumes. Eye catching designs that are easy to read and stand out from the crowd"
        labels={['Illustrator','InDesign','Figma']}
        img={resumesImg}
        color={{primary: colors.green, secondary: colors.greenLight}}
        right
      />
    </Grid>
  )
}

export default Projects