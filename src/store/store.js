import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import postReducer from "./reducer/reducer";
import createSagaMiddleware from "redux-saga";
import saga from "./saga/saga";

const sagaMiddleware = createSagaMiddleware();

const initialState = [];

const store = createStore(
  postReducer,
  initialState,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(saga);
export default store;
