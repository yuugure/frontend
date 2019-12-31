import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Fab from '@material-ui/core/Fab'
import AddIcon from '@material-ui/icons/Add'

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}))

const AddButton = props => {
  const classes = useStyles()
  const { onClick } = props

  return (
    <div className={classes.root} onClick={onClick}>
      <Fab color="primary" aria-label="add">
        <AddIcon />
      </Fab>
    </div>
  )
}

export default AddButton
