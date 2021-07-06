import { Todo, TodoDispatchTypes, TodoState } from "../types";

export const initialState: TodoState = {
  todos: [],
};

const todoReducer = (
  draftState: TodoState = initialState,
  action: TodoDispatchTypes
) => {
  switch (action.type) {
    case "ADD_TODO":
      {
        console.log("added", draftState.todos);
        const todo: Todo = {
          id: draftState.todos.length || 0,
          text: action.payload,
          done: false,
        };

        return {
          ...draftState,
          todos: [...draftState.todos, todo],
        };
      }
      break;
    case "REMOVE_TODO": {
      console.log(
        "pauload",
        draftState.todos.map((re) => re),
        action
      );
      const todocopy = draftState.todos.filter(
        (res) => res.id !== action.payload
      );
      return {
        ...draftState,
        todos: todocopy,
      };
    }

    default: {
      return draftState;
    }
  }
};
export default todoReducer;
