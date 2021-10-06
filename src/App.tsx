import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material";
import Books from "./components/Books/Books";
import Navbar from "./components/Navbar/Navbar";

function App() {
  const theme = createTheme({
    palette: {
      mode: "light",
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Books />
    </ThemeProvider>
  );
}

export default App;
