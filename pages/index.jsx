import React from 'react'
import { withRedux } from '../lib/redux'

import Layout from '../components/Layout'
import DenseAppBar from '../components/Header/index'
import SimpleBottomNavigation from '../components/Footer/index'
import Todo from '../components/Todo'
import TodoList from '../components/TodoList'

import { MuiThemeProvider } from '@material-ui/core/styles'
import { theme } from '../assets/style/theme'

import CssBaseline from '@material-ui/core/CssBaseline'
import Container from '@material-ui/core/Container'

const IndexPage = () => {
  return (
    <>
      <Layout />
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <DenseAppBar />
        <Container maxWidth="sm">
          <SimpleBottomNavigation />
          <TodoList />
          <Todo />
        </Container>
      </MuiThemeProvider>
    </>
  )
}

IndexPage.getInitialProps = ({ reduxStore }) => {
  // Tick the time once, so we'll have a
  // valid time before first render
  const { dispatch } = reduxStore
  dispatch({
    type: 'TICK',
    light: typeof window === 'object',
    lastUpdate: Date.now(),
  })

  return {}
}

export default withRedux(IndexPage)
