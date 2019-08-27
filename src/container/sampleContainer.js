import { connect } from 'react-redux'
import sample from '../component/sample'
import {
  takeSampleStart,
  takeEverySampleStart,
  takeLatestSampleStart,
  debounceSampleStart,
  throttleSampleStart,
} from '../action'

const mapStateToProps = (state) => ({
  sampleState: state.sampleState
})

const mapDispatchToProps = (dispatch) => ({
  onClickTakeButton: () => {
    let count = 0
    const interval = setInterval(() => {
      dispatch(takeSampleStart(count))
      count++
      if(count >= 3) {
        clearInterval(interval)
      }
    }, 1000)
  },
  onClickTakeEveryButton: () => {
    let count = 0
    const interval = setInterval(() => {
    dispatch(takeEverySampleStart(count))
      count++
      if(count >= 3) {
        clearInterval(interval)
      }
    }, 1000)
  },
  onClickTakeLatestButton: () => {
    let count = 0
    const interval = setInterval(() => {
    dispatch(takeLatestSampleStart(count))
      count++
      if(count >= 3) {
        clearInterval(interval)
      }
    }, 1000)
  },
  onClickThrottleButton: () => {
    let count = 0
    const interval = setInterval(() => {
    dispatch(throttleSampleStart(count))
      count++
      if(count >= 6) {
        clearInterval(interval)
      }
    }, 500)
  },
  onClickDebounceButton: () => {
    let count = 0
    const interval = setInterval(() => {
    dispatch(debounceSampleStart(count))
      count++
      if(count >= 6) {
        clearInterval(interval)
      }
    }, 500)
  },
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(sample)
