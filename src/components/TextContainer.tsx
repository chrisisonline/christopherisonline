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
    backgroundColor: colors.white95,
    textAlign: (right: any) => right && 'right',
    padding: theme.spacing(6, 9), 
    width: '75%',
  } as any,
  subtitle: {
    marginTop: '-0.35em',
  },
}))

const TextContainer = ({
  title,
  subTitle,
  children,
  right = false,
  bgImg = null,
}: React.HTMLAttributes<HTMLElement> & {
  title: string,
  subTitle: string,
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
        <Typography variant="body1">
          { children }
        </Typography>
      </Grid>
    </Grid>
    )
}

export default TextContainer
