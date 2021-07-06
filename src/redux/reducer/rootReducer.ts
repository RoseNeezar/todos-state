import { combineReducers } from "redux";
import { TodoState } from "../types";
import todoReducer from "./reducer";

export interface IState {
  todoReducer: TodoState;
}
export default combineReducers({
  todoReducer,
});
