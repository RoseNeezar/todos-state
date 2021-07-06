import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ARemoveTodo } from "./redux/action/action";
import { IState } from "./redux/reducer/rootReducer";

const Todo = () => {
  const dispatch = useDispatch();

  const todos = useSelector((state: IState) => state.todoReducer.todos);

  const removeTodo = useCallback(
    (id: number) => {
      dispatch(ARemoveTodo(id));
    },
    [dispatch]
  );
  console.log(todos);
  return (
    <div className="mt-7">
      {todos ? (
        todos.map((re) => (
          <div
            key={re.id}
            className="bg-gray-300 w-80 mt-2 h-14 flex items-center rounded-md justify-between "
          >
            <p className="text-2xl font-bold text-gray-500 ml-4">{re.text}</p>
            <button
              onClick={() => removeTodo(re.id)}
              className="bg-red-400 text-white p-2 rounded-md m-4"
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
