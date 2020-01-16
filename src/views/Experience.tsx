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
    <Grid className={classes.root} container item direction="column"  xs={12} sm={8} md={7} lg={6} spacing={4}>
      <YearContainer year="2019" />
      <ExpContainer
        company="SpankChain"
        jobTitle="Front-End Developer"
        description={`Building front-end infrastructure using React and Material UI
        Coordinating with the design and engineering leads to create flexible components
        Created a style guide documentation using Storybook`}
        startDate="MAY"
        endDate="NOW"
      />
      <ExpContainer
        company="LCBO Next"
        jobTitle="UI &UX Developer"
        description={`Designed and developed mobile and responsive web applications using React and Sketch
        Used an Agile workflow to complete multiple prototypes and products
        Lead stand-ups, outlined project requirements, and scheduled deliverables`}
        startDate="JAN"
        endDate="APR"
      />
      <YearContainer year="2018" />
      <ExpContainer
        company="Upverter"
        jobTitle="UI&UX Developer"
        description={`Overhauled and documented changes for the Upverter UI
        Front-End updates using Google Closure, Sass, and Flask
        Tested and pushed changes into production`}
        startDate="MAY"
        endDate="AUG"
      />
      <YearContainer year="2016" />
      <ExpContainer
        company="American Express"
        jobTitle="Innovation Lab Jr Engineer"
        description={`Designing and wireframing prototypes to solve inhouse business problems
        Pitching business proposals and ideas multiple division leaders
        Deploying front-end applications in to production with ePaas`}
        startDate="MAY"
        endDate="AUG"
      />
      <YearContainer year="2015" />
      <ExpContainer
        company="OpenText"
        jobTitle="R&D Support Specialist"
        description={`Supporting R&D teams by tracking issues, testing features, and writing documentation
        Connecting multiple teams to solve problems via JIRA and Confluence`}
        startDate="SEP"
        endDate="DEC"
      />
      <ExpContainer
        company="Manulife"
        jobTitle="Technical Analyst"
        description={`Managing team resources, data, and projects using Excel and Sharepoint
        Assisting departments by upgrading to new infrastructure and equipment`}
        startDate="JAN"
        endDate="APR"
      />
      <YearContainer year="2014" />
      <ExpContainer
        company="Academy of Music"
        jobTitle="Piano Instructor"
        description={`Teaching students of various ages (5-21) music theory and keyboard techniques
        Organizing and scheduling lesson plans for every student`}
        startDate="SEP/12"
        endDate="MAY/14"
      />
      <ExpContainer
        company="City of Saskatoon"
        jobTitle="Lifeguard & Instructor"
        description={`Held multiple certifications from Redcross for CPR, First Aid, NLS, and WSL
        Maintained
        Maintaining the facility, performing opening and closing duties, and ensuring the safety of patrons`}
        startDate="FEB/13"
        endDate="MAR/14"
      />
    </Grid>
  )
}

export default Experience