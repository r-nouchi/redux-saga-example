import {
  take,
  takeEvery,
  takeLatest,
  throttle,
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
  throttleSampleSuccess,
  THROTTLE_SAMPLE_START,
} from '../action'

function* handleTakeSampleStart() {
  while(true) {
    const action = yield take(TAKE_SAMPLE_START)
    yield call(sleepAsync, action.payload.count)
    yield put(takeSampleSuccess())
  }
}

function* handleTakeEverySampleStart() {
  yield takeEvery(TAKE_EVERY_SAMPLE_START, runTakeEverySampleStart)
}

function* runTakeEverySampleStart(action) {
  console.log(`take action ${JSON.stringify(action)}`)
  yield call(sleepAsync, action.payload.count)
  yield put(takeEverySampleSuccess())
}

function* handleTakeLatestSampleStart() {
  yield takeLatest(TAKE_LATEST_SAMPLE_START, runTakeLatestSampleStart)
}

function* runTakeLatestSampleStart(action) {
  console.log(`take action ${JSON.stringify(action)}`)
  yield call(sleepAsync, action.payload.count)
  yield put(takeLatestSampleSuccess())
}

function* handleThrottleSampleStart() {
  yield throttle(1800, THROTTLE_SAMPLE_START, runThrottleSampleStart)
}

function* runThrottleSampleStart(action) {
  console.log(`take action ${JSON.stringify(action)}`)
  yield call(sleepAsync, action.payload.count)
  yield put(throttleSampleSuccess())
}

function* handleDebounceSampleStart() {
  yield debounce(1200, DEBOUNCE_SAMPLE_START, runDebounceSampleStart)
}

function* runDebounceSampleStart(action) {
  console.log(`take action ${JSON.stringify(action)}`)
  yield call(sleepAsync, action.payload.count)
  yield put(debounceSampleSuccess())
}

const sleepAsync = async (count) => {
  await new Promise(r => setTimeout(r, 5000))
}

export default [
  handleTakeSampleStart,
  handleTakeEverySampleStart,
  handleTakeLatestSampleStart,
  handleThrottleSampleStart,
  handleDebounceSampleStart,
]
