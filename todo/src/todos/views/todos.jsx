import React from 'react';
import AddTodo from './addTodo.jsx';
import TodoList from './todoList.jsx';

import './style.css';

export default () => {
  return (
    <div className="todos">
      <AddTodo />
      <TodoList />
    </div>
  );
}
