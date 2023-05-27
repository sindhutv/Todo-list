import { AssessmentOutlined, CandlestickChartOutlined, KeyboardBackspace, ShareOutlined, WindowOutlined } from '@mui/icons-material';
import { Avatar, Box,  List, ListItem, ListItemButton, ListItemIcon, ListItemText} from '@mui/material';
import { blue } from '@mui/material/colors';
import React from 'react';



const Sidebar = () => {
    return (
        <Box
        flex={2} p={2}
        sx={{ display: { xs: "none", sm: "block" } }}
        marginLeft={3} 
         >
            <Box position="fixed" >
                <List>
                    <ListItem disablePadding>
                        <ListItemButton component="a" href="#home">
                            <ListItemIcon>
                                <Avatar sx={{ bgcolor: blue[500], width: 24, height: 24 }} >N</Avatar>
                            </ListItemIcon>
                            <ListItemText primary="Name" />
                            <KeyboardBackspace/>
                        </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding>
                        <ListItemButton component="a" href="#Pages">
                            <ListItemIcon>
                                <WindowOutlined />
                            </ListItemIcon>
                            <ListItemText primary="Home" />
                        </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding>
                        <ListItemButton component="a" href="#Groups3">
                            <ListItemIcon>
                                <AssessmentOutlined />
                            </ListItemIcon>
                            <ListItemText primary="Section 1" />
                        </ListItemButton>
                    </ListItem>



                    <ListItem disablePadding>
                        <ListItemButton component="a" href="#Storefront">
                            <ListItemIcon>
                                <CandlestickChartOutlined />
                            </ListItemIcon>
                            <ListItemText primary="Section 2" />
                        </ListItemButton>
                    </ListItem>



                    <ListItem disablePadding>
                        <ListItemButton component="a" href="#Diversity3">
                            <ListItemIcon>
                                <ShareOutlined />
                            </ListItemIcon>
                            <ListItemText primary="Section 8" />
                        </ListItemButton>
                    </ListItem>



                    <ListItem disablePadding>
                        <ListItemButton component="a" href="#Settings">
                            <ListItemIcon>
                                <ShareOutlined />
                            </ListItemIcon>
                            <ListItemText primary="Section 8" />
                        </ListItemButton>
                    </ListItem>
                </List>
            </Box>
        </Box>
    )
}

export default Sidebar;