import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Grid, Typography } from '@material-ui/core'
//components & theme
import { styleVars } from '../theme'
import BgImage from '../components/BgImage'
import TextContainer, { StatContainer } from '../components/TextContainer'
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
  contentContainer: {
    height: styleVars.contentContainer,
  },
  textContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    width: '75%',
    padding: theme.spacing(6, 9),
  },
  subtitle: {
    marginTop: '-0.35em',
  },
}))

const Home = () => {
  const classes = useStyles()

  return (
    <Grid className={classes.root} container item xs={9}>
      <BgImage src={longboardImg} isLanding imgPositioning="40% 50%"/>
      <TextContainer
        title="TL;DR"
        subTitle="In case you're in a hurry"
      >
        <Typography variant="body1">
          I’m a self-taught <b>UI/UX Designer</b> & <b>Front-End Developer</b>. Curiosity has driven me become a jack-of-all traits with experience as a <b>Product Manager</b>, <b>Product Designer</b>, <b>Music Instructor</b>, <b>Lifeguard</b>, and <b>Sub-Par Longboarder</b>.
        </Typography>
      </TextContainer>
      <TextContainer
        title="Front-end Dev"
        subTitle="Responsive & Clean Designs"
        right
        bgImg={<BgImage src={laptopImg} right imgPositioning="5% 20%"/>}
      >
        <Typography variant="body1">
          I've had experience working with various team settings both big and small. I've delivered projects at many different levels and have always adapted to changing technologies.
        </Typography>
        <SkillTags labels={[
          'HTML5','CSS3','JavaScript','React.js','Redux','Node.js',
          'Git','Yarn','MaterialUI','Grunt','Gulp','Webpack','Docker',
        ]} right/>
      </TextContainer>
      <TextContainer
        title="UI&UX Design"
        subTitle="Functional & Aesthetic Graphics"
        bgImg={<BgImage src={designImg} imgPositioning="15% 50%"/>}
      >
        <Typography variant="body1">
          I've had experience working with various team settings both big and small. I've delivered projects at many different levels and have always adapted to changing technologies.
        </Typography>
        <SkillTags labels={[
          'Figma','Sketch','Illustrator','InDesign','InVision',
          'Photoshop','Adobe XD','MS Paint'
        ]}/>
      </TextContainer>
      <StatContainer
        title="Chris's Overview"
        stats={[
          {number: '06', description: 'Coop Internships'},
          {number: '04', description: 'On-going Projects'},
          {number: '03', description: 'Years of Job Exp'},
          {number: '23', description: 'Years Alive on Earth'},
        ]}
      />
    </Grid>
  )
}

export default Home
