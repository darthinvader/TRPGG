import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Books from "./components/Books/Books";
import Navbar from "./components/Navbar/Navbar";
import { lightTheme as light, darkTheme as dark } from "./utils/themes";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useState } from "react";
import CharacterSheet from "./components/CharacterSheet/CharacterSheet";

enum themeSelection {
  Light,
  Dark,
}

function App() {
  const lightTheme = light;
  const darkTheme = dark;

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
        <CssBaseline />
        <Navbar switchTheme={switchTheme} />
        <Switch>
          <Route exact path="/">
            <Books />
          </Route>
          <Route exact path="/books">
            <Books />
          </Route>
          <Route exact path="/characterSheet">
            <CharacterSheet />
          </Route>
        </Switch>
      </ThemeProvider>
    </Router>
  );
}

export default App;
