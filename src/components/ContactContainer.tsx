import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Grid, Typography } from '@material-ui/core'
//components
import Image from 'material-ui-image'
//redux
import { useSelector } from 'react-redux'
import { BrowserSize } from '../redux/actions'

const useStyles = makeStyles(theme => ({
  root: {
    position: 'relative',
    marginTop: theme.spacing(3),
    marginLeft: '2vw',
    [theme.breakpoints.down(425)]: {
      fontSize: '0.38rem',
    },
    [theme.breakpoints.down(345)]: {
      fontSize: '0.34rem',
    },
  },
  title: {
    marginTop: '4vw',
  },
  description: {
    lineHeight: 1,
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
  const browserSize = useSelector(
    (state: any) => state.browserSize as BrowserSize
  )
  const isMobile = browserSize === "sm" || browserSize === "xs"

  return (
    <Grid className={classes.root} item container direction="column">
      <Image
        color="transparent"
        style={{
          position: 'absolute',
          top: '-2vw',
          left: '-3.5vw',
          bottom: 0,
          padding: 0,
          width: isMobile ? '33%' : '22%',
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