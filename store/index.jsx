import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

import { reducer } from './reducer'

const initialState = {
  todos: [],
}

export const initializeStore = (preloadedState = initialState) => {
  return createStore(reducer, preloadedState, composeWithDevTools(applyMiddleware()))
}
