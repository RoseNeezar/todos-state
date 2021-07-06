import { Dispatch } from "redux";
import { ADD_TODO, REMOVE_TODO, Todo, TodoDispatchTypes } from "../types";

export const AAddTodo =
  (param: Todo["text"]) => (dispatch: Dispatch<TodoDispatchTypes>) => {
    dispatch({ type: ADD_TODO, payload: param });
  };

export const ARemoveTodo =
  (param: Todo["id"]) => (dispatch: Dispatch<TodoDispatchTypes>) => {
    console.log("click", param);
    dispatch({ type: REMOVE_TODO, payload: param });
  };
