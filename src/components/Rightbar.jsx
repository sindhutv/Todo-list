// import React, { useState } from 'react';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import Button from '@mui/material/Button';
// import TextField from '@mui/material/TextField';
// import Box from '@mui/material/Box';
// import Autocomplete from '@mui/material/Autocomplete';

// const Rightbar = () => {
//   const [title, setTitle] = useState('');
//   const [description, setDescription] = useState('');
//   const [editedTitle, setEditedTitle] = useState('');
//   const [editedDescription, setEditedDescription] = useState('');
//   const [isEditing, setIsEditing] = useState(false);

//   const handleEditClick = () => {
//     setEditedTitle(title);
//     setEditedDescription(description);
//     setIsEditing(true);
//   };

//   const handleSaveClick = () => {
//     setTitle(editedTitle);
//     setDescription(editedDescription);
//     setIsEditing(false);
//   };

//   const handleTitleChange = (e, value) => {
//     setEditedTitle(value || '');
//   };

//   const handleDescriptionChange = (e) => {
//     setEditedDescription(e.target.value);
//   };

//   const titleOptions = ['Carrot', 'Banana', 'coriander', 'Beans', 'Strawberry', 'Biscuits', 'Onion'];
//   const descriptionOptions = ['improves eyesight', 'Good for digestion', 'Tastes good', 'Good for skin', 'Goes well with coffee'];

//   const cardHeight = isEditing ? 'auto' : '250px';

//   return (
//     <Box
//       sx={{
//         display: 'flex',
//         flexDirection: 'column',
//         justifyContent: 'flex-start',
//         alignItems: 'center',
//         minHeight: '100vh',
//         padding: '20px',
//       }}
//     >
//       <h2>Edit Todo</h2>
//       <Card sx={{ width: '250px', height: cardHeight }}>
//         <CardContent>
//           {isEditing ? (
//             <>
//               <Autocomplete
//                 freeSolo
//                 options={titleOptions}
//                 value={editedTitle}
//                 onChange={handleTitleChange}
//                 renderInput={(params) => (
//                   <TextField
//                     {...params}
//                     fullWidth
//                     autoFocus
//                     variant="outlined" 
//                     sx={{ marginBottom: '10px' }} 
//                   />
//                 )}
//               />
//               <Autocomplete
//                 freeSolo
//                 options={descriptionOptions}
//                 value={editedDescription}
//                 onChange={(e, value) => setEditedDescription(value || '')}
//                 renderInput={(params) => (
//                   <TextField
//                     {...params}
//                     fullWidth
//                     multiline
//                     rows={3}
//                     placeholder="Description"
//                     variant="outlined" 
//                   />
//                 )}
//               />
//             </>
//           ) : (
//             <>
//               {title && <h3>{title}</h3>}
//               {description && <p>{description}</p>}
//             </>
//           )}
//           {isEditing ? (
//             <Box sx={{ display: 'flex', justifyContent: 'flex-end', marginTop: '20px' }}>
//               <Button variant="contained" color="primary" onClick={handleSaveClick}>
//                 Save
//               </Button>
//             </Box>
//           ) : (
//             <Button variant="contained" color="primary" onClick={handleEditClick}>
//               Edit
//             </Button>
//           )}
//         </CardContent>
//       </Card>
//     </Box>
//   );
// };

// export default Rightbar;