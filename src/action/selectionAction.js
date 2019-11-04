export const SELECTION_START_EVENT = "SELECTION_START_EVENT"
export const SELECTION_SUCCESS_EVENT = "SELECTION_SUCCESS_EVENT"

export const selectionStartEvent = (count) => ({
  type: SELECTION_START_EVENT,
  payload: {
    count,
  }
})

export const selectionSuccessEvent = (selected) => ({
  type: SELECTION_SUCCESS_EVENT,
  payload: {
    selected,
  }
})
