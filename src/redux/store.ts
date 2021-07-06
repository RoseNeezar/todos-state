import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import RootReducer from "./reducer/rootReducer";

const middlewares = [thunk];
const store = createStore(
  RootReducer,
  compose(applyMiddleware(...middlewares))
);

export default store;
