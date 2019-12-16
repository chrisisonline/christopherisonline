import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Grid, Typography } from '@material-ui/core'
//components & theme
import { colors } from '../theme' 

const useStyles = makeStyles(theme => ({
  root: {
    minHeight: '13vw',
    marginLeft: theme.spacing(6),
  },
  years: {
    color: colors.text15,
    marginBottom: -theme.spacing(2),
  },
  dateBox: {
    backgroundColor: colors.textLight,
  },
  date: {
    color: 'white',
    fontSize: '1.85em',
    textAlign: 'center',
  },
  textContainer: {
    padding: theme.spacing(2, 0, 2, 6),
    flexGrow: 1,
  },
  subtitle: {
    marginTop: -theme.spacing(1),
  },
}))

export const YearContainer = ({year}:{year: string}) => {
  const classes = useStyles()

  return (
    <Grid item>
      <Typography className={classes.years} variant="h2">
        { year }
      </Typography>
    </Grid>
  )
}

const ExpContainer = ({
  company,
  jobTitle,
  description,
  startDate,
  endDate,
}:{
  company: string,
  jobTitle: string,
  description: any,
  startDate: string,
  endDate: string,
}) => {
  const classes = useStyles()
  const asA = ( 'aeioAEIO'.includes(jobTitle.charAt(0)) ? 'as an ' : 'as a ' )

  return (
    <Grid className={classes.root} item container wrap="nowrap">
      <Grid className={classes.dateBox} item container alignContent="center" justify="center" xs={3}>
        <Typography className={classes.date} variant="h2">
          {startDate} <br/> - <br/> {endDate}
        </Typography>
      </Grid>
      <Grid className={classes.textContainer} item container justify="center" direction="column">
        <Typography variant="h2">
          { company }
        </Typography>
        <Typography className={classes.subtitle} variant="subtitle1">
          {asA + jobTitle}
        </Typography>
        <Typography variant="body1">
          { description }
        </Typography>
      </Grid>
    </Grid>
  )
}

export default ExpContainer