import * as React from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import { Avatar } from '@mui/material';

export default function BasicChips() {
  return (
    <Stack direction="row" spacing={1} sx={{position:"fixed", bottom:20 , marginLeft:3, left:{md:30}}}>
      <Chip avatar={<Avatar sx={{bgcolor:"blue"}}>N</Avatar>} label="$0.09" />
      <Chip label="Buy $xyz" variant="outlined" sx={{bgcolor:'skyblue', color:"blue"}} />
    </Stack>
  );
}