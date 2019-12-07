import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Grid, Chip } from '@material-ui/core'
import { colors } from '../theme'

const useStyles = makeStyles(theme => ({
  root: {
    float: (props: any) => props.right && 'right' as any,
    paddingTop: theme.spacing(2),
    width: '80%',
  },
  tag: {
    backgroundColor: (props: any) => props.bgColor as any,
  }
}))

const SkillTags = ({
  labels,
  right = false,
  bgColor = colors.text,
}:{
  labels: Array<string>,
  right?: boolean,
  bgColor?: string,
}) => {
  const props = {right, bgColor}
  const classes = useStyles(props)

  return (
    <Grid 
      className={classes.root}
      container
      item
      justify={right ? 'flex-end': undefined}
      spacing={1}
    >
      {
        labels.map((label, index) => (
          <Grid item key={`${label}-${index}`}>
            <Chip className={classes.tag} label={label}/>
          </Grid>
        ))
      }
    </Grid>
  )
}

export default SkillTags
