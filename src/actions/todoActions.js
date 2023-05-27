export const addTodo = (newTodo) => ({
    type: 'ADD_TODO',
    payload: newTodo,
  });
  
  export const deleteTodo = (id) => ({
    type: 'DELETE_TODO',
    payload: id,
  });
  
  export const startEdit = (id, text) => ({
    type: 'START_EDIT',
    payload: { id, text },
  });
  
  export const cancelEdit = () => ({
    type: 'CANCEL_EDIT',
  });
  
  export const saveTodo = (id, text) => ({
    type: 'SAVE_TODO',
    payload: { id, text },
  });
  
  export const setNewTodoText = (text) => ({
    type: 'SET_NEW_TODO_TEXT',
    payload: text,
  });
  
  export const setEditedTodoText = (text) => ({
    type: 'SET_EDITED_TODO_TEXT',
    payload: text,
  });
  
 
  