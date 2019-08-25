import React from 'react'

const sample = (props) => (
  <div>
    <button type="button" onClick={props.onClickTakeButton}>take</button>
    <button type="button" onClick={props.onClickTakeEveryButton}>takeEvery</button>
    <button type="button" onClick={props.onClickTakeLatestButton}>takeLatest</button>
  </div>
)

export default sample
