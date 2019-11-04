import {
  TAKE_SAMPLE_SUCCESS,
  TAKE_EVERY_SAMPLE_SUCCESS,
  TAKE_LATEST_SAMPLE_SUCCESS,
  DEBOUNCE_SAMPLE_SUCCESS,
  THROTTLE_SAMPLE_SUCCESS,
} from '../action'

const initialState = {
  takeSuccessCount: 0,
  takeEverySuccessCount: 0,
  takeLatestSuccessCount: 0,
  throttleSuccessCount: 0,
  debounceSuccessCount: 0,
}

export default (state = initialState, action) => {
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
    case THROTTLE_SAMPLE_SUCCESS:
      return {
        ...state,
        throttleSuccessCount: state.throttleSuccessCount++,
      }
    case DEBOUNCE_SAMPLE_SUCCESS:
      return {
        ...state,
        debounceSuccessCount: state.debounceSuccessCount++,
      }
    default:
      return state
  }
}
