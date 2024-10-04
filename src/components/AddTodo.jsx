import React, { useState } from 'react';
import { useTodoContext } from '../context/TodoContext';

const AddTodo = () => {
  const { addTodo } = useTodoContext();
  const [task, setTask] = useState('');

  const handleAddTodo = () => {
    if (task.trim()) {
      addTodo(task);
      setTask(''); // Clear input field after adding
    }
  };

  return (
    <div style={{margin:'20px auto'}}>
      <input 
        type="text" 
        value={task} 
        onChange={(e) => setTask(e.target.value)} 
        placeholder="Add a new task" 
      />
      <button  onClick={handleAddTodo}>Add</button>
    </div>
  );
};

export default AddTodo;
