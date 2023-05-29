// todoActions.js

export const addTodo = (newTodo) => {
  return {
    type: 'ADD_TODO',
    payload: newTodo,
  };
};

export const deleteTodo = (id) => {
  return {
    type: 'DELETE_TODO',
    payload: id,
  };
};

export const editTodo = (editedTodos) => {
  return {
    type: 'EDIT_TODO',
    payload: editedTodos,
  };
};