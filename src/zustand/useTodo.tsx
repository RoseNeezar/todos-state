import create from "zustand";
import { Todo } from "../redux/types";
import { combineAndImmer } from "./combineAndImmer";

export const useTodoStore = create(
  combineAndImmer(
    {
      todos: [] as Todo[],
      isDone: false,
    },
    (set, get) => ({
      addTodo: (title: string) => {
        const todo: Todo = {
          id: Number(get().todos.length),
          text: title,
          done: false,
        };
        set((s) => {
          s.todos.push(todo);
        });
      },
      removeTodo: (id: number) => {
        set((s) => {
          s.todos = s.todos.filter((res) => res.id !== id);
          s.isDone = !s.isDone;
        });
      },
    })
  )
);
