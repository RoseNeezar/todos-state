import { useCallback, useRef } from "react";
import { useDispatch } from "react-redux";
import { AAddTodo } from "./redux/action/action";
import "./styles/output.css";
import Todo from "./Todo";

function App() {
  const dispatch = useDispatch();

  const newTodoRef = useRef<HTMLInputElement>(null);

  const onAddTodo = useCallback(() => {
    if (newTodoRef.current?.value) {
      if (newTodoRef.current.value.length > 0) {
        dispatch(AAddTodo(newTodoRef.current.value));
        newTodoRef.current.value = "";
      }
    }
  }, [dispatch]);

  return (
    <div className="w-full h-screen bg-gray-500 flex  items-center flex-col">
      <div className="bg-gray-400 p-5 mt-40 rounded-xl">
        <input className="rounded-md h-12" type="text" ref={newTodoRef} />
        <button
          className="bg-green-300 font-bold rounded-md text-gray-500 p-3 m-2"
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
