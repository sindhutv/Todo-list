import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Autocomplete from '@mui/material/Autocomplete';
import { useDispatch, useSelector } from 'react-redux'; 
import { setEditedTodo } from '../actions/editActions'; 

const Rightbar = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [editedTitle, setEditedTitle] = useState('');
  const [editedDescription, setEditedDescription] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const editedTodo = useSelector((state) => state.edit.editedTodo); 
  const dispatch = useDispatch();

  const handleEditClick = () => {
    setEditedTitle(title);
    setEditedDescription(description);
    setIsEditing(true);
    dispatch(setEditedTodo(null)); // Reset the edited todo in the Redux state
  };

  const handleSaveClick = () => {
    setTitle(editedTitle);
    setDescription(editedDescription);
    setIsEditing(false);
  };

  const handleTitleChange = (e, value) => {
    setEditedTitle(value || '');
  };

  const handleDescriptionChange = (e) => {
    setEditedDescription(e.target.value);
  };

  const titleOptions = ['Carrot', 'Banana', 'coriander', 'Beans', 'Strawberry', 'Biscuits', 'Onion'];
  const descriptionOptions = ['improves eyesight', 'Good for digestion', 'Tastes good', 'Good for skin', 'Goes well with coffee'];

  const cardHeight = isEditing ? 'auto' : '250px';

  // Set the initial values based on the edited todo from Redux
  if (editedTodo && !isEditing) {
    setTitle(editedTodo.title);
    setDescription(editedTodo.description);
  }

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        minHeight: '100vh',
        padding: '20px',
      }}
    >
      <h2>Edit Todo</h2>
      <Card sx={{ width: '250px', height: cardHeight }}>
        <CardContent>
          {isEditing ? (
            <>
              <Autocomplete
                freeSolo
                options={titleOptions}
                value={editedTitle}
                onChange={handleTitleChange}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    fullWidth
                    autoFocus
                    variant="outlined" // Add variant for a round shape
                    sx={{ marginBottom: '10px' }} // Add margin bottom for gap
                  />
                )}
              />
              <Autocomplete
                freeSolo
                options={descriptionOptions}
                value={editedDescription}
                onChange={(e, value) => setEditedDescription(value || '')}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    fullWidth
                    multiline
                    rows={3}
                    placeholder="Description"
                    variant="outlined" // Add variant for a round shape
                  />
                )}
              />
            </>
          ) : (
            <>
              {title && <h3>{title}</h3>}
              {description && <p>{description}</p>}
            </>
          )}
          {isEditing ? (
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', marginTop: '20px' }}>
              <Button variant="contained" color="primary" onClick={handleSaveClick}>
                Save
              </Button>
            </Box>
          ) : (
            <Button variant="contained" color="primary" onClick={handleEditClick}>
              Edit
            </Button>
          )}
        </CardContent>
      </Card>
    </Box>
  );
};

export default Rightbar;
