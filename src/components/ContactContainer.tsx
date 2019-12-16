import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { useTheme, Grid, Typography } from '@material-ui/core'
import Image from 'material-ui-image'

const useStyles = makeStyles(theme => ({
  root: {
    position: 'relative',
    marginLeft: theme.spacing(8),
  },
  title: {
    marginTop: theme.spacing(10),
  },
  description: {
    marginTop: -theme.spacing(1.5),
  },
}))

const ContactContainer = ({
  title,
  description,
  imgSrc,
}:{
  title: string,
  description: string,
  imgSrc: string,
}) => {
  const classes = useStyles()
  const theme = useTheme()

  return (
    <Grid className={classes.root} item container direction="column">
      <Image
        color="transparent"
        style={{
          position: 'absolute',
          top: 0,
          left: -theme.spacing(8),
          bottom: 0,
          padding: 0,
          width: '22%',
          zIndex: -1,
        }}
        imageStyle={{objectFit: 'contain'}}
        src={imgSrc}
      />
      <Typography className={classes.title} variant="h2">
        { title }
      </Typography>
      <Typography className={classes.description} variant="subtitle1">
        { description }
      </Typography>
    </Grid>
  )
}

export default ContactContainer