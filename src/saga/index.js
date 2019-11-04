import { fork } from 'redux-saga/effects'
import sampleSaga from './sampleSaga'
import selectionSaga from './selectionSaga'

export default function* rootSaga() {
  let sagas = []
  sagas = sagas.concat(sampleSaga)
  sagas = sagas.concat(selectionSaga)
  for (let i = 0; i < sagas.length; i++) {
    yield fork(sagas[i]);
  }
}
