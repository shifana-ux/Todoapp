import React from 'react';
import { TodoProvider } from './context/TodoContext';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import './App.css';

const App = () => {
  return (
    <div className='App'>
    <TodoProvider>
        <h1 style={{textAlign:'center'}}>Todo List </h1>
        <AddTodo />
        <TodoList />
    </TodoProvider>
  </div>
  );
};

export default App;
