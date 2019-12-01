import React from 'react'
import { makeStyles, ThemeProvider } from '@material-ui/core/styles'
import { Grid, Typography } from '@material-ui/core'
import Image from 'material-ui-image'
import { FlagSpinner } from 'react-spinners-kit' 
import NavBar from './components/NavBar'
import BgImage from './components/BgImage'
import TextContainer from './components/TextContainer'

import { myTheme, colors, styleVars } from './theme'
import longboardImg from './imgs/longboard.png'
import laptopImg from './imgs/laptop.png'
import designImg from './imgs/design.png'

const useStyles = makeStyles(theme => ({
  loading: {
    position: 'absolute',
    backgroundColor: 'white',
    top: 0,
    left: 0,
    right: 0,
    height: '100%',
    transition: '0.6s',
    opacity: (loading: any) => loading || 0,
    zIndex: (loading: any) => loading ? 9999 : -9999,
  },
  root: {
    fontSize: '0.75rem',
  },
  body: {
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

const App = () => {
  const [loading, setLoading] = React.useState(true)
  const classes = useStyles(loading)
  setTimeout(() => setLoading(false), 3000)

  return (
    <ThemeProvider theme={myTheme}>
      <Grid className={classes.loading} container justify="center" alignItems="center">
        <FlagSpinner size={80} color={colors.text30} />
      </Grid>
      <Grid className={classes.root} container>
        <NavBar />
        <Grid className={classes.body} container item xs={9}>
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
        </Grid>
      </Grid>
      
    </ThemeProvider>
  )
}

export default App
