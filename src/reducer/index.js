import { combineReducers } from "redux";
import sampleState from "./sampleState";
import selectionState from "./selectionState";
import loggingState from "./loggingState";

export default combineReducers({
  sampleState,
  selectionState,
  loggingState,
});
