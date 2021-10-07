import { ThemeProvider } from "@emotion/react";
import { createTheme, CssBaseline, darkScrollbar } from "@mui/material";
import Books from "./components/Books/Books";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  const lightTheme = createTheme({
    palette: {
      mode: "light",
    },
  });
  const theme = createTheme({
    palette: {
      mode: "dark",
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: darkScrollbar(),
        },
      },
    },
  });

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Navbar />
        <CssBaseline />
        <Switch>
          <Route exact path="/"></Route>
          <Route exact path="/books">
            <Books />
          </Route>
        </Switch>
      </ThemeProvider>
    </Router>
  );
}

export default App;
