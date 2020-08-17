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
import easyclipboardImg from '../imgs/easyclipboard.png'

const useStyles = makeStyles(theme => ({
  root: {
    ...rootStyles,
    paddingTop: '20vw',
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
        links={[{
          text: "Check out the live app",
          url: "https://chrisisonline.github.io/pkmn-dmgcalc/"
        },{
          text: "Read about my process",
          url: "https://medium.com/@cj.design/fresh-new-look-for-a-pokemon-calculator-b14ce7b567a1"
        }]}
      />
      <ProjectContainer
        title="Upverter"
        subTitle="UI Redesign"
        body="Created over 60 Wireframes, Mockups, and Prototypes to enhance user experience"
        labels={['Adobe XD','Figma','Illustrator','Google Closure','Flask','Jinja','Phabricator']}
        img={upverterImg}
        color={{primary: colors.yellow, secondary: colors.yellowLight}}
        links={[{
          text: "See all the mockups & designs",
          url: "https://medium.com/@cj.design/refreshing-upverter-4212df39bedf"
        }]}
        right
      />
      <ProjectContainer
        title="EasyClipboard"
        subTitle="Chrome Extension"
        body="A simple extension that allows you to quickly copy and paste text, urls and store them safely in your browser"
        labels={['Chrome Extension', 'React', 'Git','Figma']}
        img={easyclipboardImg}
        color={{primary: colors.red, secondary: colors.redLight}}
        links={[{
          text: "Try it yourself in the Chrome store",
          url: "https://chrome.google.com/webstore/detail/easy-clipboard/lkpiolleljimgohflbgekkbeoiajighj"
        }]}
      />
      <ProjectContainer
        title="Portfolio"
        subTitle="Website"
        body="Uniquely designed from the ground up, every element you see was custom made!"
        labels={['React','React-router','Material UI','Node.js','Yarn','Git','Figma']}
        img={websiteImg}
        color={{primary: colors.green, secondary: colors.greenLight}}
        right
      />
      <ProjectContainer
        title="Resume"
        subTitle="Design Service"
        body="3 Custom designed templates to help organize & format resumes. Eye catching designs that are easy to read and stand out from the crowd"
        labels={['Illustrator','InDesign','Figma']}
        img={resumesImg}
        color={{primary: colors.blue, secondary: colors.blueLight}}
      />
    </Grid>
  )
}

export default Projects