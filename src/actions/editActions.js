export const setEditedTodo = (editedTodo) => {
    return {
      type: 'SET_EDITED_TODO',
      payload: editedTodo,
    };
  };