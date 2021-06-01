import { all } from 'redux-saga/effects'

import inCartSagas from './inCart'
import uiSagas from './ui'
import loginDetailSagas from './loginDetail'

export default function* rootSaga() {
  yield all([...inCartSagas, ...uiSagas, ...loginDetailSagas])
}
