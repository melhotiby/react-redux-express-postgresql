import { take, call, fork, put } from 'redux-saga/effects'
import { HANDLE_STRIPE_TOKEN } from '../actions/payments'
import { fetchUser } from '../actions/auth'

import * as api from '../api/payments'

function* handleStripeToken({ token }) {
  try {
    const response = yield call(api.handleToken, { token })

    yield put(
      fetchUser({
        user: response.data
      })
    )
  } catch (e) {
    console.log(e)
  }
}

function* watchHandleTokenRequest() {
  while (true) {
    const action = yield take(HANDLE_STRIPE_TOKEN)
    yield call(handleStripeToken, { token: action.payload.token })
  }
}

const paymentsSagas = [fork(watchHandleTokenRequest)]

export default paymentsSagas
