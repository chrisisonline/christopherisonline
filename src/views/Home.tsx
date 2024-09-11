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
          I’m a <b>UI/UX Designer</b> & <b>Front-End Developer</b> with several years of experience working with companies of all types. Adaptability is my strong suit as I have also had experience as a <b>Product Manager</b>, <b>Project Lead</b>, and <b>Market Researcher</b>.
        </Typography>
      </TextContainer>
      <TextContainer
        title="Front-end Dev"
        subTitle="Responsive, Fast, & Modern"
        right
        bgImg={<BgImage src={laptopImg} right imgPositioning="5% 20%"/>}
      >
        <Typography variant="body1">
          I've had experience working with various teams and projects   both big and small, and through it have learned to deliver projects at different levels to match their needs. Whether it's a MVP or a production ready feature, I quickly adapt to different environments and technologies
        </Typography>
        <SkillTags labels={[
          'React','VueJS','Gatsby','MaterialUI','TailwindCSS','Redux','TypeScript','NodeJS','Git','HTML','CSS','JavaScript','Wordpress'
        ]} right/>
      </TextContainer>
      <TextContainer
        title="UI&UX Design"
        subTitle="Simple, Clean, & Functional"
        bgImg={<BgImage src={designImg} imgPositioning="15% 50%"/>}
      >
        <Typography variant="body1">
          I've created prototypes, wireframes, user stories, and sitemaps working both independently and collaborating with a team. I'm no stranger to designing intuitive and elegant solutions to all types of problems.
        </Typography>
        <SkillTags labels={[
          'Figma','Sketch','Illustrator','Mockups','Wireframing','InDesign','InVision',
          'Photoshop','Adobe XD','MS Paint :)'
        ]}/>
      </TextContainer>
      <StatContainer
        title="Chris's Overview"
        stats={[
          {number: '09', description: 'Technical Roles'},
          {number: '07', description: 'Personal Projects'},
          {number: '07', description: 'Years of Experience'},
          {number: '03', description: 'Coffees a Day'},
        ]}
      />
    </Grid>
  )
}

export default Home
