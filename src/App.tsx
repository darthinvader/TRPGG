import { ThemeProvider } from "@emotion/react";
import { createTheme, CssBaseline, darkScrollbar } from "@mui/material";
import Books from "./components/Books/Books";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useState } from "react";
enum themeSelection {
  Light,
  Dark,
}

function App() {
  const lightTheme = createTheme({
    palette: {
      mode: "light",
    },
  });
  const darkTheme = createTheme({
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

  const [currentTheme, setCurrentTheme] = useState(themeSelection.Dark);

  const switchTheme = () => {
    setCurrentTheme((theme) => {
      if (theme === themeSelection.Dark) {
        return themeSelection.Light;
      } else {
        return themeSelection.Dark;
      }
    });
  };
  return (
    <Router>
      <ThemeProvider
        theme={currentTheme === themeSelection.Light ? lightTheme : darkTheme}
      >
        <Navbar switchTheme={switchTheme} />
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
