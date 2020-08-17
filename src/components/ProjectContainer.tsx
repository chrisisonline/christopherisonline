import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Grid, Typography } from '@material-ui/core'
import Image from 'material-ui-image'
//components & theme
import { IColor, colors } from '../theme'
import SkillTags from './SkillTags'
//redux
import { useSelector } from 'react-redux'
import { BrowserSize } from '../redux/actions'

const useStyles = makeStyles(theme => ({
  root: {
    height: '130vw',
    margin: theme.spacing(6, 0, 0),
    [theme.breakpoints.up('sm')]: {
      height: '28vw',
      margin: theme.spacing(6, 0),
    }
  },
  grow: {
    flexGrow: 1,
  },
  imgContainer: {
    position: 'relative',
    height: '70vw',
    [theme.breakpoints.up('sm')]: {
      height: 'initial',
    },
  },
  bgBox: (props: any) => ({
    backgroundColor: props.color.primary,
    position: 'absolute',
    top: 16,
    left: props.right ? 32 : 16,
    right: props.right ? 16 : 32,
    bottom: 16,
  }) as any,
  textContainer: (props: any) => (
    props.right ? {
      textAlign: 'right',
      paddingLeft: 0,
      [theme.breakpoints.up('sm')]: {
        paddingLeft: theme.spacing(9),
        paddingRight: theme.spacing(3),
      }
    } : {
      paddingRight: 0,
      [theme.breakpoints.up('sm')]: {
        paddingLeft: theme.spacing(3),
        paddingRight: theme.spacing(9),
      }
    }) as any,
  textContainerMobile: {
    padding: theme.spacing(0, 2),
  },
  title: {
    color: (props: any) => props.color.primary as any,
  },
  subtitle: {
    color: (props: any) => props.color.secondary as any,
    marginTop: -theme.spacing(1),
  },
  link: {
    color: (props: any) => props.color.secondary as any,
    paddingTop: 6,
  }
}))
const imgStyles = (right? : boolean) => ({
  position: 'absolute',
  top: -16,
  left: right ? 0 : -16,
  right: right ? -16 : 0,
  bottom: -16,
  paddingTop: 0,
})
const imgStylesMobile = {
  position: 'absolute',
  top: -8,
  left: -8,
  right: -8,
  bottom: -8,
  paddingTop: 0,
}

interface ILink {
  text: string
  url: string
}

const ProjectContainer = ({
  title,
  subTitle,
  body,
  labels,
  img,
  color = {primary: colors.text, secondary: colors.textLight},
  right = false,
  links,
}:{
  title: string,
  subTitle: string,
  body: string,
  labels: Array<string>,
  img: string,
  color?: IColor,
  right?: boolean,
  links?: Array<ILink>,
}) => {
  const props = {right, color}
  const classes = useStyles(props)
  const browserSize = useSelector(
    (state: any) => state.browserSize as BrowserSize
  )
  const isMobile = browserSize === "sm" || browserSize === "xs"

  const ProjectImg = () => (
    <Grid className={classes.imgContainer} container item xs={12} sm={6}>
      <Grid className={classes.bgBox} item></Grid>
      <Image
        color="transparent"
        style={isMobile ? imgStylesMobile : imgStyles(right)}
        imageStyle={{objectFit: 'contain'}}
        src={img}
      />
    </Grid>
  )
  const ProjectDetails = () => (
    <Grid
      className={isMobile ? classes.textContainerMobile : classes.textContainer}
      container
      item
      direction="column" 
      alignItems={isMobile ? 'flex-start' : (right ? 'flex-end' : 'flex-start')}
      justify="center"
      xs={12}
      sm={6}
    >
      <Typography className={classes.title} variant="h2">
        { title }
      </Typography>
      <Typography className={classes.subtitle} variant="subtitle1">
        { subTitle }
      </Typography>
      <Typography variant="body1">
        { body }
      </Typography>
      {
        links ?
        <Typography className={classes.link} variant="body1">{
          links.map((link: ILink, index: number) => (
              <a href={link.url} key={link.text + index}>
                { (index !== 0 ? "\xa0\xa0|\xa0\xa0" : "") + link.text}
              </a>
          ))
        }</Typography> :
        null
      }
      <SkillTags labels={labels} bgColor={color.primary} right={isMobile ? false : right}/>
    </Grid>
  )

  return (
    <Grid className={classes.root} container item>
    {
      isMobile || !right ?
      <>
        <ProjectImg />
        <ProjectDetails />
      </> : 
      <>
        <ProjectDetails />
        <ProjectImg />
      </>
    }
    </Grid>
  )
}

export default ProjectContainer