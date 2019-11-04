const initialState = {
}

export default (state = initialState, action) => {
  console.log("dispatched action: %o", action)
  switch(action.type) {
    default:
      return state
  }
}
