import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Navbar />
          <Route exact path="/"></Route>
          <Route exact path="/Books"></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
