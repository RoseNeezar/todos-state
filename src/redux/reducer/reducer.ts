import produce from "immer";
import { Todo, TodoDispatchTypes, TodoState } from "../types";

export const initialState: TodoState = {
  todos: [],
};

const todoReducer = produce(
  (draftState: TodoState = initialState, action: TodoDispatchTypes) => {
    switch (action.type) {
      case "ADD_TODO": {
        const todo: Todo = {
          id: draftState.todos.length,
          text: action.payload,
          done: false,
        };
        draftState.todos.push(todo);
        return;
      }

      case "REMOVE_TODO": {
        draftState.todos = draftState.todos.filter(
          (res) => res.id !== action.payload
        );
        return;
      }

      default: {
        return draftState;
      }
    }
  }
);

export default todoReducer;
