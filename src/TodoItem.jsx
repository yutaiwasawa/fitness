import React from 'react';

function TodoItem({ todo, deleteTodo, toggleComplete }) {
  return (
    <li
      className={`flex items-center justify-between border rounded p-2 mb-2 ${
        todo.completed ? 'bg-green-100' : ''
      }`}
    >
      <span
        className={todo.completed ? 'line-through' : ''}
        onClick={() => toggleComplete(todo.id)}
      >
        {todo.text}
      </span>
      <button
        onClick={() => deleteTodo(todo.id)}
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
      >
        Delete
      </button>
    </li>
  );
}

export default TodoItem;
