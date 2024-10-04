import React from 'react';
import { useTodoContext } from '../context/TodoContext';

const TodoList = () => {
  const { todos, removeTodo } = useTodoContext();

  return (
    <div style={{margin:'20px auto' }} >
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          {todo.task}
          <button style={{marginLeft:'10px' ,width:'70px',fontFamily :'cursive'}} onClick={() => removeTodo(todo.id)} >Remove</button>
        </li>
      ))}
    </ul>

    </div>
  );
};

export default TodoList;
