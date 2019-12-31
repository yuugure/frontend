import React, { useCallback, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'

import { addTodo } from '../store/action'

import AddButton from './AddButton'
import TodoTextField from './TodoTextField'

const useStyles = makeStyles(theme => ({
  root: {
    position: 'fixed',
    bottom: 0,
    width: '100%',
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    whiteSpace: 'nowrap',
    marginBottom: theme.spacing(1),
  },
  text: {
    backgroundColor: theme.palette.background.paper,
  },
}))

const Todo = () => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const [value, setValue] = useState(null)

  const AddTodo = useCallback(
    e => {
      console.log('test')
      console.log(value)
      dispatch(addTodo(value))
    },
    [value]
  )

  const onChange = useCallback(
    e => {
      console.log(e.target.value)
      setValue(e.target.value)
    },
    [value]
  )

  return (
    <Paper className={classes.root}>
      <Grid container>
        <Grid item xs={10}>
          <TodoTextField type="text" name="value" onChange={onChange} className={classes.text} />
        </Grid>
        <Grid item xs={2}>
          <AddButton onClick={AddTodo} />
        </Grid>
      </Grid>
    </Paper>
  )
}

export default Todo
