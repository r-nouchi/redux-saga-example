import { fork } from 'redux-saga/effects'
import sampleSaga from './sampleSaga'

export default function* rootSaga() {
  let sagas = []
  sagas = sagas.concat(sampleSaga)
  for (let i = 0; i < sagas.length; i++) {
    yield fork(sagas[i]);
  }
}
