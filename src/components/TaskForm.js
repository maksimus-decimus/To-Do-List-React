import React, { useState } from 'react';
 
// Rep la funció per afegir la tasca (que es troba a App.js) per 'props'
const TaskForm = ({ onAddTask }) => {
  const [newTaskText, setNewTaskText] = useState(''); // Estat local per l'input
 
  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTaskText.trim() === '') return;
    
    // Crida la funció del pare, passant-li el text de la tasca
    onAddTask(newTaskText, false); 
    
    setNewTaskText(''); // Neteja l'input
  };
 
  const handleImportantTask = (e) => {
    e.preventDefault();
    if (newTaskText.trim() === '') return;
    
    onAddTask(newTaskText, true);
    setNewTaskText('');
  };
 
  return (
    <form onSubmit={handleSubmit} className="task-form">
      <input
        type="text"
        value={newTaskText}
        onChange={(e) => setNewTaskText(e.target.value)}
        placeholder="Afegeix una nova tasca..."
      />
      <button type="submit">Afegir</button>
      <button type="button" onClick={handleImportantTask} className="important-btn">
        Tasca Important
      </button>
    </form>
  );
};
 
export default TaskForm;
