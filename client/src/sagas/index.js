import AuthSagas from './auth'
import PaymentsSagas from './payments'
import SurveySagas from './survey'
import { all } from 'redux-saga/effects'

export default function* rootSaga() {
  yield all([...AuthSagas, ...PaymentsSagas, ...SurveySagas])
}
