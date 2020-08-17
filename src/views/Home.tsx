import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Grid, Typography } from '@material-ui/core'
//components & theme
import { rootStyles } from '../theme'
import BgImage from '../components/BgImage'
import TextContainer, { StatContainer } from '../components/TextContainer'
//img assets
import longboardImg from '../imgs/longboard.png'
import laptopImg from '../imgs/laptop.png'
import designImg from '../imgs/design.png'
import SkillTags from '../components/SkillTags'

const useStyles = makeStyles(theme => ({
  root: rootStyles,
}))

const Home = () => {
  const classes = useStyles()

  return (
    <Grid className={classes.root} container item xs={12} sm={9}>
      <BgImage src={longboardImg} isLanding imgPositioning="40% 50%"/>
      <TextContainer
        title="TL;DR"
        subTitle="In case you're in a hurry"
      >
        <Typography variant="body1">
          I’m a self-taught <b>UI/UX Designer</b> & <b>Front-End Developer</b>. Curiosity has driven me become a jack-of-all trades with experience as a <b>Product Manager</b>, <b>IT Support</b>, <b>Music Instructor</b>, and <b>Lifeguard</b>.
        </Typography>
      </TextContainer>
      <TextContainer
        title="Front-end Dev"
        subTitle="Responsive, Fast, & Modern"
        right
        bgImg={<BgImage src={laptopImg} right imgPositioning="5% 20%"/>}
      >
        <Typography variant="body1">
          I've had experience working with various team settings both big and small. I've delivered projects at many different levels and have always adapted to changing technologies.
        </Typography>
        <SkillTags labels={[
          'HTML5','CSS3','JavaScript','React','Redux','Node',
          'MaterialUI','Gulp','Docker','Git',
        ]} right/>
      </TextContainer>
      <TextContainer
        title="UI&UX Design"
        subTitle="Simple, Clean, & Functional"
        bgImg={<BgImage src={designImg} imgPositioning="15% 50%"/>}
      >
        <Typography variant="body1">
          I've created prototypes, wireframes, user stories, and sitemaps working both independantly and collaborating with a team. I'm no stranger to designing intuitive and elegant solutions to all types of problems
        </Typography>
        <SkillTags labels={[
          'Figma','Sketch','Illustrator','InDesign','InVision',
          'Photoshop','Adobe XD','MS Paint'
        ]}/>
      </TextContainer>
      <StatContainer
        title="Chris's Overview"
        stats={[
          {number: '07', description: 'Coops & Internships'},
          {number: '04', description: 'Personal Projects'},
          {number: '03', description: 'Years of Work Exp'},
          {number: '2+', description: 'Coffees a Day'},
        ]}
      />
    </Grid>
  )
}

export default Home
