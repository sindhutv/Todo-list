import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { CardHeader } from '@mui/material';
import TextField from '@mui/material/TextField';
import { Box, Drawer, Grid } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { ErrorBoundary } from 'react-error-boundary';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { addTodo, deleteTodo, editTodo } from '../actions/todoActions';

const Feed = () => {
  const { todos } = useSelector((state) => state.todo);
  const [newTodoText, setNewTodoText] = useState('');
  const [editingTodo, setEditingTodo] = useState(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false); // State for drawer
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

  const handleEditTodo = (todo) => {
    setEditingTodo({ ...todo });
    setIsDrawerOpen(true); // Open the drawer
  };

  const handleSaveTodo = () => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === editingTodo.id) {
        return {
          ...todo,
          text: editingTodo.text,
          description: editingTodo.description,
        };
      }
      return todo;
    });

    dispatch(editTodo(updatedTodos)); // Dispatch the updated todos

    setEditingTodo(null); // Clear the editing todo
    setIsDrawerOpen(false); // Close the drawer
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
            <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
              <TextField
                type="text"
                value={newTodoText}
                onChange={(e) => setNewTodoText(e.target.value)}
                placeholder="Enter a new todo"
              />
              <Button variant="contained" color="primary" onClick={handleAddTodo} sx={{ marginLeft: '1rem' }}>
                +
              </Button>
            </Box>
            <ul className="todo-list">
              {todos.map((todo) => (
                <li key={todo.id}>
                  <Grid container alignItems="center" justifyContent="space-between">
                    <Grid item>
                      {editingTodo && editingTodo.id === todo.id ? (
                        <TextField
                          type="text"
                          value={editingTodo.text}
                          onChange={(e) =>
                            setEditingTodo({
                              ...editingTodo,
                              text: e.target.value,
                            })
                          }
                        />
                      ) : (
                        <span>{todo.text}</span>
                      )}
                    </Grid>
                    <Grid item>
                      {editingTodo && editingTodo.id === todo.id ? null : (
                        <>
                          <Button variant="contained" color="secondary" onClick={() => handleDeleteTodo(todo.id)}>
                            <DeleteIcon />
                          </Button>
                          <Button variant="contained" color="info" onClick={() => handleEditTodo(todo)}>
                            <EditIcon />
                          </Button>
                        </>
                      )}
                    </Grid>
                  </Grid>
                  {editingTodo && editingTodo.id === todo.id && (
                    <TextField
                      type="text"
                      value={editingTodo.description}
                      onChange={(e) =>
                        setEditingTodo({
                          ...editingTodo,
                          description: e.target.value,
                        })
                      }
                      label="Description"
                      multiline
                      rows={4}
                      variant="outlined"
                      sx={{ marginTop: '1rem' }}
                    />
                  )}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </Box>
      <Drawer anchor="right" open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}>
        {/* Content of the drawer */}
        {editingTodo && (
          <Box sx={{ padding: '2rem' }}>
            <TextField
              type="text"
              value={editingTodo.text}
              onChange={(e) =>
                setEditingTodo({
                  ...editingTodo,
                  text: e.target.value,
                })
              }
              sx={{ marginBottom: '1rem' }}
            /><br/>
            <TextField
              type="text"
              value={editingTodo.description}
              onChange={(e) =>
                setEditingTodo({
                  ...editingTodo,
                  description: e.target.value,
                })
              }
              label="Description"
              multiline
              rows={4}
              variant="outlined"
              sx={{ marginBottom: '1rem' }}
            /><br/>
            {editingTodo && editingTodo.id && (
              <Button variant="contained" color="info" onClick={handleSaveTodo}>
                Save
              </Button>
            )}
          </Box>
        )}
      </Drawer>
    </>
  );
};

export default Feed;
