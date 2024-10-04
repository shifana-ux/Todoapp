import React, { createContext, useState } from 'react';

// Create the TodoContext
const TodoContext = createContext();

// Create a provider component
export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);

  // Add a new todo
  const addTodo = (task) => {
    setTodos([...todos, { id: Date.now(), task }]);
  };

  // Remove an existing todo
  const removeTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <TodoContext.Provider value={{ todos, addTodo, removeTodo }}>
      {children}
    </TodoContext.Provider>
  );
};

// Custom hook to use the TodoContext
export const useTodoContext = () => React.useContext(TodoContext);
