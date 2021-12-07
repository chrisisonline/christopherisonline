import React, { useState } from 'react'
import { Link } from "react-router-dom"
import { makeStyles } from '@material-ui/core/styles'
import { Grid, IconButton } from '@material-ui/core'
import { MenuRounded } from '@material-ui/icons'
//components
import Image from 'material-ui-image'
import { SwipeableDrawer, List, ListItem, ListItemText, Divider } from '@material-ui/core'
import { NavLink } from './NavBar'
import { colors } from '../theme'
import cjLogo from '../imgs/cjlogo.png'

const useStyles = makeStyles(theme => ({
  root: {
    width: '65vw',
    fontSize: '0.65rem',
    [theme.breakpoints.only('xs')]: {
      width: '30vw',
    }
  },
  listContainer: {
    width: '80%',
    paddingTop: theme.spacing(4),
  },
  divider: {
    margin: theme.spacing(4, 0, 2)
  },
}))

const SideBarMobile = ({ navLinks }:{ navLinks: Array<NavLink> }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const classes = useStyles()

  const toggleDrawer = (open: boolean) => (
    event: React.KeyboardEvent | React.MouseEvent,
  ) => {
    if (
      event &&
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return
    }

    setIsOpen(open)
  }
  
  return (
    <>
      <IconButton onClick={() => setIsOpen(true)} aria-label="open drawer">
        <MenuRounded style={{color: colors.textLight, fontSize: 28}} />
      </IconButton>
      <SwipeableDrawer
        anchor="right"
        open={isOpen}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
      >
        <Grid
          className={classes.root}
          justify="center"
          container
        >
          <List className={classes.listContainer}>
            <Image
              style={{alignSelf: 'flex-start', paddingTop: 0, height: '18vw', width: '50%'}}
              imageStyle={{objectFit: 'contain'}}
              src={cjLogo}
            />
            <Divider className={classes.divider} />
            {
              navLinks.map((navLink, index) => (
                <Link to={navLink.link} onClick={toggleDrawer(false)}>
                  <ListItem button key={navLink.text + '-' + index}>
                      <ListItemText primary={navLink.text} />
                  </ListItem>
                </Link>
              ))
            }
          </List>
        </Grid>
      </SwipeableDrawer>
    </>
  )
}

export default SideBarMobile