export const ADD_TODO = "ADD_TODO";
export const REMOVE_TODO = "REMOVE_TODO";

export interface Todo {
  id: number;
  done: boolean;
  text: string;
}

export interface IAddTodo {
  type: typeof ADD_TODO;
  payload: Todo["text"];
}
export interface IRemoveTodo {
  type: typeof REMOVE_TODO;
  payload: Todo["id"];
}

export type TodoDispatchTypes = IAddTodo | IRemoveTodo;

export interface TodoState {
  todos: Todo[];
}
