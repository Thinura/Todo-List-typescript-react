import React, { useState } from "react";
import "./App.css";
import InputField from "./components/InputField";
import TodoList from "./components/TodoList";
import { Todo } from "./models/todo";

interface InitialStateAttributes {
  todo: string;
  todos: Todo[];
}
const initialState: InitialStateAttributes = {
  todo: "",
  todos: [],
};

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>(initialState.todo);
  const [todos, setTodos] = useState<Todo[]>(initialState.todos);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo) {
      setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
      setTodo(initialState.todo);
    }
  };

  return (
    <div className="App">
      <span className={"heading"}>Taskify</span>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default App;
