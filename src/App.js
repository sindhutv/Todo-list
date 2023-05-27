import Rightbar from "./components/Rightbar";
import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import { Box, Stack} from "@mui/material";
import Navbar from "./components/Navbar";
import CssBaseline from '@mui/material/CssBaseline';
import Add from "./components/Add";
import { ErrorBoundary } from "react-error-boundary";
import { ThemeProvider, createTheme } from '@mui/material/styles';


function App() {

    const darkTheme = createTheme({
        palette: {
            mode: 'dark',
        },
    });

    return (
        <ErrorBoundary>
        <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            <Box>
                <Navbar />
                <Stack direction="row" justifyContent="space-between" >
                    <Sidebar />
                    <Feed />
                    <Rightbar />
                </Stack>
                <Add />
            </Box>
        </ThemeProvider>
        </ErrorBoundary>
    )
}

export default App;