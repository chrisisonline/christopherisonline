import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Grid } from '@material-ui/core'
//components & theme
import { styleVars } from '../theme'
import BgImage from '../components/BgImage'
import TextContainer, { StatContainer } from '../components/TextContainer'
//img assets
import longboardImg from '../imgs/longboard.png'
import laptopImg from '../imgs/laptop.png'
import designImg from '../imgs/design.png'

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
        I’m a self-taught <b>UI/UX Designer</b> & <b>Front-End Developer</b>. Curiosity has driven me become a jack-of-all traits with experience as a <b>Product Manager</b>, <b>Product Designer</b>, <b>Music Instructor</b>, <b>Lifeguard</b>, and <b>Sub-Par Longboarder</b>.
      </TextContainer>
      <TextContainer
        title="Front-end Dev"
        subTitle="Responsive & Clean Designs"
        right
        bgImg={<BgImage src={laptopImg} right imgPositioning="5% 20%"/>}
      >
        Just like traversing a Mobius strip, there's no end in sight when learning new front end technologies! I started with the fundamentals and will continue to keep up with the industry standards
      </TextContainer>
      <TextContainer
        title="UI&UX Design"
        subTitle="Functional & Aesthetic Graphics"
        bgImg={<BgImage src={designImg} imgPositioning="15% 50%"/>}
      >
        Just like traversing a Mobius strip, there's no end in sight when learning new front end technologies! I started with the fundamentals and will continue to keep up with the industry standards
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
