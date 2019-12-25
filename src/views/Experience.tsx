import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Grid } from '@material-ui/core'
//components & theme
import { rootStyles, colors } from '../theme' 
import ExpContainer, {YearContainer} from '../components/ExpContainer'

const useStyles = makeStyles(({
  root: rootStyles,
}))

const Experience = () => {
  const classes = useStyles()
  const customColors = {
    blue: {
      primary: colors.blue,
      secondary: colors.blueLight,
    },
    yellow: {
      primary: colors.yellow,
      secondary: colors.yellowLight,
    },
    red: {
      primary: colors.red,
      secondary: colors.redLight,
    },
    green: {
      primary: colors.green,
      secondary: colors.greenLight,
    },
  }

  return (
    <Grid className={classes.root} container item direction="column"  xs={12} sm={8} md={7} lg={6} spacing={4}>
      <YearContainer year="2019" customColors={customColors.blue}/>
      <ExpContainer
        company="SpankChain"
        jobTitle="Front-End Developer"
        description={`Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Integer aliquet egestas aliquet sit lorem.
        Lacus in quis enim, varius neque in.`}
        startDate="MAY"
        endDate="NOW"
        customColors={customColors.blue}
      />
      <ExpContainer
        company="LCBO Next"
        jobTitle="UI &UX Developer"
        description={`Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Integer aliquet egestas aliquet sit lorem.
        Lacus in quis enim, varius neque in.`}
        startDate="JAN"
        endDate="APR"
        customColors={customColors.blue}
      />
      <YearContainer year="2018" customColors={customColors.yellow}/>
      <ExpContainer
        company="Upverter"
        jobTitle="UI&UX Developer"
        description={`Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Integer aliquet egestas aliquet sit lorem.
        Lacus in quis enim, varius neque in.`}
        startDate="MAY"
        endDate="AUG"
        customColors={customColors.yellow}
      />
      <YearContainer year="2016" customColors={customColors.red}/>
      <ExpContainer
        company="American Express"
        jobTitle="Innovation Lab Jr Engineer"
        description={`Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Integer aliquet egestas aliquet sit lorem.
        Lacus in quis enim, varius neque in.`}
        startDate="MAY"
        endDate="AUG"
        customColors={customColors.red}
      />
      <YearContainer year="2015" customColors={customColors.green}/>
      <ExpContainer
        company="OpenText"
        jobTitle="R&D Support Specialist"
        description={`Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Integer aliquet egestas aliquet sit lorem.
        Lacus in quis enim, varius neque in.`}
        startDate="SEP"
        endDate="DEC"
        customColors={customColors.green}
      />
      <ExpContainer
        company="Manulife"
        jobTitle="Technical Analyst"
        description={`Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Integer aliquet egestas aliquet sit lorem.
        Lacus in quis enim, varius neque in.`}
        startDate="JAN"
        endDate="APR"
        customColors={customColors.green}
      />
      <YearContainer year="2014" customColors={customColors.blue}/>
      <ExpContainer
        company="Academy of Music"
        jobTitle="Piano Instructor"
        description={`Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Integer aliquet egestas aliquet sit lorem.
        Lacus in quis enim, varius neque in.`}
        startDate="SEP/12"
        endDate="MAY/14"
        customColors={customColors.blue}
      />
      <ExpContainer
        company="City of Saskatoon"
        jobTitle="Lifeguard & Instructor"
        description={`Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Integer aliquet egestas aliquet sit lorem.
        Lacus in quis enim, varius neque in.`}
        startDate="FEB/13"
        endDate="MAR/14"
        customColors={customColors.blue}
      />
    </Grid>
  )
}

export default Experience