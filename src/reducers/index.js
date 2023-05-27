// reducers/index.js
import { combineReducers } from 'redux';
import todoReducer from './todo'; 

const rootReducer = combineReducers({
  todo: todoReducer,
  // Add more reducers here if needed
});

export default rootReducer;
