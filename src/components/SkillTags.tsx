import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Grid, Chip } from '@material-ui/core'
import { colors } from '../theme'

const useStyles = makeStyles(theme => ({
  root: {
    float: (right: boolean) => right && 'right',
    paddingTop: theme.spacing(2),
    width: '80%',
  } as any,
  tag: {
    color: 'white',
    backgroundColor: colors.text,
    borderRadius: 8,
  },
}))

const SkillTags = ({
  labels,
  right = false,
}: {
  labels: Array<string>,
  right?: boolean,
}) => {
  const classes = useStyles(right)

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
