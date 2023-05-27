import {styled} from '@mui/material/styles';
import { AppBar, Avatar, Box, Button, Toolbar, Typography } from '@mui/material';
import React from 'react';
import { MapsUgcOutlined, ZoomOutMapTwoTone } from '@mui/icons-material';
import { yellow } from '@mui/material/colors';


const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
    
})

const Icons = styled(Box)(({ theme }) => ({
    display: "flex",
    gap: "10px",
    alignItems: "center"
    
}));

const Navbar = () => {
    return (
        <AppBar position='sticky'  >
            <StyledToolbar>
                <MapsUgcOutlined />
                <Typography>Frontend Assignment</Typography>
                <Icons>
                    <Avatar sx={{width:24, height:24}}>A</Avatar>
                    <Avatar sx={{bgcolor:yellow[500] , color: 'black', width:24,height:24}}>A</Avatar>
                <Button  variant="contained" >
                    Login or Create account
                </Button>
                <ZoomOutMapTwoTone/>
                </Icons>
            </StyledToolbar>
        </AppBar>
    )
}

export default Navbar;