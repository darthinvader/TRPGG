import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material";
import Books from "./components/Books/Books";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  const theme = createTheme({
    palette: {
      mode: "light",
    },
  });

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Navbar />
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
