import BooksManager from "./Books/BooksManager";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Link to="/books/book">Books</Link>
          </Route>
          <Route path="/books/book">
            <BooksManager />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
