import { combineReducers } from 'redux'
import { all } from 'redux-saga/effects'

/* ------------- Reducers ------------- */
import userReducer from './users'

/* ------------- Sagas ------------- */
import { usersSaga } from './users'

export const reducers = combineReducers({
  user: userReducer
})

export const sagas = function* rootSaga() {
  yield all([...usersSaga])
}
