import {
  take,
  takeEvery,
  takeLatest,
  debounce,
  call,
  put
} from 'redux-saga/effects'
import {
  TAKE_SAMPLE_START,
  TAKE_EVERY_SAMPLE_START,
  TAKE_LATEST_SAMPLE_START,
  takeSampleSuccess,
  takeEverySampleSuccess,
  takeLatestSampleSuccess,
  DEBOUNCE_SAMPLE_START,
  debounceSampleSuccess,
} from '../action'

function* handleTakeSampleStart() {
  while(true) {
    console.log('ready take action: TAKE_SAMPLE_START')
    const action = yield take(TAKE_SAMPLE_START)
    console.log(`take action ${JSON.stringify(action)}`)

    console.log(`start call ${action.payload.count}`)
    yield call(sleepAsync, action.payload.count)
    console.log(`finish call ${action.payload.count}`)

    yield put(takeSampleSuccess())
  }
}

function* handleTakeEverySampleStart() {
  yield takeEvery(TAKE_EVERY_SAMPLE_START, runTakeEverySampleStart)
}

function* runTakeEverySampleStart(action) {
  console.log(`take action ${JSON.stringify(action)}`)

  console.log(`start call ${action.payload.count}`)
  yield call(sleepAsync, action.payload.count)
  console.log(`finish call ${action.payload.count}`)

  yield put(takeEverySampleSuccess())
}

function* handleTakeLatestSampleStart() {
  yield takeLatest(TAKE_LATEST_SAMPLE_START, runTakeLatestSampleStart)
}

function* runTakeLatestSampleStart(action) {
  console.log(`take action ${JSON.stringify(action)}`)

  console.log(`start call ${action.payload.count}`)
  yield call(sleepAsync, action.payload.count)
  console.log(`finish call ${action.payload.count}`)

  yield put(takeLatestSampleSuccess())
}

function* handleDebounceSampleStart() {
  yield debounce(1200, DEBOUNCE_SAMPLE_START, runDebounceSampleStart)
}

function* runDebounceSampleStart(action) {
  console.log(`take action ${JSON.stringify(action)}`)

  console.log(`start call ${action.payload.count}`)
  yield call(sleepAsync, action.payload.count)
  console.log(`finish call ${action.payload.count}`)

  yield put(debounceSampleSuccess())
}

const sleepAsync = async (count) => {
  console.log(`start sleepAsync count: ${count}`)
  await new Promise(r => setTimeout(r, 5000))
  console.log(`finish sleepAsync count: ${count}`)
}

export default [
  handleTakeSampleStart,
  handleTakeEverySampleStart,
  handleTakeLatestSampleStart,
  handleDebounceSampleStart,
]
