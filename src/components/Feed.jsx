import { Typography } from '@mui/material';
import React from 'react';
import Box from '@mui/material/Box';
import { ErrorBoundary } from 'react-error-boundary';
import {ThemeProvider, createTheme} from '@mui/material/styles';


const theme = createTheme({
    // theme configuration
  });

    const Feed = () => {
        return (
            <Box flex={5} padding={2} >
                <Box>
                <ErrorBoundary>
                    <ThemeProvider  theme={theme}>
                        <Typography variant="h5">Section</Typography>
                    </ThemeProvider>
                    </ErrorBoundary>
                </Box>
            </Box>
        )
    }

export default Feed;