import produce from "immer";
import { createContext, useContext, useEffect, useReducer } from "react";
import { Todo, TodoDispatchTypes, TodoState } from "../redux/types";

const StateContext = createContext<TodoState>({
  todos: [],
});

export type IContextProps = (dispatch: TodoDispatchTypes) => void;

const DispatchContext = createContext({} as IContextProps);

const reducer = produce((draftState: TodoState, action: TodoDispatchTypes) => {
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
    default:
      return draftState;
  }
});

export const TodoProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, defaultDispatch] = useReducer(reducer, {
    todos: [],
  });

  const dispatch = (dispatch: TodoDispatchTypes) => defaultDispatch(dispatch);

  return (
    <DispatchContext.Provider value={dispatch}>
      <StateContext.Provider value={state}>{children}</StateContext.Provider>
    </DispatchContext.Provider>
  );
};

export const useTodoState = () => useContext(StateContext);
export const useTodoDispatch = () => useContext(DispatchContext);
