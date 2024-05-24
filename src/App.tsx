import "./App.css";
import { Box, Paper, useMediaQuery } from "@mui/material";
import Navbar from "./components/Navbar";
import MobileNavbar from "./components/MobileNavbar";

function App() {
  const isSmallScreen = useMediaQuery("(max-width: 750px)");
  return (
    <Paper elevation={0}>
      <Box>
        <header>{isSmallScreen ? <MobileNavbar /> : <Navbar />}</header>
      </Box>
    </Paper>
  );
}

export default App;
