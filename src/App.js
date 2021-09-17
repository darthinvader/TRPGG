import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Books from "./components/Books/Books";
import NameGenerators from "./components/Generators/NameGenerators/NameGenerators";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />

        <Switch>
          <Route exact path="/"></Route>
          <Route exact path="/books">
            <Books />
          </Route>
          <Route exact path="/generators">
            <NameGenerators />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
