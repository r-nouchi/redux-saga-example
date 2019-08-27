export const TAKE_SAMPLE_START = "TAKE_SAMPLE_START"
export const TAKE_SAMPLE_SUCCESS = "TAKE_SAMPLE_SUCCESS"
export const TAKE_EVERY_SAMPLE_START = "TAKE_EVERY_SAMPLE_START"
export const TAKE_EVERY_SAMPLE_SUCCESS = "TAKE_EVERY_SAMPLE_SUCCESS"
export const TAKE_LATEST_SAMPLE_START = "TAKE_LATEST_SAMPLE_START"
export const TAKE_LATEST_SAMPLE_SUCCESS = "TAKE_LATEST_SAMPLE_SUCCESS"
export const THROTTLE_SAMPLE_START = "THROTTLE_SAMPLE_START"
export const THROTTLE_SAMPLE_SUCCESS = "THROTTLE_SAMPLE_SUCCESS"
export const DEBOUNCE_SAMPLE_START = "DEBOUNCE_SAMPLE_START"
export const DEBOUNCE_SAMPLE_SUCCESS = "DEBOUNCE_SAMPLE_SUCCESS"

export const takeSampleStart = (count) => ({
  type: TAKE_SAMPLE_START,
  payload: {
    count,
  }
})

export const takeSampleSuccess = () => ({
  type: TAKE_SAMPLE_SUCCESS,
  payload: {
  }
})

export const takeEverySampleStart = (count) => ({
  type: TAKE_EVERY_SAMPLE_START,
  payload: {
    count,
  }
})

export const takeEverySampleSuccess = () => ({
  type: TAKE_EVERY_SAMPLE_SUCCESS,
  payload: {
  }
})

export const takeLatestSampleStart = (count) => ({
  type: TAKE_LATEST_SAMPLE_START,
  payload: {
    count,
  }
})

export const takeLatestSampleSuccess = () => ({
  type: TAKE_LATEST_SAMPLE_SUCCESS,
  payload: {
  }
})

export const throttleSampleStart = (count) => ({
  type: THROTTLE_SAMPLE_START,
  payload: {
    count,
  }
})

export const throttleSampleSuccess = () => ({
  type: THROTTLE_SAMPLE_SUCCESS,
  payload: {
  }
})

export const debounceSampleStart = (count) => ({
  type: DEBOUNCE_SAMPLE_START,
  payload: {
    count,
  }
})

export const debounceSampleSuccess = () => ({
  type: DEBOUNCE_SAMPLE_SUCCESS,
  payload: {
  }
})
