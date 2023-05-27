  
const initialState = {
    editedTodo: null,
  };
  
  const editReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_EDITED_TODO':
        return {
          ...state,
          editedTodo: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default editReducer;