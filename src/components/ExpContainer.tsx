import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Grid, Typography } from '@material-ui/core'
//components & theme
import { colors } from '../theme' 

const useStyles = makeStyles(theme => ({
  root: {
    minHeight: 'auto',
    [theme.breakpoints.up('sm')]: {
      minHeight: '13vw',
      marginLeft: theme.spacing(6),
    }
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
    fontSize: '1.4em',
    textAlign: 'center',
    [theme.breakpoints.up('sm')]: {
      fontSize: '1.85em',
    }
  },
  textContainer: {
    flexGrow: 0,
    padding: theme.spacing(1.5, 0, 1.5, 2),
    [theme.breakpoints.up('sm')]: {
      flexGrow: 1,
      padding: theme.spacing(2, 0, 2, 6),
    }
  },
  title: {
    fontSize: '3.6em',
    whiteSpace: 'normal',
    [theme.breakpoints.up('sm')]: {
      fontSize: '5.25em',
      whiteSpace: 'pre-line',
    }
  },
  subtitle: {
    fontSize: '2.4em',
    marginTop: theme.spacing(0.5),
    marginBottom: theme.spacing(1.5),
    whiteSpace: 'normal',
    lineHeight: 1,
    [theme.breakpoints.up('sm')]: {
      fontSize: '3.25em',
      whiteSpace: 'pre-line',
    }
  },
  description: {
    whiteSpace: 'normal',
    [theme.breakpoints.up('sm')]: {
      whiteSpace: 'pre-line',
    }
  }
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
    <Grid className={classes.root} item container wrap="nowrap" xs={12}>
      <Grid className={classes.dateBox} item container alignContent="center" justify="center" xs={3}>
        <Typography className={classes.date} variant="h2">
          {startDate} <br/> - <br/> {endDate}
        </Typography>
      </Grid>
      <Grid className={classes.textContainer} item container justify="center" direction="column">
        <Typography className={classes.title} variant="h2">
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