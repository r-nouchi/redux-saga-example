import {
  TAKE_SAMPLE_SUCCESS,
  TAKE_EVERY_SAMPLE_SUCCESS,
  TAKE_LATEST_SAMPLE_SUCCESS,
} from '../action/sampleAction'

const initialState = {
  takeSuccessCount: 0,
  takeEverySuccessCount: 0,
  takeLatestSuccessCount: 0,
}

export default (state = initialState, action) => {
  console.log(`dispatch action: ${JSON.stringify(action)}`)
  switch(action.type) {
    case TAKE_SAMPLE_SUCCESS:
      return {
        ...state,
        takeSuccessCount: state.takeSuccessCount++,
      }
    case TAKE_EVERY_SAMPLE_SUCCESS:
      return {
        ...state,
        takeEverySuccessCount: state.takeEverySuccessCount++,
      }
    case TAKE_LATEST_SAMPLE_SUCCESS:
      return {
        ...state,
        takeLatestSuccessCount: state.takeLatestSuccessCount++,
      }
    default:
      return state
  }
}
