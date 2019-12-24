import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Grid, Typography } from '@material-ui/core'
import { styleVars, colors } from '../theme'

const useStyles = makeStyles(theme => ({
  root: {
    height: styleVars.contentContainer,
    position: 'relative',
  },
  textContainer: {
    backgroundColor: colors.white90,
    textAlign: (right: any) => right && 'right',
    padding: '5vw 7vw', 
    width: '75%',
    [theme.breakpoints.down('sm')]: {
      width: '90%',
    }
  } as any,
  subtitle: {
    marginTop: -theme.spacing(1),
  },
  statRoot: {
    paddingTop: theme.spacing(18),
  },
  statTitle: {
    paddingBottom: theme.spacing(6),
  },
  statContainer: {
    position: 'relative',
    marginBottom: theme.spacing(2),
  },
  statNumber: {
    color: colors.text15,
    fontSize: '10em',
    padding: theme.spacing(0, 7),
  },
  statDescription: {
    position: 'absolute',
    left: theme.spacing(13),
    bottom: -theme.spacing(1.5),
    fontSize: '2.74em',
  },
  
}))

interface IStatObj {
  number: string,
  description: string,
}

export const StatContainer = ({
  title,
  stats,
}:{
  title: string,
  stats: Array<IStatObj>,
}) => {
  const classes = useStyles()
  return(
    <Grid
      className={classes.statRoot}
      container
      item
      alignContent="center"
      justify="center"
    >
      <Grid className={classes.statTitle} item xs={10}>
        <Typography variant="h2">
          { title }
        </Typography>
      </Grid>
      {
        stats.map((item: IStatObj, index) => (
          <Grid className={classes.statContainer} container item xs={5} key={`${item.description} ${index}`}>
            <Typography className={classes.statNumber} variant="h2">
              { item.number }
            </Typography>
            <Typography className={classes.statDescription} variant="subtitle1">
              { item.description }
            </Typography>
          </Grid>
        ))
      }
    </Grid>
  )
}

const TextContainer = ({
  title,
  subTitle,
  children,
  right = false,
  bgImg = null,
}: {
  title: string,
  subTitle: string,
  children: any,
  right?: boolean,
  bgImg?: any,
}) => {
  const classes = useStyles(right)

  return (
    <Grid className={classes.root} container item justify="center" alignContent="center">
      { bgImg }
      <Grid className={classes.textContainer} item>
        <Typography variant="h2">
          { title }
        </Typography>
        <Typography className={classes.subtitle} variant="subtitle1">
          { subTitle }
        </Typography>
        { children }
      </Grid>
    </Grid>
  )
}

export default TextContainer
