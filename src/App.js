import BooksManager from "./Books/BooksManager";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/books/book">
            <BooksManager />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
