import { useCallback, useRef } from "react";
import { useDispatch } from "react-redux";
import { useTodoDispatch, useTodoState } from "./context/todoContext";
import { AAddTodo } from "./redux/action/action";
import "./styles/output.css";
import Todo from "./Todo";
import { useTodoStore } from "./zustand/useTodo";
import shallow from "zustand/shallow";

function App() {
  const dispatch = useTodoDispatch();
  // const dispatch = useDispatch();
  const { addTodo } = useTodoStore(
    useCallback((state) => ({ addTodo: state.addTodo }), [])
  );

  const newTodoRef = useRef<HTMLInputElement>(null);

  const onAddTodo = useCallback(() => {
    if (newTodoRef.current?.value) {
      if (newTodoRef.current.value.length > 0) {
        // dispatch(AAddTodo(newTodoRef.current.value));
        // dispatch({ type: "ADD_TODO", payload: newTodoRef.current.value });
        addTodo(newTodoRef.current.value);
        newTodoRef.current.value = "";
      }
    }
  }, [addTodo]);

  return (
    <div className="flex flex-col items-center w-full h-screen bg-gray-500">
      <div className="p-5 mt-40 bg-gray-400 rounded-xl">
        <input className="h-12 p-2 rounded-md" type="text" ref={newTodoRef} />
        <button
          className="p-3 m-2 font-bold text-gray-500 bg-green-300 rounded-md"
          onClick={onAddTodo}
        >
          Add Todo
        </button>
      </div>
      <Todo />
    </div>
  );
}

export default App;
