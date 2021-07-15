import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTodoDispatch, useTodoState } from "./context/todoContext";
import { ARemoveTodo } from "./redux/action/action";
import { IState } from "./redux/reducer/rootReducer";
import { useTodoStore } from "./zustand/useTodo";

const Todo = () => {
  // const dispatch = useDispatch();
  const dispatch = useTodoDispatch();
  // const { todos } = useTodoState();

  const { todos, removeTodo: remove } = useTodoStore();

  // const todos = useSelector((state: IState) => state.todoReducer.todos);

  const removeTodo = useCallback(
    (id: number) => {
      // dispatch(ARemoveTodo(id));
      // dispatch({ type: "REMOVE_TODO", payload: id });
      remove(id);
    },
    [remove]
  );
  return (
    <div className="mt-7">
      {todos ? (
        todos.map((re) => (
          <div
            key={re.id}
            className="flex items-center justify-between mt-2 bg-gray-300 rounded-md w-80 h-14 "
          >
            <p className="ml-4 text-2xl font-bold text-gray-500">{re.text}</p>
            <button
              onClick={() => removeTodo(re.id)}
              className="p-2 m-4 text-white bg-red-400 rounded-md"
            >
              Delete
            </button>
          </div>
        ))
      ) : (
        <h1>No todo</h1>
      )}
    </div>
  );
};

export default Todo;
