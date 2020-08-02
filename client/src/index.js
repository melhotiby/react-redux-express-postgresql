import React from 'react'
import ReactDOM from 'react-dom'
import logger from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import { all } from 'redux-saga/effects'

import App from './components/App'

/* ------------- Reducers ------------- */
import userReducer from './ducks/users'

/* ------------- Sagas ------------- */
import { usersSaga } from './ducks/users'

const rootSaga = function* rootSaga() {
  yield all([...usersSaga])
}

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
const reducers = combineReducers({
  user: userReducer
})
const store = createStore(reducers, {}, enhancer)
sageMiddleware.run(rootSaga)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
