import React from 'react'
import ReactDOM from 'react-dom'
import logger from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import { reducers, sagas } from './ducks'

import App from './components/App'

/* ------------- Redux Configuration ------------- */

const middleware = []
const enhancers = []

/* ------------- Saga Middleware ------------- */
const sageMiddleware = createSagaMiddleware()
middleware.push(sageMiddleware)

/* ------------- Logger Middleware ------------- */

middleware.push(logger)

/* ------------- Assemble Middleware ------------- */

enhancers.push(applyMiddleware(...middleware))

/* ------------- Apply REDUX Dev tools ------------- */

const composeEnhancers =
  (typeof window !== 'undefined' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose

/* ------------- Create Store ------------- */

const enhancer = composeEnhancers(...enhancers)
const store = createStore(reducers, {}, enhancer)
sageMiddleware.run(sagas)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
