import {
  SELECTION_SUCCESS_EVENT,
} from '../action'

const initialState = {
  source: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  selected: [],
}

export default (state = initialState, action) => {
  switch(action.type) {
    case SELECTION_SUCCESS_EVENT:
    return {
      ...state,
      selected: [...state.selected, action.payload.selected],
    }
    default:
      return state
  }
}
