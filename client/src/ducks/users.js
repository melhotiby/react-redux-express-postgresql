import axios from 'axios'
import { concat, pathOr } from 'ramda'
import { takeEvery, take, call, fork, put } from 'redux-saga/effects'
import { USER_ENDPOINT } from '../api/Constants'

// Actions
const prefix = concat('api/users/')

const FETCH_USERS = prefix('FETCH_USERS')
const FETCH_USERS_SUCCESS = prefix('FETCH_USERS_SUCCESS')
const FETCH_USERS_ERROR = prefix('FETCH_USER_ERROR')

const DELETE_USER = prefix('DELETE_USER')
const DELETE_USER_SUCCESS = prefix('DELETE_USER_SUCCESS')
const DELETE_USER_ERROR = prefix('DELETE_USER_ERROR')

const INITIAL_STATE = {
  users: [],
  errors: false
}

// Fetch from API
export const fetchUsersFromApi = () => {
  return axios.get(USER_ENDPOINT)
}

export const deleteUserFromApi = id => {
  return axios.delete(`${USER_ENDPOINT}/${id}`)
}

// Action Creators
export const fetchUsers = () => ({
  type: FETCH_USERS
})

export const deleteUser = id => ({
  type: DELETE_USER,
  payload: { id }
})

export const fetchUsersSuccess = ({ users }) => ({
  type: FETCH_USERS_SUCCESS,
  payload: { users }
})

export const fetchUsersError = ({ error }) => ({
  type: FETCH_USERS_ERROR,
  payload: { error, users: [] }
})

export const deleteUserSuccess = ({ users }) => ({
  type: DELETE_USER_SUCCESS,
  payload: { users }
})

export const deleteUserError = ({ error }) => ({
  type: DELETE_USER_ERROR,
  payload: { error, users: [] }
})

// Sagas
function* getUser() {
  try {
    const response = yield call(fetchUsersFromApi)
    yield put(
      fetchUsersSuccess({
        users: response.data
      })
    )
  } catch (e) {
    yield put(
      fetchUsersError({
        error: false
      })
    )
  }
}

function* deleteUserById({ id }) {
  try {
    const response = yield call(deleteUserFromApi, id)
    yield put(
      deleteUserSuccess({
        users: response.data
      })
    )
  } catch (e) {
    yield put(
      deleteUserError({
        error: false
      })
    )
  }
}

function* watchGetUserRequest() {
  yield takeEvery(FETCH_USERS, getUser)
}

function* watchDeleteUserRequest() {
  while (true) {
    const action = yield take(DELETE_USER)
    yield call(deleteUserById, {
      id: action.payload.id
    })
  }
}

export const usersSaga = [
  fork(watchGetUserRequest),
  fork(watchDeleteUserRequest)
]

// Reducer
export default function reducer(state = INITIAL_STATE, action) {
  const users = pathOr([], ['payload', 'users'])(action)

  switch (action.type) {
    case FETCH_USERS_SUCCESS:
      return { users, errors: false }
    case DELETE_USER_SUCCESS:
      return { users, errors: false }
    case FETCH_USERS_ERROR:
      return { users: [], errors: true }
    case DELETE_USER_ERROR:
      return { users: [], errors: true }
    default:
      return state
  }
}
