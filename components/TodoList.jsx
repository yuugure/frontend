import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { makeStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Divider from '@material-ui/core/Divider'
import InboxIcon from '@material-ui/icons/Inbox'
import DraftsIcon from '@material-ui/icons/Drafts'

// import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline'
import { green } from '@material-ui/core/colors'
import CheckCircleIcon from '@material-ui/icons/CheckCircle'

import { toggleTodo } from '../store/action'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}))

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />
}

const TodoList = () => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const todos = useSelector(state => state.todos)

  /*
  const AddTodo = useCallback(
    e => {
      console.log('test')
      console.log(value)
    },
    [value]
  )
  console.log(todos)
  */

  return (
    <List className={classes.root}>
      {todos.map(todo => {
        return (
          <ListItem
            key={todo.id}
            button
            style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
          >
            <ListItemIcon>
              <CheckCircleIcon color={todo.completed ? 'primary' : 'action'} />
            </ListItemIcon>
            <ListItemText
              primary={todo.text}
              onClick={() => {
                dispatch(toggleTodo(todo.id))
              }}
            />
          </ListItem>
        )
      })}
    </List>
  )
}

export default TodoList
