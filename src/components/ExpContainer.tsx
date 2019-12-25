import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Grid, Typography } from '@material-ui/core'
//components & theme
import { colors, IColor } from '../theme' 

const useStyles = makeStyles(theme => ({
  root: {
    minHeight: 'auto',
    [theme.breakpoints.down(425)]: {
      fontSize: '0.38rem',
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: '0.58rem',
      minHeight: '13vw',
      marginLeft: theme.spacing(6),
    }
  },
  years: {
    color: (customColors: IColor | undefined) => (
      customColors ? customColors.secondary : colors.text15
    ),
    marginBottom: -theme.spacing(2),
  } as any,
  dateBox: {
    backgroundColor: (customColors: IColor | undefined) => (
      customColors ? customColors.secondary : colors.textLight
    ),
    [theme.breakpoints.down(425)]: {
      flexBasis: '30%',
      maxWidth: '30%',
    }
  } as any,
  date: {
    color: colors.white90,
    fontSize: '2.4em',
    textAlign: 'center',
    [theme.breakpoints.up('sm')]: {
      fontSize: '1.85em',
    }
  },
  textContainer: {
    padding: theme.spacing(1.5, 0, 1.5, 2),
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(2, 0, 2, 6),
    }
  },
  title: {
    color: (customColors: IColor | undefined) => (
      customColors ? customColors.primary : colors.text
    ),
    whiteSpace: 'normal',
    [theme.breakpoints.up('sm')]: {
      whiteSpace: 'pre-line',
    }
  } as any,
  subtitle: {
    color: (customColors: IColor | undefined) => (
      customColors ? customColors.secondary : colors.text15
    ),
    marginTop: theme.spacing(0.5),
    marginBottom: theme.spacing(1),
    whiteSpace: 'normal',
    lineHeight: 1,
    [theme.breakpoints.up('sm')]: {
      whiteSpace: 'pre-line',
    }
  } as any,
  description: {
    [theme.breakpoints.down(425)]: {
      whiteSpace: 'normal',
      fontSize: '1.8em',
    }
  }
}))

export const YearContainer = ({
  year,
  customColors,
}:{
  year: string,
  customColors?: IColor,
}) => {
  const classes = useStyles(customColors)

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
  customColors,
}:{
  company: string,
  jobTitle: string,
  description: any,
  startDate: string,
  endDate: string,
  customColors?: IColor,
}) => {
  const classes = useStyles(customColors)
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
        <Typography className={classes.description} variant="body1">
          { description }
        </Typography>
      </Grid>
    </Grid>
  )
}

export default ExpContainer