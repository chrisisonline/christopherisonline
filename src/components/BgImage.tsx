import React from 'react'
import classnames from 'classnames'
import { makeStyles } from '@material-ui/core/styles'
import Image from 'material-ui-image'
import { styleVars } from '../theme'

const useStyles = makeStyles(theme => ({
  root: {
    position: 'absolute',
    top: 0,
    zIndex: -5,
    width: '80vw',
    [theme.breakpoints.up("sm")]:{
      width: '44vw',
    }
  },
  landing: {
    left: 0,
    height: styleVars.imgContainerMobile,
    [theme.breakpoints.up("sm")]:{
      left: '6vw',
      height: styleVars.imgContainer,
    }
  },
  left: {
    left: 0,
    height: '100%',
    [theme.breakpoints.up("sm")]:{
      left: '-6.5vw',
    }
  },
  right: {
    right: '-6.5vw',
    height: '100%',
  }
}))

const BgImage = ({
  src,
  isLanding = false,
  right = false,
  imgPositioning = '0 50%',
}:{
  src: string,
  isLanding?: boolean,
  right?: boolean,
  imgPositioning?: string,
}) => {
  const classes = useStyles()
  const containerStyles = isLanding ? classes.landing : (right ? classes.right : classes.left)

  return (
    <div className={classnames(classes.root, containerStyles)}>
      <Image
        style={{height: 'inherit', paddingTop: 0}}
        imageStyle={{objectFit: 'cover', objectPosition: imgPositioning}}
        src={src}
      />
    </div>
  )
}

export default BgImage
