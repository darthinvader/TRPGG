import BooksManager from "./Books/BooksManager";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Link to="/Books">Books</Link>
          </Route>
          <Route exact path="/Books">
            <BooksManager />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
