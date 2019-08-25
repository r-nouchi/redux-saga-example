import { take, takeEvery, takeLatest, call, put } from 'redux-saga/effects'
import {
  TAKE_SAMPLE_START,
  TAKE_EVERY_SAMPLE_START,
  TAKE_LATEST_SAMPLE_START,
  takeSampleSuccess,
  takeEverySampleSuccess,
  takeLatestSampleSuccess,
} from '../action/sampleAction'

function* handleTakeSampleStart() {
  while(true) {
    console.log('ready take action: TAKE_SAMPLE_START')
    const action = yield take(TAKE_SAMPLE_START)
    console.log(`take action ${JSON.stringify(action)}`)

    console.log(`start call ${action.payload.count}`)
    yield call(sleepAsync)
    console.log(`finish call ${action.payload.count}`)

    yield put(takeSampleSuccess())
  }
}

function* handleTakeEverySampleStart() {
  yield takeEvery(TAKE_EVERY_SAMPLE_START, runTakeEverySampleStart)
}

function* runTakeEverySampleStart(action) {
  console.log(`take action ${action}`)

  console.log(`start call ${action.payload.count}`)
  yield call(sleepAsync)
  console.log(`finish call ${action.payload.count}`)

  yield put(takeEverySampleSuccess())
}

function* handleTakeLatestSampleStart() {
  yield takeLatest(TAKE_LATEST_SAMPLE_START, runTakeLatestSampleStart)
}

function* runTakeLatestSampleStart(action) {
  console.log(`take action ${action}`)

  console.log(`start call ${action.payload.count}`)
  yield call(sleepAsync)
  console.log(`finish call ${action.payload.count}`)

  yield put(takeLatestSampleSuccess())
}

const sleepAsync = async () => {
  console.log('start sleepAsync')
  await new Promise(r => setTimeout(r, 5000))
  console.log('finish sleepAsync')
}

export default [
  handleTakeSampleStart,
  handleTakeEverySampleStart,
  handleTakeLatestSampleStart,
]
