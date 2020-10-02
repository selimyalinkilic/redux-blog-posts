import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import rootReducer from "./reducers";

const middleware = [thunk];

const initalState = {};

const store = createStore(
  rootReducer,
  initalState,
  applyMiddleware(...middleware)
);

export default store;
