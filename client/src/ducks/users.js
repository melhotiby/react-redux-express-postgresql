import { concat } from 'ramda'
import { takeEvery, call, fork, put } from 'redux-saga/effects'
import * as API from '../api/users'

// Actions
const prefix = concat('api/users/')

const FETCH_USER = prefix('FETCH_USER')
const FETCH_USER_SUCCESS = prefix('FETCH_USER_SUCCESS')
const FETCH_USER_ERROR = prefix('FETCH_USER_ERROR')

const INITIAL_STATE = {
  users: [],
  errors: []
}

export const fetchUser = () => ({
  type: FETCH_USER
})

export const fetchUserSuccess = ({ users }) => ({
  type: FETCH_USER_SUCCESS,
  payload: { users }
})

export const fetchUserError = ({ error }) => ({
  type: FETCH_USER_ERROR,
  payload: { error }
})

function* getUser() {
  try {
    const response = yield call(API.fetchUser)
    console.log(response)
    yield put(
      fetchUserSuccess({
        users: response.data
      })
    )
  } catch (e) {
    yield put(
      fetchUserError({
        error: false
      })
    )
  }
}

function* watchGetUserRequest() {
  yield takeEvery(FETCH_USER, getUser)
}

export const usersSaga = [fork(watchGetUserRequest)]

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_USER_SUCCESS:
      return action.payload.users || false
    case FETCH_USER_ERROR:
      return false
    default:
      return state
  }
}
