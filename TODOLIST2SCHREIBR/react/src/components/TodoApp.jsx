import React from "react";
import Form from "./TodoForm";
import List from "./TodoList";
import "./TodoApp.css";

function TodoApp() {
  return (
    <div className="todo-app">
      <Form />
      <List />
    </div>
  );
}

export default TodoApp;
