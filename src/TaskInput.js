import React, { useState } from 'react';
import './App.css';

function TaskInput({ addTask }) {
  const [input, setInput] = useState('');

  const handleAdd = () => {
    if (input.trim()) {
      addTask(input);
      setInput('');
    }
  };

  return (
    <div className='TaskInput'>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Pievienot jaunu uzdevumu"
      />
      <button onClick={handleAdd}>Pievienot</button>
    </div>
  );
}

export default TaskInput;
