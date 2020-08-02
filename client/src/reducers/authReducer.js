import { FETCH_USER_SUCCESS, FETCH_USER_ERROR } from '../actions/auth'

const INITIAL_STATE = null

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_USER_SUCCESS:
      return action.payload.user || false
    case FETCH_USER_ERROR:
      return false
    default:
      return state
  }
}
