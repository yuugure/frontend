import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: 200,
    },
  },
}))

const TodoTextField = props => {
  const classes = useStyles()
  const { onChange } = props

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField id="standard-basic" label="何する？" onChange={onChange} />
    </form>
  )
}

export default TodoTextField
