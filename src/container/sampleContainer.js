import { connect } from 'react-redux'
import sample from '../component/sample'
import {
  takeSampleStart,
  takeEverySampleStart,
  takeLatestSampleStart,
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
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(sample)
