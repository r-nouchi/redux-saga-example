import { connect } from 'react-redux'
import selection from '../component/selection'
import {
  selectionStartEvent,
} from '../action'

let count = 0

const mapStateToProps = (state) => ({
  sampleState: state.selectionState,
})

const mapDispatchToProps = (dispatch) => ({
  onClickSelectionButton: () => {
    dispatch(selectionStartEvent(count++))
  },
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(selection)
