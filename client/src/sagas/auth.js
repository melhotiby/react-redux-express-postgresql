import { takeEvery, call, fork, put } from 'redux-saga/effects'
import { FETCH_USER, fetchUserError, fetchUserSuccess } from '../actions/auth'

import * as api from '../api/auth'

function* getUser() {
  try {
    const response = yield call(api.fetchUser)
    console.log(response)
    yield put(
      fetchUserSuccess({
        user: response.data
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

const authSagas = [fork(watchGetUserRequest)]

export default authSagas
