import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Grid, Typography } from '@material-ui/core'
import { styleVars, colors } from '../theme'

const useStyles = makeStyles(theme => ({
  root: {
    height: styleVars.contentContainerMobile,
    position: 'relative',
    [theme.breakpoints.up("sm")]:{
      height: styleVars.contentContainer,
    }
  },
  textContainer: {
    backgroundColor: colors.white90,
    textAlign: (right: any) => right && 'right',
    padding: theme.spacing(4, 2),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      padding: '5vw 7vw',
      width: '75%',
    }
  } as any,
  title: {
    [theme.breakpoints.down(425)]: {
      fontSize: '4.4em',
    },
  },
  subtitle: {
    lineHeight: 1,
    margin: theme.spacing(0.5, 0, 1),
    [theme.breakpoints.down(425)]: {
      fontSize: '2.8em',
      whiteSpace: 'normal',
    },
  },
  statRoot: {
    padding: theme.spacing(9, 2),
    [theme.breakpoints.up("sm")]: {
      padding: theme.spacing(18, 0, 0),
    },
  },
  statTitle: {
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.up("sm")]: {
      paddingBottom: theme.spacing(9),
    }
  },
  statContainer: {
    position: 'relative',
    marginBottom: theme.spacing(2),
    paddingLeft: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      paddingLeft: 0,
    }
  },
  statNumber: {
    color: colors.text15,
    fontSize: '10em',
    [theme.breakpoints.up("sm")]: {
      padding: theme.spacing(0, 7),
    },
  },
  statDescription: {
    position: 'absolute',
    left: theme.spacing(4.5),
    bottom: -theme.spacing(3),
    fontSize: '2.74em',
    lineHeight: '1.2em',
    whiteSpace: 'normal',
    [theme.breakpoints.up("sm")]: {
      left: theme.spacing(13),
      bottom: -theme.spacing(1.5),
    },
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
      <Grid className={classes.statTitle} item xs={12} sm={10}>
        <Typography className={classes.title} variant="h2">
          { title }
        </Typography>
      </Grid>
      {
        stats.map((item: IStatObj, index) => (
          <Grid
            className={classes.statContainer}
            key={`${item.description} ${index}`}
            xs={6}
            sm={5}
            container
            item
          >
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
        <Typography className={classes.title} variant="h2">
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
