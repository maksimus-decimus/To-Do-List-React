import React from 'react';
import TaskDueDate from './TaskDueDate';

const TaskItem = ({ task, onToggleComplete, onDeleteTask, onUpdateTaskDate }) => {
  return (
    <li key={task.id} className={task.completed ? 'completed' : ''}>
      <span 
        onClick={() => onToggleComplete(task.id)}
        className={task.isImportant ? 'important-task' : ''}
      >
        {task.text}
      </span>
      
      <TaskDueDate
        taskId={task.id}
        dueDate={task.dueDate}
        onUpdateTaskDate={onUpdateTaskDate}
      />
      
      <button onClick={() => onDeleteTask(task.id)}>Eliminar</button>
    </li>
  );
};

export default TaskItem;
