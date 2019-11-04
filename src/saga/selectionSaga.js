import {
  take,
  call,
  put,
  select,
  actionChannel,
} from 'redux-saga/effects'
import {
  buffers,
} from 'redux-saga'
import {
  SELECTION_START_EVENT, selectionSuccessEvent,
} from '../action'

function* handleSelectionStart() {
  const channel = yield actionChannel(SELECTION_START_EVENT, buffers.expanding(4))
  while(true) {
    const action = yield take(channel)
    console.log("take action: %o", action)
    const state = yield select(state => state.selectionState)
    console.log("selectionState: %o", state)
    const selected = yield call(selectionAsync, state.source, state.selected)
    const successAction = yield put(selectionSuccessEvent(selected))
    console.log("task finished. dispatchedAction: %o", successAction)
  }
}

const selectionAsync = async (source, exclude) => {
  console.log("slection start. source: %o exclude: %o", source, exclude)
  const excludedSource = source.filter(value => !exclude.includes(value))
  console.log("excludedSource: %o", excludedSource)
  const sortedSource = excludedSource.sort((a, b) => b - a)
  console.log("selection end. sortedSource: %o", sortedSource)
  console.log("sleep start")
  await new Promise(r => setTimeout(r, 3000))
  console.log("sleep end")
  return sortedSource[0]
}

export default [
  handleSelectionStart,
]
