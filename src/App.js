import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { Box, Stack } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { ErrorBoundary } from 'react-error-boundary';

import rootReducer from './reducers'; // Replace './reducers' with the correct path to your root reducer file
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Feed from './components/Feed';
import Rightbar from './components/Rightbar';
import Add from './components/Add';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const store = createStore(rootReducer); 

function App() {
  return (
    <Provider store={store}>
      <ErrorBoundary>
        <ThemeProvider theme={darkTheme}>
          <CssBaseline />
          <Box>
            <Navbar />
            <Stack direction="row" justifyContent="space-between">
              <Sidebar />
              <Feed />
              <Rightbar />
            </Stack>
            <Add />
          </Box>
        </ThemeProvider>
      </ErrorBoundary>
    </Provider>
  );
}

export default App;
