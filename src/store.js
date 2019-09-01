import { createStore, applyMiddleware } from "redux"
import rootReducer from "./reducer"
import rootSaga from "./saga"
import createSagaMiddleware from "redux-saga"
import simpleSagaMonitor from "@redux-saga/simple-saga-monitor"
import mySagaMonitor from "./saga/monitor/sagaMonitor"

// const sagaMiddleware = createSagaMiddleware({sagaMonitor: simpleSagaMonitor})
const sagaMiddleware = createSagaMiddleware({sagaMonitor: mySagaMonitor})

const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware),
)

sagaMiddleware.run(rootSaga)

export default store
