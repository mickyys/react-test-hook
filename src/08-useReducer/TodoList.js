import React from "react";
import { TodoListItem } from "./TodoListItem";

export const TodoList = ({ todos = [], handleDelete, handleToggle }) => {
  return todos.map((x, i) => (
    <TodoListItem
      key={x.id}
      todo={x}
      index={i}
      handleToggle={handleToggle}
      handleDelete={handleDelete}
    />
  ));
};
