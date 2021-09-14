import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
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
