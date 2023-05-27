import React, { useState } from 'react';

const TodoItem = ({ todo, deleteTodo, editTodo }) => {
  const [editMode, setEditMode] = useState(false);
  const [editedText, setEditedText] = useState(todo.text);

  const handleEdit = () => {
    if (editedText.trim() !== '') {
      editTodo(todo.id, editedText);
      setEditMode(false);
    }
  };

  return (
    <div>
      {editMode ? (
        <input
          type="text"
          value={editedText}
          onChange={(e) => setEditedText(e.target.value)}
        />
      ) : (
        <span>{todo.text}</span>
      )}
      <button onClick={() => deleteTodo(todo.id)}>Delete</button>
      {editMode ? (
        <button onClick={handleEdit}>Save</button>
      ) : (
        <button onClick={() => setEditMode(true)}>Edit</button>
      )}
    </div>
  );
};

export default TodoItem;
