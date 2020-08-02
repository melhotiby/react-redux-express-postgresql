import { concat } from 'ramda'
import { takeEvery, call, fork, put } from 'redux-saga/effects'

// Actions
const prefix = concat('api/registration/')

const FETCH_USER = prefix('FETCH_USER')
const FETCH_USER_SUCCESS = prefix('FETCH_USER_SUCCESS')
const FETCH_USER_ERROR = prefix('FETCH_USER_ERROR')

const INITIAL_STATE = {
  session: {
    isAuthenticated: false
  }
}

export const fetchUser = () => ({
  type: FETCH_USER
})

export const fetchUserSuccess = ({ user }) => ({
  type: FETCH_USER_SUCCESS,
  payload: { user }
})

export const fetchUserError = ({ error }) => ({
  type: FETCH_USER_ERROR,
  payload: { error }
})

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_USER_SUCCESS:
      return action.payload.user || false
    case FETCH_USER_ERROR:
      return false
    default:
      return state
  }
}
