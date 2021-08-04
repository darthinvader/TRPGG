import BooksManager from "./Books/BooksManager";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Navbar from "./Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
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
