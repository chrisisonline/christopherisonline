import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Grid } from '@material-ui/core'
//components & theme
import { rootStyles } from '../theme' 
import ExpContainer, {YearContainer} from '../components/ExpContainer'

const useStyles = makeStyles(({
  root: rootStyles,
}))

const Experience = () => {
  const classes = useStyles()

  return (
    <Grid className={classes.root} container item direction="column"  sm={8} md={7} lg={6} spacing={4}>
      <YearContainer year="2019" />
      <ExpContainer
        company="SpankChain"
        jobTitle="Front-End Developer"
        description={`Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Integer aliquet egestas aliquet sit lorem velit pellentesque rhoncus eros.
        Lacus in quis enim, varius neque in.`}
        startDate="MAY"
        endDate="NOW"
      />
      <ExpContainer
        company="LCBO Next"
        jobTitle="UI &UX Developer"
        description={`Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Integer aliquet egestas aliquet sit lorem velit pellentesque rhoncus eros.
        Lacus in quis enim, varius neque in.`}
        startDate="JAN"
        endDate="APR"
      />
      <YearContainer year="2018" />
      <ExpContainer
        company="Upverter"
        jobTitle="UI&UX Developer"
        description={`Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Integer aliquet egestas aliquet sit lorem velit pellentesque rhoncus eros.
        Lacus in quis enim, varius neque in.`}
        startDate="MAY"
        endDate="AUG"
      />
      <YearContainer year="2016" />
      <ExpContainer
        company="American Express"
        jobTitle="Innovation Lab Jr Engineer"
        description={`Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Integer aliquet egestas aliquet sit lorem velit pellentesque rhoncus eros.
        Lacus in quis enim, varius neque in.`}
        startDate="MAY"
        endDate="AUG"
      />
      <YearContainer year="2015" />
      <ExpContainer
        company="OpenText"
        jobTitle="R&D Support Specialist"
        description={`Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Integer aliquet egestas aliquet sit lorem velit pellentesque rhoncus eros.
        Lacus in quis enim, varius neque in.`}
        startDate="SEP"
        endDate="DEC"
      />
      <ExpContainer
        company="Manulife"
        jobTitle="Technical Analyst"
        description={`Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Integer aliquet egestas aliquet sit lorem velit pellentesque rhoncus eros.
        Lacus in quis enim, varius neque in.`}
        startDate="JAN"
        endDate="APR"
      />
      <YearContainer year="2014" />
      <ExpContainer
        company="Academy of Music"
        jobTitle="Piano Instructor"
        description={`Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Integer aliquet egestas aliquet sit lorem velit pellentesque rhoncus eros.
        Lacus in quis enim, varius neque in.`}
        startDate="SEP/12"
        endDate="MAY/14"
      />
      <ExpContainer
        company="City of Saskatoon"
        jobTitle="Lifeguard & Instructor"
        description={`Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Integer aliquet egestas aliquet sit lorem velit pellentesque rhoncus eros.
        Lacus in quis enim, varius neque in.`}
        startDate="FEB/13"
        endDate="MAR/14"
      />
    </Grid>
  )
}

export default Experience