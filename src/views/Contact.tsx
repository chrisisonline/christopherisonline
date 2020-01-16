import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Grid } from '@material-ui/core'
//components & theme
import { rootStyles } from '../theme'
import ContactContainer from '../components/ContactContainer'
//img assets
import emailImg from '../imgs/email.png'
import linkedInImg from '../imgs/linkedin.png'
import gitHubImg from '../imgs/github.png'
import mediumImg from '../imgs/medium.png'

const useStyles = makeStyles(theme => ({
  root: {
    ...rootStyles,
    marginTop: 0,
  },
}))

const Contact = () => {
  const classes = useStyles()

  return (
    <Grid className={classes.root} container item direction="column" xs={11} sm={7} lg={6} spacing={4}>
      <ContactContainer
        title="Email"
        description="christopherjiang@outlook.com"
        imgSrc={emailImg}
      />
      <ContactContainer
        title="LinkedIn"
        description="linkedin.com/in/christopherjiang"
        imgSrc={linkedInImg}
      />
      <ContactContainer
        title="GitHub"
        description="github.com/chrisisonline"
        imgSrc={gitHubImg}
      />
      <ContactContainer
        title="Medium"
        description="medium.com/@cj.design"
        imgSrc={mediumImg}
      />
    </Grid>
  )
}

export default Contact