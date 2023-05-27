import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { CardHeader } from '@mui/material';
import TextField from '@mui/material/TextField';
import { addTodo, deleteTodo } from '../actions/todoActions';
import { Box } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { ErrorBoundary } from 'react-error-boundary';
import { setEditedTodo } from '../actions/editActions'; // Import the new action

const Feed = () => {
  const { todos } = useSelector((state) => state.todo);
  const [newTodoText, setNewTodoText] = useState('');
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    if (newTodoText.trim() !== '') {
      const newTodo = { id: Date.now(), text: newTodoText };
      dispatch(addTodo(newTodo));
      setNewTodoText('');
    }
  };

  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
  };

  const handleEditClick = (todo) => {
    dispatch(setEditedTodo(todo)); // Dispatch the action with the edited todo
  };

  const theme = createTheme();

  return (
    <>
      <Box flex={5} padding={2}>
        <Box>
          <ErrorBoundary>
            <ThemeProvider theme={theme}>
              <Typography variant="h5">Section</Typography>
            </ThemeProvider>
          </ErrorBoundary>
        </Box>

        <Card sx={{ width: '300px', height: '300px', display: 'flex', flexDirection: 'column' }}>
          <CardHeader title="Todo List" />
          <CardContent>
            <div className="add-todo">
              <TextField
                type="text"
                value={newTodoText}
                onChange={(e) => setNewTodoText(e.target.value)}
                placeholder="Enter a new todo"
              />
              <Button variant="contained" color="primary" onClick={handleAddTodo}>
                +
              </Button>
            </div>
            <ul className="todo-list">
              {todos.map((todo) => (
                <li key={todo.id}>
                  <span>{todo.text}</span>
                  <Button variant="contained" color="secondary" onClick={() => handleDeleteTodo(todo.id)}>
                    Delete
                  </Button>
                  <Button variant="contained" color="primary" onClick={() => handleEditClick(todo)}>
                    Edit
                  </Button>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </Box>
    </>
  );
};

export default Feed;
