import React, { Component } from 'react-native'
import { applyMiddleware, combineReducers, createStore } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'
import * as reducers from '../reducers/reducers'
import Main from './Main'
import { initializeDatabase } from '../utils/initializeDatabase'
import dbUrl from '../constants/dbUrl'

initializeDatabase(dbUrl)

const logger = createLogger()

let createStoreWithMiddleware
// if (__DEV__) {
//   createStoreWithMiddleware = applyMiddleware(thunk, logger)(createStore)
// } else {
//   createStoreWithMiddleware = applyMiddleware(thunk)(createStore)
// }
createStoreWithMiddleware = applyMiddleware(thunk)(createStore)

const reducer = combineReducers(reducers)
const store = createStoreWithMiddleware(reducer)

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Main />
      </Provider>
    )
  }
}