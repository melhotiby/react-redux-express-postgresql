import { FETCH_SURVEYS_SUCCESS } from '../actions/survey'

const INITIAL_STATE = []

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_SURVEYS_SUCCESS:
      return action.payload.surveys.surveys || []
    default:
      return state
  }
}
