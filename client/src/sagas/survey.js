import { take, call, fork, put, takeEvery } from 'redux-saga/effects'
import {
  CREATE_SURVEY,
  FETCH_SURVEYS,
  fetchSurveysSuccess
} from '../actions/survey'
import { fetchUser } from '../actions/auth'
import history from '../utils/history'

import * as api from '../api/survey'

function* fetchSurveys() {
  try {
    const response = yield call(api.fetchSurveys)
    yield put(
      fetchSurveysSuccess({
        surveys: response.data
      })
    )
  } catch (e) {
    console.log(e)
  }
}

function* handleCreateSurvey({ values }) {
  try {
    const response = yield call(api.createSurvey, { values })

    yield put(
      fetchUser({
        user: response.data
      })
    )
    history.push('/surveys')
  } catch (e) {
    history.push('/surveys')

    console.log(e)
  }
}

function* watchFetchSurveyRequest() {
  yield takeEvery(FETCH_SURVEYS, fetchSurveys)
}

function* watchHandleCreateSurvey() {
  while (true) {
    const action = yield take(CREATE_SURVEY)
    yield call(handleCreateSurvey, { values: action.payload.values })
  }
}

const surveySagas = [
  fork(watchHandleCreateSurvey),
  fork(watchFetchSurveyRequest)
]

export default surveySagas
