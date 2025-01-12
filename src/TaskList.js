import React from 'react';
import './App.css';

function TaskList({ tasks, toggleTask, deleteTask }) {
  return (
    <ul className='TaskList'>
      {tasks.map((task) => (
        <li key={task.id}>
          <span
            style={{
              textDecoration: task.completed ? 'line-through' : 'none',
            }}
            onClick={() => toggleTask(task.id)}
          >
            {task.text}
          </span>
          <button onClick={() => deleteTask(task.id)}>Dzēst</button>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
